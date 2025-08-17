import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-16">
      <div
        className="relative bg-cover bg-center h-screen hero-gradient"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.7), rgba(30, 64, 175, 0.7)), url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Global Import Export Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Connecting businesses worldwide with reliable, efficient trade services and premium quality products
            </p>
            <div className="space-x-4">
              <Link href="/products">
                <Button className="bg-brand-orange text-white px-8 py-3 text-lg font-semibold hover:bg-orange-600">
                  View Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-brand-blue">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
