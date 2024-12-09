import React from "react";
import { TrashIcon, HeartIcon } from "lucide-react"; // ShadCN-UI icons
import Image from "next/image";

// Props type for the CartItem component
interface CartItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    size: string | number;
    quantity: number;
    price: number;
    image?: string;
  };
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center">
          {/* Placeholder for product image */}
          <Image
            src={item.image || "/placeholder.png"}
            alt={item.name}
            className="object-contain w-full h-full"
            width={320}
            height={320}
          />
        </div>
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
          <p className="text-sm">
            Size: {item.size} | Quantity: {item.quantity}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">₹ {item.price.toLocaleString()}</p>
        <div className="flex space-x-2 mt-2">
          <button
            onClick={onRemove}
            className="text-red-500 hover:text-red-700 transition"
            aria-label="Remove item"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 transition" aria-label="Add to wishlist">
            <HeartIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
