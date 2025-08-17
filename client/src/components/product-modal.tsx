import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Mail, Phone, X } from "lucide-react";
import type { Product } from "@shared/schema";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (product: Product, itemName?: string) => void;
}

export default function ProductModal({ product, isOpen, onClose, onEnquire }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-500 transition-all duration-300 hover:rotate-90"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div 
          className="text-center text-white p-10"
          style={{ background: product.gradient }}
        >
          <div className="text-5xl mb-4">{product.categoryIcon}</div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-lg opacity-95">{product.description}</p>
        </div>

        {/* Product Items Grid */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.detailedItems.map((item, index) => {
              const [itemName, itemDescription] = item.split(' - ');
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Item Image/Icon */}
                  <div 
                    className="h-32 flex items-center justify-center text-4xl text-white"
                    style={{ 
                      background: `linear-gradient(135deg, ${product.gradient.match(/rgba?\([^)]+\)/g)?.[0] || '#667eea'}, ${product.gradient.match(/rgba?\([^)]+\)/g)?.[1] || '#764ba2'})` 
                    }}
                  >
                    {product.categoryIcon}
                  </div>
                  
                  {/* Item Content */}
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-brand-dark mb-2 text-lg">{itemName}</h3>
                    {itemDescription && (
                      <p className="text-brand-gray text-sm mb-4 line-height-relaxed">{itemDescription}</p>
                    )}
                    <Button
                      className="w-full text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
                      style={{ background: product.gradient }}
                      onClick={() => onEnquire(product, itemName)}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Features Section */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-brand-dark mb-4 text-center">Key Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex items-center text-brand-gray">
                  <Check className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <Button 
              className="px-8 py-3 text-lg font-semibold text-white"
              style={{ background: product.gradient }}
              onClick={() => onEnquire(product)}
            >
              Request Bulk Quote
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-3 text-lg font-semibold border-2"
              style={{ borderColor: product.gradient.match(/#[0-9a-f]{6}/i)?.[0] || '#667eea' }}
            >
              Download Catalog
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
