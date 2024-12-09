export interface Product {
    id: number;
    name: string;
    category: string;
    colors: number;
    price: number;
    image: string;
    label: string | undefined;
  }
  
  export const products: Product[] = Array.from({ length: 92 }, (_, i) => {
    const id = i + 1;
    return {
      id,
      name: `Nike Product ${id}`,
      category: id % 2 === 0 ? "Men's Shoes" : "Men's Apparel",
      colors: Math.floor(Math.random() * 1) + 1,
      label: i % 3 === 0 ? "Just In" : undefined,
      price: Math.floor(Math.random() * 10000) + 5000,
      image: `/products/${id}.png`,
    };
  });
  
  