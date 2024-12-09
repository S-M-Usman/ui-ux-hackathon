import React from 'react';
import Image from 'next/image';
import AirMaxGrid from '@/components/Carousel';

const FullComponent: React.FC = () => {
  return (
    <div className="mt-20 mb-10 px-6"> {/* Added top and bottom margin and equal padding */}
      {/* Top Bar */}
      <div className="w-full bg-gray-50">
        <div className="text-center py-4">
          <h1 className="text-lg font-semibold">Hello Nike App</h1>
          <p className="text-sm text-gray-900">
            Download the app to access everything Nike.{' '}
            <a href="#" className="text-gray-900 font-medium underline">
              Get Your Great
            </a>
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center">
        {/* Image Section */}
        <div className="relative w-full max-w-6xl h-96">
          <Image
            src="/banner-img.png" // Replace with the correct image path
            alt="Nike Air Max Pulse"
            layout="fill"
            objectFit="cover"
            className="px-10"
          />
        </div>


        {/* Text Content */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            First Look
          </p>
          <h2 className="text-3xl font-bold mt-2">NIKE AIR MAX PULSE</h2>
          <p className="text-base text-gray-600 mt-4 max-w-xl mx-auto"> {/* Limit width for 2-line paragraph */}
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse — designed to push you past your limits and help you go to
            the max.
          </p>
          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-900">
              Notify Me
            </button>
            <button className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-900">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
      <AirMaxGrid />
      <div className="bg-white py-12 md:py-16">
       <h2 className="m-8 px-2 text-xl font-semibold items-start">Featured</h2>
       <div className="flex flex-col items-center">
      

        {/* Image Section */}
        <div className="relative w-full max-w-8xl h-96">
          <Image
            src="/featured.png" // Replace with the correct image path
            alt="Nike Air Max Pulse"
            layout="fill"
            objectFit="cover"
            className="px-10"
          />
        </div>


        {/* Text Content */}
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold mt-2">STEP INTO WHAT FEELS GOOD</h2>
          <p className="text-base text-gray-600 mt-4 max-w-xl mx-auto"> {/* Limit width for 2-line paragraph */}
          Cause everyone should know the feeling of running in that perfect pair.
          </p>
          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
           
            <button className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-900">
            Find Your Shoe
            </button>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-white py-12 md:py-16">
       <h2 className="m-8 px-2 text-xl font-semibold items-start">Don&apos;t Miss</h2>
       <div className="flex flex-col items-center">
        {/* Image Section */}
        <div className="relative w-full max-w-8xl h-96">
          <Image
            src="/featuredprint.png" // Replace with the correct image path
            alt="Nike Air Max Pulse"
            layout="fill"
            objectFit="cover"
            className="px-10"
          />
        </div>


        {/* Text Content */}
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold mt-2">FLIGHT ESSENTIALS</h2>
          <p className="text-base text-gray-600 mt-4 max-w-xl mx-auto"> {/* Limit width for 2-line paragraph */}
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
           
            <button className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-900">
            Shop
            </button>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-wite py-12 md:py-16">
      <h2 className="m-8 px-2 text-xl font-semibold items-start">THE ESSENTIALS</h2>
      <div className="grid grid-cols-3 gap-4">
      <div>
        <Image
          src="/te1.png"
          alt="Scooter"
          width={400}
          height={400}
          className="w-full h-auto"
        />
        <p className="text-center font-medium">Scooter</p>
      </div>
      <div>
        <Image
          src="/te2.png"
          alt="Stuffed Animal"
          width={400}
          height={400}
          className="w-full h-auto"
        />
        <p className="text-center font-medium">Stuffed Animal</p>
      </div>
      <div>
        <Image
          src="/te3.png"
          alt="Walkie Talkie"
          width={400}
          height={400}
          className="w-full h-auto"
        />
        <p className="text-center font-medium">Walkie Talkie</p>
      </div>
    </div>
     <div className="w-[880px] mx-24 text-[15px_24px] p-10 grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
      <div className="space-y-1">
        <h3 className="font-medium">Scores</h3>
        <ul className="space-y-1">
          <li>Air Castle 1</li>
          <li>Air Castle 2</li>
          <li>Air Castle 3</li>
          <li>Air Castle 4</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium">Shoes</h3>
        <ul className="space-y-1">
          <li>Air Castle Shoes</li>
          <li>Air Castle Premium Shoes</li>
          <li>Air Castle Casual Shoes</li>
          <li>Air Castle Athletic Shoes</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium">Clothing</h3>
        <ul className="space-y-1">
          <li>Air Castle T-Shirts</li>
          <li>Air Castle Hoodies</li>
          <li>Air Castle Pants</li>
          <li>Air Castle Jackets</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium">Misc</h3>
        <ul className="space-y-1">
          <li>Air Castle Backpacks</li>
          <li>Air Castle Water Bottles</li>
          <li>Air Castle Sunglasses</li>
          <li>Air Castle Keychains</li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
};

export default FullComponent;
