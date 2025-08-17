import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    // Generate WhatsApp message
    const whatsappMessage = `Hi KH AGRO STOCKIST & EXPORTERS! 
    
New customer inquiry:
Name: ${data.firstName} ${data.lastName}
Company: ${data.company || 'Not specified'}
Email: ${data.email}
Service Interest: ${data.service}

Message: ${data.message}

Please contact me for further details.`;

    // Generate email content
    const emailSubject = encodeURIComponent(`New Inquiry from ${data.firstName} ${data.lastName} - ${data.service}`);
    const emailBody = encodeURIComponent(`Dear KH AGRO STOCKIST & EXPORTERS Team,

You have received a new inquiry through your website:

Customer Details:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Company: ${data.company || 'Not specified'}
- Service Interest: ${data.service}

Message:
${data.message}

Please contact the customer at: ${data.email}

Best regards,
Website Contact Form`);

    // Open WhatsApp
    const whatsappNumber = "919948547000"; // Remove + and spaces
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // Open email client
    const emailUrl = `mailto:khagrofoods@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    window.open(emailUrl, '_blank');

    // Still submit to backend for record keeping
    submitContactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Flat No. 304, Krisals County, Syamala Nagar,\nGuntur - 522006, Andhra Pradesh, India"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9948547000"
    },
    {
      icon: Mail,
      title: "Email",
      content: "khagrofoods@gmail.com"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-brand-dark mb-6">Contact Us</h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Ready to explore premium Sri Nandi agricultural products? Get in touch with our export specialists
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-brand-dark mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <Icon className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-dark">{info.title}</h4>
                        <p className="text-brand-gray whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-brand-gray">Interactive Map Coming Soon</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-brand-light">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-brand-dark mb-6">Send Us a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your first name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your company name" {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="rice">Premium Rice Varieties</SelectItem>
                              <SelectItem value="pulses">Pulses & Dals</SelectItem>
                              <SelectItem value="spices">Authentic Spices</SelectItem>
                              <SelectItem value="custom-branding">Custom Brand Solutions</SelectItem>
                              <SelectItem value="bulk-orders">Bulk Export Orders</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Tell us about your requirements..."
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-brand-blue text-white hover:bg-blue-700"
                      disabled={submitContactMutation.isPending}
                    >
                      {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
  );
}
