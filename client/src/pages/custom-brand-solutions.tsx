import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Package, Palette, Truck, Award, Globe, Users } from "lucide-react";

export default function CustomBrandSolutions() {
  const solutions = [
    {
      icon: Package,
      title: "Private Label Products",
      description: "Create your own brand with our premium agricultural products. We handle sourcing, packaging, and quality control while you build your brand presence.",
      features: ["Custom packaging design", "Brand label printing", "Quality certification", "Minimum order flexibility"]
    },
    {
      icon: Palette,
      title: "Custom Packaging",
      description: "Professional packaging solutions tailored to your brand requirements. From design to production, we ensure your products stand out in the market.",
      features: ["Graphic design services", "Multiple packaging materials", "Brand color matching", "Sustainable options"]
    },
    {
      icon: Truck,
      title: "White Label Distribution",
      description: "Complete distribution solutions under your brand name. We handle logistics while maintaining your brand identity throughout the supply chain.",
      features: ["Brand-consistent delivery", "Custom invoicing", "Dedicated support", "Real-time tracking"]
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Comprehensive quality control programs to ensure your brand maintains the highest standards in the market.",
      features: ["Third-party certifications", "Regular quality audits", "Compliance documentation", "Traceability systems"]
    },
    {
      icon: Globe,
      title: "Market Expansion",
      description: "Strategic support for expanding your brand into new markets with our international trade expertise.",
      features: ["Market research", "Regulatory guidance", "Cultural adaptation", "Local partnership networks"]
    },
    {
      icon: Users,
      title: "Brand Consultation",
      description: "Expert consultation services to help develop and optimize your brand strategy in the agricultural export market.",
      features: ["Brand positioning", "Market analysis", "Competitive intelligence", "Growth strategies"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Custom Brand Solutions</h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Build your own agricultural export brand with our comprehensive custom solutions. 
            From private labeling to market expansion, we help you succeed.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-brand-orange text-white hover:bg-orange-600 text-lg px-8 py-4">
              Start Your Brand Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              Comprehensive Brand Building Services
            </h2>
            <p className="text-lg text-brand-gray max-w-3xl mx-auto">
              Everything you need to create, develop, and expand your agricultural export brand in global markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-brand-blue/10 p-3 rounded-lg mr-4">
                    <solution.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark">{solution.title}</h3>
                </div>
                <p className="text-brand-gray mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-brand-gray">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              How We Build Your Brand
            </h2>
            <p className="text-lg text-brand-gray max-w-3xl mx-auto">
              Our proven 4-step process ensures your brand success in the agricultural export market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision, target market, and business goals" },
              { step: "02", title: "Strategy", description: "Developing comprehensive brand strategy and market positioning" },
              { step: "03", title: "Implementation", description: "Creating products, packaging, and brand materials" },
              { step: "04", title: "Launch", description: "Market entry support and ongoing brand management" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{phase.title}</h3>
                <p className="text-brand-gray">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
            Ready to Build Your Agricultural Export Brand?
          </h2>
          <p className="text-xl text-brand-gray mb-8 max-w-3xl mx-auto">
            Let's discuss your brand vision and create a customized solution that drives your business growth.
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <Button size="lg" className="bg-brand-orange text-white hover:bg-orange-600 text-lg px-8 py-4">
                Get Started Today
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white text-lg px-8 py-4">
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}