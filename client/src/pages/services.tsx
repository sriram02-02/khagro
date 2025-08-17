import { Ship, Plane, Truck, FileText, Search, Handshake, Clock, Shield, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Ship,
      title: "Export Services",
      description: "Comprehensive export solutions including documentation, logistics coordination, and compliance management for global markets.",
      features: ["Export documentation", "Customs clearance", "Shipping coordination", "Compliance management", "Market research"]
    },
    {
      icon: Plane,
      title: "Import Services", 
      description: "Streamlined import processes with customs clearance, quality inspection, and timely delivery to your location.",
      features: ["Import licensing", "Customs brokerage", "Quality inspection", "Warehousing", "Last-mile delivery"]
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description: "End-to-end logistics solutions including warehousing, transportation, and supply chain optimization.",
      features: ["Supply chain design", "Inventory management", "Transportation", "Warehousing", "Distribution"]
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete documentation services including certificates, permits, and compliance paperwork for international trade.",
      features: ["Trade certificates", "Export permits", "Bill of lading", "Insurance documents", "Compliance reports"]
    },
    {
      icon: Search,
      title: "Quality Inspection",
      description: "Rigorous quality control and inspection services to ensure products meet international standards and specifications.",
      features: ["Pre-shipment inspection", "Quality audits", "Compliance testing", "Certification support", "Defect analysis"]
    },
    {
      icon: Handshake,
      title: "Trade Consulting",
      description: "Expert consultation on market entry strategies, trade regulations, and business development opportunities.",
      features: ["Market analysis", "Regulatory guidance", "Risk assessment", "Strategy development", "Partner identification"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround times for all documentation and shipping processes"
    },
    {
      icon: Shield,
      title: "Secure Operations",
      description: "Comprehensive insurance coverage and secure handling procedures"
    },
    {
      icon: Award,
      title: "Quality Assurance", 
      description: "Rigorous quality control at every step of the process"
    },
    {
      icon: Zap,
      title: "24/7 Support",
      description: "Round-the-clock customer support and shipment tracking"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-brand-dark mb-6">Our Services</h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Comprehensive import and export solutions tailored to meet your business needs and drive global growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <Icon className="h-16 w-16 text-brand-blue mb-6" />
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">{service.title}</h3>
                  <p className="text-brand-gray mb-6">{service.description}</p>
                  
                  <h4 className="font-semibold text-brand-dark mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-brand-gray text-sm flex items-center">
                        <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              We deliver exceptional value through our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Icon className="h-16 w-16 text-brand-orange mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">{benefit.title}</h3>
                  <p className="text-brand-gray text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Our Process</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              A streamlined approach to international trade that ensures efficiency and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-brand-dark mb-3">Consultation</h3>
              <p className="text-brand-gray text-sm">We analyze your needs and develop a customized solution</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-brand-dark mb-3">Documentation</h3>
              <p className="text-brand-gray text-sm">Complete all necessary paperwork and compliance requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-brand-dark mb-3">Execution</h3>
              <p className="text-brand-gray text-sm">Coordinate shipping, customs, and quality control processes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-brand-dark mb-3">Delivery</h3>
              <p className="text-brand-gray text-sm">Ensure timely delivery and provide ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss your specific requirements and learn how we can help your business succeed in global markets.
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <Button className="bg-brand-orange text-white hover:bg-orange-600 px-8 py-3 text-lg">
                Get a Quote
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark px-8 py-3 text-lg">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
