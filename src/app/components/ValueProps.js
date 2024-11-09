export default function ValueProps() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Button at the top */}
        <div className="flex justify-center mb-20">
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
            Explore Collection
          </button>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Authentic Luxury */}
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold">
              Authentic<br />Luxury
            </h3>
            <p className="text-gray-400 text-lg">
              Every piece<br />
              authenticated<br />
              by<br />
              expert<br />
              specialists
            </p>
          </div>

          {/* Curated Collection */}
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold">
              Curated<br />Collection
            </h3>
            <p className="text-gray-400 text-lg">
              Handpicked<br />
              selection
            </p>
          </div>

          {/* Expert Craftsmanship */}
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold">
              Expert<br />Craftsmanship
            </h3>
            <p className="text-gray-400 text-lg">
              Unparalleled<br />
              craftsmanship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 