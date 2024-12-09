import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { use } from 'react'

// This would typically come from an API or database
const getProduct = (id: string) => {
  return {
    id: parseInt(id),
    image: `/products/${id}.png`,
    name: "Nike Air Force 1 PLT.AF.ORM",
    description: "Turn style on its head with this comfort take on the Air Jordan 1 Mid. An 'inside out'-inspired construction with a deconstructed look lets you rep the iconic design in a whole new way. Premium leather and crisp colour blocking put the finishing touch on this fresh take on the legendary silhouette.",
    price: 8695.00,
  }
}

interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function ProductPage({ params }: PageProps) {
  const { id } = use(params)
  const product = getProduct(id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Product Image */}
        <div className="aspect-square relative bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-medium">{product.name}</h1>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
            <p className="text-xl font-medium">
              MRP : ₹ {product.price.toLocaleString('en-IN')}
            </p>
          </div>

          <Button className="w-full md:w-auto px-8 bg-black text-white hover:bg-gray-800 rounded-3xl">
            <Link href='./cart'>Add to Bag</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

