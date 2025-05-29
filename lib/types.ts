export type ProductType = "ebook" | "grocery";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string; // Optional category
  type: ProductType;
  dataAiHint?: string; // For placeholder images
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  orderDate: string; // Store as ISO string or timestamp
  shippingAddress: string; // Simplified for now
}
