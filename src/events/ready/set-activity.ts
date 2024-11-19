import { ActivityType, type Client } from "discord.js"

export default async (client: Client) => {
  client.user?.setActivity({
    name: "Ara araa~",
    type: ActivityType.Custom,
  })
}
