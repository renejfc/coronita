import type { ButtonInteraction } from "discord.js"

export const customID = "poke"

export default async (interaction: ButtonInteraction) => {
  await interaction.reply({
    content: "Ouch that hurts! :c",
    ephemeral: true,
  })
}
