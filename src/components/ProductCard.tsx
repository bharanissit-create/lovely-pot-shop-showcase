import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Package } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
            <Package className="w-3 h-3" />
            {product.quantity} in stock
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <p className="font-display text-2xl font-bold text-primary">
            ₹{product.price}
          </p>
          <Button variant="default" size="sm" className="gap-2">
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
