import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Import icons

const products = [
  {
    id: 1,
    image: "/airmax1.png", // Replace with the actual path to your image
    name: "Nike Air Max Pulse",
    price: "₹ 13 995",
    category: "Women's Shoes",
  },
  {
    id: 2,
    image: "/airmax2.png", // Replace with the actual path to your image
    name: "Nike Air Max Pulse",
    price: "₹ 13 995",
    category: "Men's Shoes",
  },
  {
    id: 3,
    image: "/airmax3.png", // Replace with the actual path to your image
    name: "Nike Air Max 97 SE",
    price: "₹ 18 995",
    category: "Men's Shoes",
  },
];

export default function AirMaxGrid() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Best of Air Max</h2>

        {/* Shop and Arrows */}
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-700">Shop</button>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
              <ArrowLeft className="text-gray-700" />
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
              <ArrowRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            {/* Product Image */}
            <div className="relative w-full h-48 md:h-60 bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="hover:scale-105 transition-transform"
              />
            </div>
            {/* Product Info */}
            <div className="text-center mt-3">
              <p className="text-sm font-medium text-gray-700">{product.name}</p>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-sm font-bold mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
