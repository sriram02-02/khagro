import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { sendEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  // Get products by category
  app.get("/api/products/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const products = await storage.getProductsByCategory(category);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products by category" });
    }
  });

  // Get single product
  app.get("/api/products/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await storage.getProduct(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Save to storage
      const contact = await storage.createContactSubmission(validatedData);
      
      // Send email notification to business
      const emailSuccess = await sendEmail({
        to: "khagrofoods@gmail.com",
        from: validatedData.email,
        subject: `New Inquiry from ${validatedData.firstName} ${validatedData.lastName} - ${validatedData.service}`,
        text: `New customer inquiry received:

Customer Details:
- Name: ${validatedData.firstName} ${validatedData.lastName}
- Email: ${validatedData.email}
- Company: ${validatedData.company || 'Not specified'}
- Product Interest: ${validatedData.service}

Message:
${validatedData.message}

Please contact the customer at: ${validatedData.email}`,
        html: `
          <h2>New Customer Inquiry</h2>
          <h3>Customer Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</li>
            <li><strong>Email:</strong> ${validatedData.email}</li>
            <li><strong>Company:</strong> ${validatedData.company || 'Not specified'}</li>
            <li><strong>Product Interest:</strong> ${validatedData.service}</li>
          </ul>
          <h3>Message:</h3>
          <p>${validatedData.message}</p>
          <p><strong>Please contact the customer at:</strong> ${validatedData.email}</p>
        `
      });
      
      res.status(201).json({ 
        message: "Contact form submitted successfully", 
        id: contact.id,
        emailSent: emailSuccess
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid form data", errors: error.errors });
      }
      console.error('Contact form error:', error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  // Get contact submissions (for admin)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
