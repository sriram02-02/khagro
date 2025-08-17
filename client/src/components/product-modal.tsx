import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import type { Product } from "@shared/schema";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-dark">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <p className="text-brand-gray">{product.description}</p>
          
          <div>
            <h4 className="text-lg font-semibold text-brand-dark mb-4">Key Features:</h4>
            <ul className="space-y-2">
              {product.specifications.map((spec, index) => (
                <li key={index} className="flex items-center text-brand-gray">
                  <Check className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex space-x-4">
            <Button className="bg-brand-blue text-white hover:bg-blue-700">
              Request Quote
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              More Info
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
