import { type Product, type InsertProduct, type ContactSubmission, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Contact submissions
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.products = new Map();
    this.contactSubmissions = new Map();
    this.initializeProducts();
  }

  private initializeProducts() {
    const sampleProducts: InsertProduct[] = [
      {
        name: "Smartphones & Mobile Devices",
        description: "Latest generation smartphones featuring advanced processors, high-resolution cameras, and cutting-edge technology. We source from leading manufacturers to ensure quality and reliability.",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
        specifications: ["5G Compatible", "High-Resolution Cameras", "Long Battery Life", "Premium Build Quality"]
      },
      {
        name: "Laptops & Computers",
        description: "Professional grade laptops and desktop computers for business and personal use.",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
        specifications: ["High Performance Processors", "Professional Graphics", "Extended Warranty", "Business Support"]
      },
      {
        name: "Premium Fabrics",
        description: "High-quality cotton, silk, and synthetic fabrics for garment manufacturing.",
        category: "textiles",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
        specifications: ["Premium Cotton", "Silk Blends", "Eco-Friendly", "Custom Patterns"]
      },
      {
        name: "Ready-Made Garments",
        description: "Fashionable clothing and apparel for men, women, and children.",
        category: "textiles",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
        specifications: ["Fashion Forward", "Quality Materials", "Size Range", "Seasonal Collections"]
      },
      {
        name: "Industrial Machinery",
        description: "Heavy-duty manufacturing equipment and industrial machinery solutions.",
        category: "machinery",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
        specifications: ["Heavy Duty", "Precision Engineering", "Maintenance Support", "Energy Efficient"]
      },
      {
        name: "Construction Equipment",
        description: "Professional construction tools and equipment for building projects.",
        category: "machinery",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
        specifications: ["Professional Grade", "Safety Certified", "Durable Build", "Training Included"]
      },
      {
        name: "Agricultural Products",
        description: "Fresh produce, grains, and agricultural commodities from certified farms.",
        category: "agriculture",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
        specifications: ["Organic Certified", "Fresh Quality", "Global Sourcing", "Seasonal Availability"]
      },
      {
        name: "Spices & Food Ingredients",
        description: "Premium quality spices and food ingredients sourced from authentic origins.",
        category: "agriculture",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
        specifications: ["Authentic Origins", "Premium Quality", "Bulk Supply", "Custom Blends"]
      }
    ];

    sampleProducts.forEach(product => {
      const id = randomUUID();
      this.products.set(id, { ...product, id });
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.category === category);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const contact: ContactSubmission = { ...insertContact, id };
    this.contactSubmissions.set(id, contact);
    return contact;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
}

export const storage = new MemStorage();
