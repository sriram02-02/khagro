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
    submitContactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 Trade Center, Global Business District\nInternational City, IC 12345"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@globaltrade.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-brand-dark mb-6">Contact Us</h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Ready to start your import/export journey? Get in touch with our team of experts
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
                              <SelectItem value="export">Export Services</SelectItem>
                              <SelectItem value="import">Import Services</SelectItem>
                              <SelectItem value="logistics">Logistics Management</SelectItem>
                              <SelectItem value="consulting">Trade Consulting</SelectItem>
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

      {/* Office Locations */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Global Presence</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              With offices worldwide, we're always close to our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">North America</h3>
                <p className="text-brand-gray text-sm mb-4">
                  123 Trade Center<br />
                  International City, IC 12345<br />
                  +1 (555) 123-4567
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">Europe</h3>
                <p className="text-brand-gray text-sm mb-4">
                  45 Commerce Plaza<br />
                  London, UK EC1A 1BB<br />
                  +44 20 7946 0958
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">Asia Pacific</h3>
                <p className="text-brand-gray text-sm mb-4">
                  88 Business Tower<br />
                  Singapore 018956<br />
                  +65 6123 4567
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
