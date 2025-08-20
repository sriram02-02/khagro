// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  products;
  contactSubmissions;
  constructor() {
    this.products = /* @__PURE__ */ new Map();
    this.contactSubmissions = /* @__PURE__ */ new Map();
    this.initializeProducts();
  }
  initializeProducts() {
    const sampleProducts = [
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
        categoryIcon: "\u{1F33E}",
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
        categoryIcon: "\u{1FAD8}",
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
        categoryIcon: "\u{1F336}\uFE0F",
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
        categoryIcon: "\u{1F944}",
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
        categoryIcon: "\u{1FAD9}",
        gradient: "linear-gradient(135deg, #fa709a, #fee140)"
      }
    ];
    sampleProducts.forEach((product) => {
      const id = randomUUID();
      this.products.set(id, { ...product, id });
    });
  }
  async getProducts() {
    return Array.from(this.products.values());
  }
  async getProductsByCategory(category) {
    return Array.from(this.products.values()).filter((product) => product.category === category);
  }
  async getProduct(id) {
    return this.products.get(id);
  }
  async createProduct(insertProduct) {
    const id = randomUUID();
    const product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
  async createContactSubmission(insertContact) {
    const id = randomUUID();
    const contact = {
      ...insertContact,
      id,
      company: insertContact.company || null,
      service: insertContact.service || null
    };
    this.contactSubmissions.set(id, contact);
    return contact;
  }
  async getContactSubmissions() {
    return Array.from(this.contactSubmissions.values());
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: varchar("category").notNull(),
  image: text("image").notNull(),
  specifications: text("specifications").array().notNull(),
  detailedItems: text("detailed_items").array().notNull(),
  categoryIcon: text("category_icon").notNull(),
  gradient: text("gradient").notNull()
});
var contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  service: varchar("service"),
  message: text("message").notNull()
});
var insertProductSchema = createInsertSchema(products).omit({
  id: true
});
var insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true
});

// server/routes.ts
import { z } from "zod";

// server/email.ts
import { MailService } from "@sendgrid/mail";
if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable is not set. Email functionality will be disabled.");
}
var mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}
async function sendEmail(params) {
  if (!process.env.SENDGRID_API_KEY) {
    console.error("SendGrid API key not configured. Email not sent.");
    return false;
  }
  try {
    await mailService.send({
      to: params.to,
      from: params.from || "noreply@yourdomain.com",
      // Fallback for from field
      subject: params.subject,
      text: params.text,
      html: params.html
    });
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("SendGrid email error:", error);
    return false;
  }
}

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/products", async (req, res) => {
    try {
      const products2 = await storage.getProducts();
      res.json(products2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const products2 = await storage.getProductsByCategory(category);
      res.json(products2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products by category" });
    }
  });
  app2.get("/api/products/:id", async (req, res) => {
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
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      const emailSuccess = await sendEmail({
        to: "khagrofoods@gmail.com",
        from: validatedData.email,
        subject: `New Inquiry from ${validatedData.firstName} ${validatedData.lastName} - ${validatedData.service}`,
        text: `New customer inquiry received:

Customer Details:
- Name: ${validatedData.firstName} ${validatedData.lastName}
- Email: ${validatedData.email}
- Company: ${validatedData.company || "Not specified"}
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
            <li><strong>Company:</strong> ${validatedData.company || "Not specified"}</li>
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
      console.error("Contact form error:", error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });
  app2.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact submissions" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
