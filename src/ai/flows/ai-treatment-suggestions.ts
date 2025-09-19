"use server"

import { z } from "zod"

const AiTreatmentSuggestionsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'.",
    ),
})
export type AiTreatmentSuggestionsInput = z.infer<typeof AiTreatmentSuggestionsInputSchema>

const AiTreatmentSuggestionsOutputSchema = z.object({
  suggestions: z
    .array(
      z.object({
        treatment: z.string().describe("The name of the suggested beauty treatment."),
        reason: z.string().describe("The reason why this treatment is suggested."),
      }),
    )
    .describe("A list of beauty treatment suggestions."),
})
export type AiTreatmentSuggestionsOutput = z.infer<typeof AiTreatmentSuggestionsOutputSchema>

export async function getAiTreatmentSuggestions(
  input: AiTreatmentSuggestionsInput,
): Promise<AiTreatmentSuggestionsOutput> {
  return {
    suggestions: [
      {
        treatment: "Hydrating Facial",
        reason:
          "Based on your skin type, a hydrating facial would help improve moisture levels and give you a healthy glow.",
      },
      {
        treatment: "Eyebrow Shaping",
        reason: "Professional eyebrow shaping would enhance your natural features and frame your face beautifully.",
      },
    ],
  }
}
