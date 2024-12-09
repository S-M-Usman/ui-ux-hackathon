import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: number;
  image: string;
  label?: string;
  name: string;
  category: string;
  colors: number;
  price: number;
}

export default function ProductCard({
  id,
  image,
  label,
  name,
  category,
  colors,
  price,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="block group">
      <div className="space-y-2">
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="group-hover:opacity-90 transition-opacity"
          />
        </div>
        <div className="space-y-1">
          {label && (
            <span className="text-red-600 text-sm font-medium">
              {label}
            </span>
          )}
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600">{category}</p>
          <p className="text-gray-600">{colors} Colour{colors > 1 ? 's' : ''}</p>
          <p className="font-medium">MRP : ₹ {price.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </Link>
  )
}

