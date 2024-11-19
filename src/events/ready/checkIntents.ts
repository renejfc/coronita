import { Client } from "discord.js";
import checkIntents from "../../utils/checkIntents";

export default async (client: Client) => checkIntents(client);
