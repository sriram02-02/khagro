import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import ProductCard from "@/components/product-card";
import ProductModal from "@/components/product-modal";
import ContactInfoDialog from "@/components/contact-info-dialog";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Award, Globe, Ship, Plane, Truck, FileText, Search, Handshake } from "lucide-react";
import type { Product } from "@shared/schema";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);
  const [enquiryItem, setEnquiryItem] = useState<string>("");

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  // Get featured products (first 6 products)
  const featuredProducts = products?.slice(0, 6) || [];

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleEnquire = (product: Product, itemName?: string) => {
    setEnquiryProduct(product);
    setEnquiryItem(itemName || "");
    setIsContactDialogOpen(true);
  };
  const services = [
    {
      icon: Ship,
      title: "Export Services",
      description: "Comprehensive export solutions including documentation, logistics coordination, and compliance management for global markets."
    },
    {
      icon: Plane,
      title: "Import Services", 
      description: "Streamlined import processes with customs clearance, quality inspection, and timely delivery to your location."
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description: "End-to-end logistics solutions including warehousing, transportation, and supply chain optimization."
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete documentation services including certificates, permits, and compliance paperwork for international trade."
    },
    {
      icon: Search,
      title: "Quality Inspection",
      description: "Rigorous quality control and inspection services to ensure products meet international standards and specifications."
    },
    {
      icon: Handshake,
      title: "Trade Consulting",
      description: "Expert consultation on market entry strategies, trade regulations, and business development opportunities."
    }
  ];

  return (
    <div>
      <HeroSection />
      <StatsSection />
      
      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">About GlobalTrade Solutions</h2>
              <p className="text-lg text-brand-gray mb-6">
                With over 15 years of experience in international trade, GlobalTrade Solutions has established itself as a trusted partner for businesses seeking reliable import and export services. Our commitment to excellence and deep understanding of global markets has enabled us to build lasting relationships with clients across 50+ countries.
              </p>
              <p className="text-lg text-brand-gray mb-8">
                We specialize in facilitating seamless trade operations, offering comprehensive solutions from sourcing and procurement to logistics and delivery. Our team of experienced professionals ensures that every transaction meets the highest standards of quality and compliance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-brand-light rounded-lg">
                  <Award className="h-12 w-12 text-brand-orange mx-auto mb-2" />
                  <h4 className="font-semibold text-brand-dark">Quality Assured</h4>
                </div>
                <div className="text-center p-4 bg-brand-light rounded-lg">
                  <Globe className="h-12 w-12 text-brand-orange mx-auto mb-2" />
                  <h4 className="font-semibold text-brand-dark">Global Reach</h4>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=750"
                alt="Professional business team"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Our Services</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Comprehensive import and export solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <Icon className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-brand-dark mb-4">{service.title}</h3>
                    <p className="text-brand-gray">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-brand-blue text-white hover:bg-blue-700 px-8 py-3 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Our Premium Product Categories</h2>
            <p className="text-lg text-brand-gray max-w-3xl mx-auto">
              Carefully curated selection of finest products sourced from trusted suppliers worldwide
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="space-y-4">
                  <Skeleton className="h-64 w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={handleViewDetails}
                  onEnquire={handleEnquire}
                />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="bg-brand-blue text-white hover:bg-blue-700 px-8 py-3 text-lg">
                Explore All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Ready to Expand Your Business Globally?</h2>
          <p className="text-xl text-brand-gray mb-8 max-w-3xl mx-auto">
            Get in touch with our team of experts to discuss your import/export needs and discover how we can help grow your business internationally.
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <Button className="bg-brand-orange text-white hover:bg-orange-600 px-8 py-3 text-lg">
                Get Started Today
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 text-lg">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        onEnquire={handleEnquire}
      />

      {/* Contact Info Dialog */}
      <ContactInfoDialog
        isOpen={isContactDialogOpen}
        onClose={() => {
          setIsContactDialogOpen(false);
          setEnquiryProduct(null);
          setEnquiryItem("");
        }}
        product={enquiryProduct}
        specificItem={enquiryItem}
      />
    </div>
  );
}
