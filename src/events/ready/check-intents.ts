import type { Client } from "discord.js"
import { checkIntents } from "../../utils/check-intents"

export default async (client: Client) => checkIntents(client)
