import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const categories = [
  "Shoes",
  "Sports Bras",
  "Tops & T-Shirts",
  "Hoodies & Sweatshirts",
  "Jackets",
  "Trousers & Tights",
  "Shorts",
  "Tracksuits",
  "Jumpsuits & Rompers",
  "Skirts & Dresses",
  "Socks",
  "Accessories & Equipment"
]

const genderOptions = ["Men", "Women", "Unisex"]
const kidsOptions = ["Boys", "Girls"]
const priceRanges = ["Under ₹2,500.00", "₹2,501.00 - ₹"]

export function StoreSidebar() {
  return (
    <aside className="w-64 border-r h-full overflow-y-auto p-4 text-sm text-black">
      {/* Categories */}
      <nav className="space-y-2 mb-6">
        {categories.map((category) => (
          <a
            key={category}
            href="#"
            className="block py-1 hover:text-gray-600"
          >
            {category}
          </a>
        ))}
      </nav>

      {/* Gender Filter */}
      <Accordion type="single" collapsible className="mb-6">
        <AccordionItem value="gender" className="border-none">
          <AccordionTrigger className="py-2 hover:no-underline font-medium">
            Gender
          </AccordionTrigger>
          <AccordionContent className="space-y-2 pt-2">
            {genderOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox id={option} />
                <label
                  htmlFor={option}
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Kids Filter */}
      <Accordion type="single" collapsible className="mb-6">
        <AccordionItem value="kids" className="border-none">
          <AccordionTrigger className="py-2 hover:no-underline font-medium">
            Kids
          </AccordionTrigger>
          <AccordionContent className="space-y-2 pt-2">
            {kidsOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox id={option} />
                <label
                  htmlFor={option}
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Price Filter */}
      <Accordion type="single" collapsible>
        <AccordionItem value="price" className="border-none">
          <AccordionTrigger className="py-2 hover:no-underline font-medium">
            Shop By Price
          </AccordionTrigger>
          <AccordionContent className="space-y-2 pt-2">
            {priceRanges.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <Checkbox id={range} />
                <label
                  htmlFor={range}
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {range}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  )
}

