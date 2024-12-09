import Image from 'next/image'
import { StoreSidebar } from '@/components/store-sidebar'
import ProductCard from '@/components/product-card'
import { products, Product } from '@/lib/product'

export default function ProductsPage() {
  return (
    <div className="m-10 flex flex-col h-screen text-sm text-black">
      {/* Top Bar */}
      <div className="m-10 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-base text-black font-medium">New (500)</h1>
            <div className="flex items-center gap-4">
              <button className="flex items-center hover:text-gray-600">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Hide Filters"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Hide Filters
              </button>
              <button className="flex items-center hover:text-gray-600">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Sort By"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Sort By
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        <StoreSidebar />
        <div className="flex-1 overflow-y-auto p-4">
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product: Product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                label={product.label}
                name={product.name}
                category={product.category}
                colors={product.colors}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

