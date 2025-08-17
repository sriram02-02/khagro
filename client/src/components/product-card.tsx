import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onEnquire: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails, onEnquire }: ProductCardProps) {
  return (
    <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <div 
        className="relative overflow-hidden"
        onClick={() => onViewDetails(product)}
      >
        {/* Gradient Header with Icon */}
        <div 
          className="h-24 flex items-center justify-center text-4xl text-white font-bold"
          style={{ background: product.gradient }}
        >
          {product.categoryIcon}
        </div>
        
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-brand-dark mb-3">{product.name}</h3>
        <p className="text-brand-gray text-sm mb-4 line-clamp-3 leading-relaxed">{product.description}</p>
        
        <div className="flex gap-2 mb-4">
          <Button
            className="flex-1 bg-brand-blue text-white hover:bg-blue-700"
            onClick={(e) => {
              e.stopPropagation();
              onEnquire(product);
            }}
          >
            Enquire Now
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
          >
            View All
          </Button>
        </div>
        
        <div className="text-center">
          <span className="text-brand-orange font-semibold capitalize text-sm">{product.category}</span>
        </div>
      </CardContent>
    </Card>
  );
}
