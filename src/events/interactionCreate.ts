import type { BaseInteraction } from "discord.js"
import { ButtonHandlers, ModalHandlers } from "./_start/interaction-handler"

export default (interaction: BaseInteraction) => {
  if (interaction.isButton()) ButtonHandlers.get(interaction.customId)?.(interaction)
  else if (interaction.isModalSubmit()) ModalHandlers.get(interaction.customId)?.(interaction)
}
