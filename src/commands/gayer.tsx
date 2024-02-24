import { SlashCommand } from "@lilybird/handlers";
import { ApplicationCommand, UserOption } from "@lilybird/jsx";
import { randomInt } from "crypto";

const command = (
  <ApplicationCommand name="gayer" description="qn es mas joto">
    <UserOption name="user1" description="Primer usuario" required />
    <UserOption name="user2" description="Segundo usuario" required />
  </ApplicationCommand>
);

export default {
  post: "GLOBAL",
  data: command,
  run: async (interaction) => {
    await interaction.deferReply();

    const firstUser = interaction.data.getUser("user1");
    const secondUser = interaction.data.getUser("user2");

    const random = randomInt(2);
    const randomUser = random === 0 ? firstUser : secondUser;

    await interaction.editReply({
      embeds: [
        {
          title: "🏳️‍🌈🏳️‍🌈🏳️‍🌈 CONCURSO DE JOTOS 🏳️‍🌈🏳️‍🌈🏳️‍🌈",
          description: `Concurso a la reina del baile 💅`,
          fields: [
            {
              inline: true,
              name: "Concursante 1",
              value: `<@${firstUser}>`,
            },
            {
              inline: true,
              name: "Concursante 2",
              value: `<@${secondUser}>`,
            },
            {
              name: "",
              value: "-------------------",
            },
            {
              name: "Le Ganadore",
              value: `<@${randomUser}>`,
            },
          ],
          footer: {
            text: `🥵🥵🥵`,
          },
          color: 0xffc0cb,
          image: {
            url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd28yMm5pdGliZzNidGlpNWx2ZXR6N3hjbTNlMmVzcWNtNnM2dGtyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oOi3roYRf4NW0/giphy.gif",
          },
        },
      ],
    });
  },
} satisfies SlashCommand;
