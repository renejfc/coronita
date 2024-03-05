import { SlashCommand } from "@lilybird/handlers";
import { ApplicationCommand, UserOption, Embed, EmbedField, EmbedFooter, EmbedImage } from "@lilybird/jsx";
import { randomInt } from "crypto";

const command = (
  <ApplicationCommand name="gayer" description="qn es mas joto">
    <UserOption name="user1" description="Primer usuario" required />
    <UserOption name="user2" description="Segundo usuario" required />
  </ApplicationCommand>
);

const embedResult = ({ firstUser, secondUser }: { firstUser: string, secondUser: string }) => {
  const tagUser = (user: string) => `<@${user}>`;
  const random = randomInt(2);
  const randomUser = random === 0 ? firstUser : secondUser;

  return (
    <Embed title="🏳️‍🌈🏳️‍🌈🏳️‍🌈 CONCURSO DE JOTOS 🏳️‍🌈🏳️‍🌈🏳️‍🌈" description="Concurso a la reina del baile 💅" color={0xffc0cb}>
      <EmbedField name="Concursante 1" value={tagUser(firstUser)} inline />
      <EmbedField name="Concursante 2" value={tagUser(secondUser)} inline />
      <EmbedField name="" value="-------------------" />
      <EmbedField name="Le Ganadore" value={tagUser(randomUser)} />
      <EmbedImage url="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd28yMm5pdGliZzNidGlpNWx2ZXR6N3hjbTNlMmVzcWNtNnM2dGtyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oOi3roYRf4NW0/giphy.gif" />
      <EmbedFooter text="🥵🥵🥵" />
    </Embed>
  );
}

export default {
  post: "GLOBAL",
  data: command,
  run: async ( interaction ) => {
    const firstUser = interaction.data.getUser("user1", true);
    const secondUser = interaction.data.getUser("user2", true);

    await interaction.reply({
      embeds: [
        embedResult({ firstUser, secondUser })
      ]
    });
  },
} satisfies SlashCommand;
