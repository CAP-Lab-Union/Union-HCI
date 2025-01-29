'use client';

import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[50vh] sm:h-[70vh]">
        {/* Background image */}
        <Image
          src="/union.jpeg"
          alt="Who we are"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-4xl sm:text-6xl text-white font-bold mb-4">
            Who We Are
          </h1>
          <TypeAnimation
            sequence={['Innovators', 1000, 'Researchers', 1000, 'Designers', 1000]}
            speed={200}
            wrapper="span"
            repeat={Infinity}
            style={{ color: '#3994B2' }}
            className="text-2xl sm:text-3xl font-semibold"
          />
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#A0C8D' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-800">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Our mission is to create intuitive, inclusive and accessible technology for all. We are shaping the future of user-friendly coputeing
          </p>
        </div>
      </section>
    </>
  );
}
