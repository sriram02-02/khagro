import { Award, Globe, Users, Target } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from product quality to customer service."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our extensive network spans across 50+ countries, enabling worldwide trade connections."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build long-term relationships with our clients, becoming a trusted extension of their business."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously evolve our services to meet the changing demands of global trade."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Sri Nandi</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            A trusted and emerging brand committed to delivering high-quality, authentic products rooted in traditional values and purity.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">Our Story</h2>
              <p className="text-lg text-brand-gray mb-6">
                Sri Nandi is a trusted and emerging brand committed to delivering high-quality, authentic products rooted in traditional values and purity. Founded with a passion for excellence and a vision to bring premium, natural products to every household.
              </p>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Philosophy</h3>
              <p className="text-lg text-brand-gray mb-6">
                Sri Nandi is more than just a brand—it's a commitment to health, heritage, and honesty. Every product is crafted with devotion and undergoes strict quality checks to ensure our customers receive only the best.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=750"
                alt="Sri Nandi agricultural products"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Our Products Section */}
          <div className="bg-brand-light p-12 rounded-2xl mb-20">
            <h3 className="text-3xl font-bold text-brand-dark mb-8 text-center">Our Products</h3>
            <p className="text-lg text-brand-gray mb-8 text-center max-w-4xl mx-auto">
              At Sri Nandi, we offer a wide range of carefully curated products that reflect our commitment to purity and tradition:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-bold text-brand-dark mb-3">🌾 Premium Rice Varieties</h4>
                <ul className="space-y-2 text-brand-gray">
                  <li><strong>Sri Nandi Sona Masoori Rice</strong> – Lightweight, aromatic, and perfect for everyday meals. Sourced from premium fields and hygienically processed.</li>
                  <li><strong>Sri Nandi Basmati Rice</strong> – Aged, long-grain, and fragrant rice ideal for biryanis, pulao, and special occasions.</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-bold text-brand-dark mb-3">🫘 Premium Dals</h4>
                <p className="text-brand-gray">
                  <strong>Sri Nandi Dals</strong> – High-quality, unpolished dals including Toor Dal, Moong Dal, Urad Dal, and Chana Dal. Naturally processed and packed for freshness.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2">
                <h4 className="text-xl font-bold text-brand-dark mb-3">🌶️ Authentic Spices</h4>
                <p className="text-brand-gray">
                  <strong>Sri Nandi Spices</strong> – A range of pure and flavorful spices such as Turmeric, Red Chilli Powder, Coriander Powder, Cumin, Mustard Seeds, and Garam Masala—sourced from trusted farms and ground to perfection.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Our Values</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              The principles that guide our operations and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <Icon className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">{value.title}</h3>
                  <p className="text-brand-gray">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Our Leadership Team</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Michael Chen</h3>
              <p className="text-brand-blue font-medium mb-4">Chief Executive Officer</p>
              <p className="text-brand-gray text-sm">
                15+ years in international trade with expertise in Asian markets and supply chain optimization.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
                alt="COO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Sarah Rodriguez</h3>
              <p className="text-brand-blue font-medium mb-4">Chief Operations Officer</p>
              <p className="text-brand-gray text-sm">
                Former logistics director with 12+ years managing global operations and quality assurance programs.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
                alt="Head of Sales"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-brand-dark mb-2">David Thompson</h3>
              <p className="text-brand-blue font-medium mb-4">Head of Business Development</p>
              <p className="text-brand-gray text-sm">
                Strategic partnerships expert with extensive network across European and American markets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
