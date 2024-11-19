'use client'
import Image from 'next/image';
import ChatBot from './ChatBot';

export default function BentoGrid() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {/* Large Feature Tile */}
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden bg-[#FFD700]/20">
            <div className="relative h-full">
              <Image 
                src="/watch-image/pexels-pratik-prasad-3736245-14778525 copy.jpg" 
                alt="Luxury Watch" 
                fill
                className="object-cover h-full"
              />
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="text-4xl font-bold text-white mb-2">Luxury Exploration</h2>
                <p className="text-white/80">True Potential of Excellence</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Logo Tile */}
            <LogoTile />

            {/* Two Small Tiles in Row */}
            <div className="grid grid-cols-1 gap-4">
              {/* Icons Tile */}
              <div className="rounded-3xl overflow-hidden bg-white p-4">
                <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
                  <div className="flex items-center justify-center">
                    <span className="text-2xl">⌚</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl">👜</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl">💎</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl">🎁</span>
                  </div>
                </div>
              </div>

              {/* Time Tile */}
              <div className="rounded-3xl overflow-hidden bg-white p-4">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between">
                    <span className="font-bold">Sat</span>
                    <span>09</span>
                  </div>
                  <div className="text-3xl font-bold mt-2">00:28</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="col-span-2">
            {/* Value/Graph Tile */}
            <div className="rounded-3xl overflow-hidden bg-white p-4">
              <div className="flex flex-col h-fit">
                <div className="flex justify-between items-center">
                  <span className="font-bold"></span>
                  <div className="rounded-full w-6 h-6 flex items-center justify-center text-white"></div>
                </div>
                <div className="text-sm md:text-md pl-2 md:pl-2 font-bold mt-2">
                  <h2 className="text-sm md:text-md lg:text-4xl text-gray-800 italic mb-4 md:mb-7">
                    Where precision meets passion & excellence becomes timeless
                  </h2>
                  <p className="lg:pl-2 md:pl-1 text-sm md:text-base text-gray-500"></p>
                </div>
              </div>
            </div>
          </div>

          {/* OS Tile */}
          <div className="rounded-3xl overflow-hidden bg-white">
            <div className="h-[150px] relative">
              <Image 
                src="/watch-image/Colorful Luxe Collectio.jpeg" 
                alt="Luxury Watch" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Bottom Large Tile */}
          <div className="col-span-3 rounded-3xl overflow-hidden bg-white p-6">
            <div className="flex justify-between items-center h-full">
              <div>
                <h3 className="text-xl font-bold mb-2">AI Generates Your Collection</h3>
                <div className="w-24 h-6 bg-black/10 rounded-full"></div>
              </div>
              <div className="w-24 h-24 bg-gray-200 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center">
                <ChatBot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LogoTile() {
  return (
    <div className="rounded-3xl overflow-hidden bg-black border border-gray-500 flex items-center justify-center">
      <Image
        src="/logo/image_123650291.JPG"
        alt="FineChrono Logo"
        width={100}
        height={40}
        className="object-contain"
        priority
      />
    </div>
  );
} 