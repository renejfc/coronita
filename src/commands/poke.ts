import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js"
import type { ChatInputCommandInteraction } from "discord.js"
import { type CommandResult, createCommandConfig } from "robo.js"

export const config = createCommandConfig({
  description: "Poke the bot!",
} as const)

export default async (interaction: ChatInputCommandInteraction): Promise<CommandResult> => {
  const button = new ButtonBuilder().setCustomId("poke").setStyle(ButtonStyle.Primary).setLabel("Poke me!")
  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button)

  return {
    content: "Poke me!",
    components: [row],
  }
}
