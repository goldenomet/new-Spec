import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Contact submission received",
        submissionId: submission.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Error processing contact submission:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to process your request" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
