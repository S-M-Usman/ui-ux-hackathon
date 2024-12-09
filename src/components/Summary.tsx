import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
// Props type for the Summary component
interface SummaryProps {
  subtotal: number;
}

const Summary: React.FC<SummaryProps> = ({ subtotal }) => {
  const deliveryCharge = subtotal >= 14000 ? 0 : 150; // Free delivery condition
  const total = subtotal + deliveryCharge;

  return (
    <div className="p-6 bg-gray-50 ">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Delivery & Handling</span>
          <span>{deliveryCharge === 0 ? "Free" : `₹ ${deliveryCharge}`}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹ {total.toLocaleString()}</span>
        </div>
      </div>
      <Button className="rounded-3xl"><Link href='/cart/chekout'>Member Checkout</Link></Button>
    </div>
  );
};

export default Summary;
