"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
// import { useCart } from "@/context/cart-context";
// import { toast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  //   const { addToCart } = useCart();

  const handleAddToCart = () => {
    // addToCart(product);
    // toast({
    //   title: "Added to cart",
    //   description: `${product.name} has been added to your cart.`,
    //   variant: "default",
    // });
  };

  const productUrl = `/${product.type === "ebook" ? "ebooks" : "groceries"}/${
    product.id
  }`;

  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl h-full bg-card">
      <Link href={productUrl} passHref>
        <CardHeader className="p-0">
          <div className="aspect-[4/3] relative w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              data-ai-hint={product.dataAiHint}
            />
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-4 flex-grow">
        <Link href={productUrl} passHref>
          <CardTitle className="text-lg font-semibold leading-tight hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
        </Link>
        <CardDescription className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <p className="text-xl font-bold text-primary">
          ₦{product.price.toFixed(2)}
        </p>
        <Button
          onClick={handleAddToCart}
          size="sm"
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add
        </Button>
      </CardFooter>
    </Card>
  );
}
