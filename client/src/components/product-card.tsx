import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-brand-dark mb-2">{product.name}</h3>
        <p className="text-brand-gray text-sm mb-4 line-clamp-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-brand-blue font-semibold capitalize">{product.category}</span>
          <Button
            className="bg-brand-orange text-white hover:bg-orange-600"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
