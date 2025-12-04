import ceramicPot from "@/assets/ceramic-pot.jpg";
import terracottaPot from "@/assets/terracotta-pot.jpg";
import growBag from "@/assets/grow-bag.jpg";
import hangingPot from "@/assets/hanging-pot.jpg";
import selfWateringPot from "@/assets/self-watering-pot.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ceramic Pot",
    price: 250,
    quantity: 40,
    description: "Elegant handcrafted ceramic pot with smooth finish, perfect for indoor plants and succulents.",
    image: ceramicPot,
  },
  {
    id: 2,
    name: "Terracotta Pot",
    price: 180,
    quantity: 60,
    description: "Traditional clay pot with natural breathability, ideal for herbs and flowering plants.",
    image: terracottaPot,
  },
  {
    id: 3,
    name: "Plastic Grow Bag",
    price: 90,
    quantity: 120,
    description: "Durable and lightweight grow bag for vegetables and seasonal plants. Great for beginners.",
    image: growBag,
  },
  {
    id: 4,
    name: "Hanging Pot",
    price: 150,
    quantity: 35,
    description: "Beautiful macrame hanging pot for trailing plants and vines. Adds charm to any space.",
    image: hangingPot,
  },
  {
    id: 5,
    name: "Self-Watering Pot",
    price: 300,
    quantity: 25,
    description: "Smart pot with built-in water reservoir. Perfect for busy plant parents.",
    image: selfWateringPot,
  },
];
