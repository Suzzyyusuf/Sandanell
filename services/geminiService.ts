
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  constructor() {}

  private getAI() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async auditLeadQuality(description: string) {
    const ai = this.getAI();
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a senior business intelligence consultant at Sandanell Hub. 
        Evaluate the following lead/business description and provide a professional audit including:
        1. Potential Market Value
        2. Suggested Outreach Strategy
        3. Risk Assessment
        
        Lead Description: ${description}`,
        config: {
          temperature: 0.7
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Audit Error:", error);
      return "Unable to process audit at this time. Please try again later.";
    }
  }

  async getBrisbaneLocalInsights(query: string, userCoords?: { latitude: number; longitude: number }) {
    const ai = this.getAI();
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `You are the Brisbane Office Concierge for Sandanell Global. 
        Answer this user query about our Brisbane location or local area: "${query}".
        Our Brisbane office is located near the Central Business District (approx -27.4698, 153.0251).
        Provide helpful, professional advice including nearby logistics hubs, restaurants for business meetings, or travel tips.`,
        config: {
          tools: [{ googleMaps: {} }],
          toolConfig: {
            retrievalConfig: {
              latLng: userCoords || {
                latitude: -27.4698,
                longitude: 153.0251
              }
            }
          }
        },
      });
      
      const text = response.text;
      const links = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      
      return { text, links };
    } catch (error) {
      console.error("Local Insights Error:", error);
      return { text: "I'm currently having trouble accessing local Brisbane data.", links: [] };
    }
  }
}

export const geminiService = new GeminiService();
