import Link from "next/link"
import Image from "next/image"
import { Search, Heart, ShoppingBag } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Top utility bar */}
      <div className="flex h-9 items-center justify-between bg-gray-100 px-4 text-xs">
        <Link href="/">
          <Image
            src="/jordan.svg"
            alt="Jordan"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/help" className="hover:text-gray-600">
            Find a Store
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/help" className="hover:text-gray-600">
            Help
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/join-us" className="hover:text-gray-600">
            Join Us
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/signin" className="hover:text-gray-600">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex h-16 items-center justify-between px-8 bg-white relative ">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/nike.svg"
            alt="Nike"
            width={60}
            height={64}
            className="h-6"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/products"
                className="text-sm font-medium hover:text-gray-600"
              >
                New & Featured
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-sm font-medium hover:text-gray-600"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-sm font-medium hover:text-gray-600"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-sm font-medium hover:text-gray-600"
              >
                Kids
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-sm font-medium hover:text-gray-600"
              >
                Sale
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-sm font-medium hover:text-gray-600"
              >
                SNKRS
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <Input
              type="search"
              placeholder="Search"
              className="w-48 rounded-full bg-gray-100 pl-10 text-sm"
            />
          </div>
          <button
            className="hidden h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 lg:flex"
            aria-label="Favorites"
          >
            <Heart className="h-6 w-6" />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
            aria-label="Shopping Bag"
          >
            <Link href="/cart"><ShoppingBag className="h-6 w-6" /></Link>
          </button>
        </div>
      </div>
    </header>
  )
}

