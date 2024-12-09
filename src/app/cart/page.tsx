"use client";

import React, { useState, useEffect } from "react";
import CartItem from "@/components/CartItem";
import Summary from "@/components/Summary";

// Type definitions for cart items
interface CartItemType {
  id: number;
  name: string;
  description: string;
  size: string | number;
  quantity: number;
  price: number;
  image?: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    // Fetch cart data dynamically or use default data
    const fetchCartData = async () => {
      try {
        // Simulate API call
        const response = await fetch("/api/cart"); // Replace with your actual API endpoint
        if (!response.ok) throw new Error("Failed to fetch data");

        const data: { items: CartItemType[] } = await response.json();
        setCartItems(data.items);
        calculateSubtotal(data.items);
      } catch (error) {
        console.log("Failed to fetch cart data:", error);

        // Default cart data for demo
        const defaultItems: CartItemType[] = [

          {
            id: 2,
            name: "Denim Jeans",
            description: "Slim fit jeans",
            size: 32,
            quantity: 1,
            price: 50,
            image: "/13.png",
          },
          {
            id: 3,
            name: "Sneakers",
            description: "Running shoes",
            size: 10,
            quantity: 1,
            price: 75,
            image: "/12.png",
          },
        ];

        setCartItems(defaultItems);
        calculateSubtotal(defaultItems);
      }
    };

    fetchCartData();
  }, []);

  const calculateSubtotal = (items: CartItemType[]) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(total);
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    calculateSubtotal(updatedItems);
  };

  return (
    <div className="m-20 container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Bag</h2>

          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onRemove={() => removeItem(item.id)} />
          ))}
        </div>
        {/* Summary */}
        <div className="col-span-1">
          <Summary subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
