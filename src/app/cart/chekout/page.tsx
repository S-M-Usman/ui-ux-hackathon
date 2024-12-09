import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <div className="m-10 flex-grow container mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-col md:flex-row gap-8 overflow-y-auto">
        <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 space-y-6 overflow-y-auto">
          <div>
            <h2 className="font-bold mb-4 text-2xl">How would you like to get your order?</h2>
            <p className="mb-4 text-gray-700">
              Customs regulation for India require a copy of the recipient&apos;s
              KYC. The address on the KYC needs to match the shipping address. Our
              courier will contact you via SMS/email to obtain a copy of your KYC.
              The KYC will be stored securely and used solely for the purpose of
              clearing customs (including sharing it with customs officials) for all
              orders and returns. If your KYC does not match your shipping address,
              please click the link for more information. Learn More
            </p>
            <Button variant="outline" className="w-full">
              <Image src="/Group.png" alt="icon" width={21.85} height={19.02} className="mr-2" />
              Deliver It
            </Button>
          </div>

          <div className="space-y-6">
            <h2 className="font-bold text-xl">Enter your name and address:</h2>
            <div className="bg-white p-6">
              <form className="space-y-4">
                {/* First Name */}
                <Input placeholder="First Name" className="shadcn-input" />

                {/* Last Name */}
                <Input placeholder="Last Name" className="shadcn-input" />

                {/* Address Lines */}
                <Input placeholder="Address Line 1" className="shadcn-input" />
                <Input placeholder="Address Line 2" className="shadcn-input" />
                <Input placeholder="Address Line 3" className="shadcn-input" />

                {/* Postal Code and Locality */}
                <div className="flex space-x-4">
                  <Input placeholder="Postal Code" className="shadcn-input" />
                  <Input placeholder="Locality" className="shadcn-input" />
                </div>

                {/* Territory Select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Territory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="territory1">Territory 1</SelectItem>
                    <SelectItem value="territory2">Territory 2</SelectItem>
                    <SelectItem value="territory3">Territory 3</SelectItem>
                  </SelectContent>
                </Select>

                {/* Country Select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                  </SelectContent>
                </Select>

                {/* Checkboxes */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checkbox1" />
                    <label htmlFor="checkbox1" className="text-sm text-gray-900">
                      Save this address to my profile
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checkbox2" />
                    <label htmlFor="checkbox2" className="text-sm text-gray-900">
                      Make this my preferred address
                    </label>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Information Section */}
            <div className="bg-gray-50 p-6 space-y-6">
              <h2 className="text-lg font-semibold text-gray-800">What&apos;s your contact information?</h2>
              <form className="space-y-4">
                {/* Email Input */}
                <div>
                  <Input placeholder="Email" className="shadcn-input" />
                  <p className="text-sm text-gray-500 mt-2">A confirmation email will be sent after checkout.</p>
                </div>

                {/* Phone Number Input */}
                <div>
                  <Input placeholder="Phone Number" className="shadcn-input" />
                  <p className="text-sm text-gray-500 mt-2">A carrier might contact you to confirm delivery.</p>
                </div>
              </form>

              {/* PAN Section */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">PAN</h2>
                <form className="space-y-4">
                  {/* PAN Input */}
                  <div>
                    <Input placeholder="Enter your PAN" className="shadcn-input" />
                    <p className="text-sm text-gray-500 mt-2">
                    Enter your PAN to enable payment with UPI, Net Banking or local card methods
                    </p>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="agreement1" />
                      <label htmlFor="agreement1" className="text-sm text-gray-400">
                      Save PAN details to Nike Profile
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 gap-2">
                      <Checkbox id="agreement2" />
                      <label htmlFor="agreement2" className="text-sm text-gray-400">
                      I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.
                      </label>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <Button
                    className="w-full bg-gray-300 text-gray-700 cursor-not-allowed"
                    disabled
                  >
                    Continue
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <h2 className="font-medium mb-4 text-xl">Order Summary</h2>
          <div
            id="summary"
            className="w-full border-b border-gray-200 pb-4 flex flex-col"
          >
            <div className=" flex justify-between gap-4 text-[12px_16px] text-gray-400">
              <div className="right">
                <p>Subtotal</p>
                <p>Delivery/Shipping</p>
              </div>
              <div className="left">
                <p>₹ 20 890.00</p>
                <p>Free</p>
              </div>
            </div>
            <div className="flex border-t-black gap-14">
                <p>Total</p>
                <p>₹ 20 890.00</p>
              </div>
            <div>

            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <p>(The total reflects the price of your order, including all duties and taxes)</p>
            <h3 className="font-bold">Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
            <Image src="/13.png" alt="1" width={320} height={208}></Image>
            <Image src="/12.png" alt="1" width={320} height={208}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;