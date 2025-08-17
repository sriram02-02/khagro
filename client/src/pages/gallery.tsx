export default function Gallery() {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Warehouse Facilities",
      description: "State-of-the-art storage solutions"
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Shipping Operations",
      description: "Global logistics network"
    },
    {
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Quality Control",
      description: "Rigorous inspection processes"
    },
    {
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Loading Operations",
      description: "Efficient cargo handling"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Documentation",
      description: "Complete trade paperwork"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Global Logistics",
      description: "Worldwide coordination"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-brand-dark mb-6">Our Operations</h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            A glimpse into our world-class facilities and operations that enable seamless global trade
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Our Capabilities</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Advanced infrastructure and technology that powers our global operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-brand-blue mb-2">50,000m²</div>
              <div className="text-brand-gray">Warehouse Space</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-brand-blue mb-2">24/7</div>
              <div className="text-brand-gray">Operations</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-brand-blue mb-2">15</div>
              <div className="text-brand-gray">Global Offices</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-brand-blue mb-2">99.9%</div>
              <div className="text-brand-gray">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">Advanced Technology</h2>
              <p className="text-lg text-brand-gray mb-6">
                Our operations are powered by cutting-edge technology that ensures efficiency, transparency, and reliability at every step of the trade process.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-brand-gray">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                  Real-time shipment tracking and monitoring
                </li>
                <li className="flex items-center text-brand-gray">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                  Automated inventory management systems
                </li>
                <li className="flex items-center text-brand-gray">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                  Digital documentation and compliance tools
                </li>
                <li className="flex items-center text-brand-gray">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                  AI-powered quality control systems
                </li>
                <li className="flex items-center text-brand-gray">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                  Integrated customer portal and communication
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=750"
                alt="Technology operations"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
