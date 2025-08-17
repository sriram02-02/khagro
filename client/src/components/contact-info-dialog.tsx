import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Copy, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";

interface ContactInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  specificItem?: string;
}

export default function ContactInfoDialog({ isOpen, onClose, product, specificItem }: ContactInfoDialogProps) {
  const { toast } = useToast();

  const contactInfo = {
    email: "info@khagroexports.com",
    phone: "+1 (555) 123-4567",
    whatsapp: "+1 (555) 123-4567",
    address: "123 Trade Center, Global Business District"
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${type} copied successfully`,
    });
  };

  const generateEmailSubject = () => {
    let subject = "Enquiry about ";
    if (specificItem) {
      subject += `${specificItem} from ${product?.name}`;
    } else if (product) {
      subject += product.name;
    } else {
      subject += "Products";
    }
    return encodeURIComponent(subject);
  };

  const generateEmailBody = () => {
    let body = `Dear KH AGRO STOCKIST & EXPORTERS Team,\n\nI am interested in learning more about `;
    if (specificItem) {
      body += `${specificItem} from your ${product?.name} category`;
    } else if (product) {
      body += `your ${product.name}`;
    } else {
      body += "your products";
    }
    body += `.\n\nPlease provide me with:\n- Pricing information\n- Minimum order quantities\n- Availability\n- Shipping details\n\nThank you for your time.\n\nBest regards,`;
    return encodeURIComponent(body);
  };

  const generateWhatsAppMessage = () => {
    let message = `Hi! I'm interested in `;
    if (specificItem) {
      message += `${specificItem} from your ${product?.name} category`;
    } else if (product) {
      message += `your ${product.name}`;
    } else {
      message += "your products";
    }
    message += `. Could you please provide more details?`;
    return encodeURIComponent(message);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-dark text-center mb-2">
            Contact Information
          </DialogTitle>
          {(product || specificItem) && (
            <p className="text-brand-gray text-center text-sm">
              Enquiry about: {specificItem ? `${specificItem}` : product?.name}
            </p>
          )}
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Email */}
          <div className="flex items-center justify-between p-4 bg-brand-light rounded-lg">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-brand-blue" />
              <div>
                <p className="font-semibold text-brand-dark">Email</p>
                <p className="text-brand-gray text-sm">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(contactInfo.email, "Email")}
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                className="bg-brand-blue text-white hover:bg-blue-700"
                onClick={() => {
                  window.open(`mailto:${contactInfo.email}?subject=${generateEmailSubject()}&body=${generateEmailBody()}`);
                }}
              >
                Send
              </Button>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between p-4 bg-brand-light rounded-lg">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-brand-blue" />
              <div>
                <p className="font-semibold text-brand-dark">Phone</p>
                <p className="text-brand-gray text-sm">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(contactInfo.phone, "Phone number")}
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                className="bg-green-600 text-white hover:bg-green-700"
                onClick={() => {
                  window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${generateWhatsAppMessage()}`);
                }}
              >
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center justify-between p-4 bg-brand-light rounded-lg">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-brand-blue" />
              <div>
                <p className="font-semibold text-brand-dark">Address</p>
                <p className="text-brand-gray text-sm">{contactInfo.address}</p>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => copyToClipboard(contactInfo.address, "Address")}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          {/* Business Hours */}
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-brand-dark mb-2">Business Hours</h4>
            <p className="text-brand-gray text-sm">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 2:00 PM<br />
              <span className="text-red-600">Sunday: Closed</span>
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-brand-gray text-sm mb-4">
              We typically respond within 24 hours during business days
            </p>
            <Button
              className="w-full bg-brand-orange text-white hover:bg-orange-600"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}