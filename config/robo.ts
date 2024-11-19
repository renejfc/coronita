import type { Config } from "robo.js"

export default {
  clientOptions: {
    intents: ["Guilds", "GuildMessages", "MessageContent"],
  },
  plugins: [],
  type: "robo",
} satisfies Config
