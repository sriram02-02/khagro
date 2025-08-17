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
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-brand-dark mb-6">About GlobalTrade Solutions</h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Your trusted partner in international trade for over 15 years, connecting businesses across continents with reliable, efficient import and export services.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">Our Story</h2>
              <p className="text-lg text-brand-gray mb-6">
                Founded in 2009, GlobalTrade Solutions began as a small import business with a vision to simplify international trade for businesses of all sizes. Over the years, we have grown into a comprehensive trade solutions provider, helping thousands of companies expand their global reach.
              </p>
              <p className="text-lg text-brand-gray mb-6">
                Our journey started with a simple belief: that international trade should be accessible, transparent, and efficient for everyone. Today, we are proud to be a leading force in connecting businesses worldwide, facilitating billions in trade value annually.
              </p>
              <p className="text-lg text-brand-gray">
                With our headquarters strategically located in the Global Business District and offices in key trading hubs worldwide, we are positioned to serve our clients' needs around the clock.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=750"
                alt="Our team"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-brand-light p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Mission</h3>
              <p className="text-brand-gray">
                To empower businesses worldwide by providing reliable, efficient, and innovative import-export solutions that drive growth and create lasting global partnerships. We are committed to simplifying international trade and making it accessible to companies of all sizes.
              </p>
            </div>
            <div className="bg-white border-2 border-brand-blue p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Vision</h3>
              <p className="text-brand-gray">
                To be the world's most trusted and innovative international trade partner, recognized for our excellence in service, commitment to quality, and ability to connect businesses across continents while contributing to global economic growth.
              </p>
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
