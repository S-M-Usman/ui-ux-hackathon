import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="max-w-2xl mx-auto m-12">
        <h1 className="text-2xl font-bold mb-6 text-center">GET HELP</h1>
        <div className="relative ">
          <Input
            type="text"
            placeholder="What can we help you with?"
            className="pr-8"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-black" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold mb-6">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
          <div className="space-y-6">
            <p>We want to make buying your favorite Nike items as easy as we can and we accept the following payment options:</p>
            <p>Visa, Mastercard, Debit Card, Discover, American Express, Visa Electron, Maestro</p>
            <p>If you order your FREE standard or express, you&apos;ll be able to pay for your order with PayPal or a debit credit or debit card.</p>
            <p className="font-semibold">Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join below!</p>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <Button className="bg-black text-white hover:bg-black/90 rounded-full">
                JOIN US
              </Button>
              <Button variant="outline" className= "bg-black text-white hover:bg-black/90 rounded-full">
                SHOP NOW
              </Button>
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-12 text-left">
            <h2 className="text-xl font-bold mb-6">FAQs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Does my card need international purchases enabled?</h3>
                <p className="text-sm text-black">Yes, we recommend talking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I pay for my order with multiple methods?</h3>
                <p className="text-sm text-black">No, you can only use one payment method per order across all Nike payment methods.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What payment method is accepted for SNKRS orders?</h3>
                <p className="text-sm text-black">You can use any accepted credit card to pay for your SNKRS order.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Why don&apos;t I see Apple Pay as an option?</h3>
                <p className="text-sm text-black">To use Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be logged in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
              </div>
              <div>
              <p className="text-sm text-black">Was this answer helpful?</p>
              <div className="flex">
                <Image src='/help/thumbs-up.png' alt='reaction 1' width={30} height={30}></Image>
                <Image src='/help/thumbs-down.png' alt="reaction 2" width={30} height={30}></Image>
              </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-72 md:border-l md:border-gray-300 md:pl-8 text-center md:text-left">
          <h2 className="text-xl font-bold mb-8">CONTACT US</h2>
          <div className="space-y-10">
            <div className="space-y-2">
              <Image src="/help/phone.png" alt="Phone Icon" width={24} height={35} className="mx-auto item  md:mx-0 mb-2" />
              <p className="font-bold">000 800 100 9538</p>
              <p className="text-sm">Products & Orders: 24 hours a day,</p>
              <p className="text-sm">7 days a week</p>
              <p className="text-sm mt-2">Company Info & Enquiries: 07:30 -</p>
              <p className="text-sm">19:30, Monday - Friday</p>
            </div>

            <div className="space-y-2">
              <Image src="/help/message.png" alt="Chat Icon" width={24} height={24} className="mx-auto md:mx-0 mb-2" />
              <p className="text-sm">24 hours a day</p>
              <p className="text-sm">7 days a week</p>
            </div>

            <div className="space-y-2">
              <Image src="/help/email.png" alt="Email Icon" width={24} height={24} className="mx-auto md:mx-0 mb-2" />
              <p className="text-sm">We&apos;ll reply within</p>
              <p className="text-sm">24 hours</p>
            </div>

            <div className="space-y-2">
              <Image src="/help/location.png" alt="Location Icon" width={24} height={24} className="mx-auto md:mx-0 mb-2" />
              <p className="font-semibold">STORE LOCATOR</p>
              <p className="text-sm">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional FAQs */}
      <div className="mt-12 space-y-4 text-center md:text-left">
        <h2>Related:</h2>
        <h3 className="font-normal underline">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</h3>
        <h3 className="font-normal underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h3>
      </div>
    </div>
  )
}

