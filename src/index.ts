import { createClient, Intents } from "lilybird";
import { createHandler } from "@lilybird/handlers";

const listeners = await createHandler({
  dirs: {
    slashCommands: `${import.meta.dir}/commands`,
    listeners: `${import.meta.dir}/listeners`,
  },
});

await createClient({
  token: process.env.TOKEN,
  intents: [
    Intents.GUILDS,
  ],
  ...listeners,
});
