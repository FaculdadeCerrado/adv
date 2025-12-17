import { GoogleGenAI } from "@google/genai";
import { NewsResult } from "../types";

// A chave é injetada pelo Vite conforme configurado no vite.config.ts
const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenAI(apiKey);

export const fetchDailyLegalNews = async (): Promise<NewsResult> => {
  try {
    // Usando 1.5-flash por ser estável e suportar Grounding (Google Search)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `
      Você é um assistente jurídico especializado em notícias do Brasil.
      Busque e resuma as 3 notícias jurídicas mais relevantes e recentes de hoje ou desta semana no Brasil.
      Foque em decisões do STF, STJ ou mudanças legislativas importantes.
      
      Formato da resposta:
      Apresente um resumo claro e profissional de cada notícia em tópicos (bullet points).
      Use uma linguagem formal adequada para um site de advocacia.
      Não inclua introduções genéricas. Vá direto ao ponto.
    `;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      tools: [
        {
          // @ts-ignore - Ativando a busca do Google para notícias reais
          googleSearchRetrieval: {},
        },
      ],
    });

    const response = await result.response;
    const text = response.text() || "Não foi possível obter as notícias no momento.";
    
    // Extração das fontes reais via Grounding Metadata
    const sources: any[] = [];
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;

    if (groundingMetadata?.groundingChunks) {
      groundingMetadata.groundingChunks.forEach((chunk: any) => {
        if (chunk.web) {
          sources.push({
            title: chunk.web.title,
            uri: chunk.web.uri
          });
        }
      });
    }

    // Remove duplicatas de fontes
    const uniqueSources = sources.filter((v, i, a) => a.findIndex(v2 => (v2.uri === v.uri)) === i);

    return {
      content: text,
      sources: uniqueSources
    };

  } catch (error) {
    console.error("Erro ao buscar notícias jurídicas:", error);
    return {
      content: "O sistema de notícias está temporariamente indisponível. Por favor, tente novamente mais tarde.",
      sources: []
    };
  }
};