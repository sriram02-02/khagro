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
        name: "Premium Rice Varieties",
        description: "Finest quality rice including aromatic Basmati, premium Sona Masoori, and specialty varieties sourced directly from India's finest paddy fields.",
        category: "agriculture",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        specifications: ["Premium Quality", "Export Grade", "Aromatic Varieties", "Certified Origin"],
        detailedItems: [
          "Sona Masoori Rice - Premium medium-grain rice known for its lightweight and aromatic properties",
          "Crystal Sona Masoori - Extra refined Sona Masoori with crystal-clear grains and superior quality", 
          "Basmati Rice - Long-grain aromatic rice with distinctive fragrance and delicate flavor",
          "Idli Rava - Specially processed rice rava perfect for soft and fluffy idlis",
          "Idli Rice - Short-grain parboiled rice ideal for making traditional South Indian idlis",
          "Ponni Rice - Popular South Indian rice variety with excellent taste and texture"
        ],
        categoryIcon: "🌾",
        gradient: "linear-gradient(135deg, #667eea, #764ba2)"
      },
      {
        name: "Pulses & Dals",
        description: "Comprehensive range of nutritious pulses and dals, quality-tested for maximum nutrition and sourced from certified farms.",
        category: "agriculture", 
        image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        specifications: ["High Protein", "Quality Tested", "Nutritious", "Bulk Supply"],
        detailedItems: [
          "Arhar Dal (Toor Dal) - Most popular Indian lentil with rich protein content",
          "Chana Dal - Split chickpeas with sweet and nutty flavor, high in protein",
          "Urad Dal - Black gram dal essential for South Indian cuisine",
          "Red Kidney Beans (Rajma) - Premium quality kidney beans rich in fiber",
          "Masoor Split - Red lentils that cook quickly and are highly nutritious",
          "Moong Dal - Yellow split gram that's easy to digest and protein-rich"
        ],
        categoryIcon: "🫘",
        gradient: "linear-gradient(135deg, #f093fb, #f5576c)"
      },
      {
        name: "Whole Spices",
        description: "Authentic whole spices with intense flavors sourced from India's premier spice regions, carefully selected for export quality.",
        category: "spices",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", 
        specifications: ["Authentic Origins", "Export Quality", "Intense Flavors", "Premium Grade"],
        detailedItems: [
          "Red Chilli - Premium quality dried red chilies with perfect heat and color",
          "Black Pepper - King of spices with strong pungent flavor and aroma",
          "Green Cardamom - Queen of spices with sweet aromatic flavor",
          "Cinnamon Sticks - Sweet and woody flavored bark from Ceylon cinnamon",
          "Cloves - Aromatic flower buds with intense flavor and medicinal properties",
          "Cumin Seeds - Earthy flavored seeds essential for Indian cooking"
        ],
        categoryIcon: "🌶️",
        gradient: "linear-gradient(135deg, #4facfe, #00f2fe)"
      },
      {
        name: "Blended Spices & Masalas",
        description: "Expertly crafted spice blends and traditional masalas for authentic Indian flavors, made using time-tested recipes.",
        category: "spices",
        image: "https://images.unsplash.com/photo-1599046381984-4704b3463567?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        specifications: ["Traditional Recipes", "Expert Blending", "Authentic Taste", "Consistent Quality"],
        detailedItems: [
          "Garam Masala - Traditional spice blend with warm aromatic flavors",
          "Sambar Powder - South Indian spice mix perfect for sambar and curries",
          "Biryani Masala - Special blend for aromatic and flavorful biryani",
          "Curry Powder - Versatile spice blend for various curry dishes",
          "Tandoori Masala - Spice blend for authentic tandoori preparations",
          "Rasam Powder - Traditional South Indian spice mix for rasam"
        ],
        categoryIcon: "🥄",
        gradient: "linear-gradient(135deg, #43e97b, #38f9d7)"
      },
      {
        name: "Ground Spices & Powders",
        description: "Finely ground spice powders processed for freshness and consistent quality, maintaining maximum flavor and aroma.",
        category: "spices",
        image: "https://images.unsplash.com/photo-1596207-46900b2-d058c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        specifications: ["Freshly Ground", "Maximum Flavor", "Consistent Quality", "Vibrant Colors"],
        detailedItems: [
          "Turmeric Powder - Pure turmeric powder with vibrant golden color and health benefits",
          "Red Chilli Powder - Premium ground red chilli with perfect heat and color",
          "Coriander Powder - Fresh ground coriander with aromatic flavor",
          "Cumin Powder - Premium ground cumin with earthy aroma",
          "Black Pepper Powder - Freshly ground black pepper with strong flavor",
          "Ginger Powder - Pure ground ginger with warm, spicy flavor"
        ],
        categoryIcon: "🫙", 
        gradient: "linear-gradient(135deg, #fa709a, #fee140)"
      },

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
    const contact: ContactSubmission = { 
      ...insertContact, 
      id,
      company: insertContact.company || null,
      service: insertContact.service || null
    };
    this.contactSubmissions.set(id, contact);
    return contact;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
}

export const storage = new MemStorage();
