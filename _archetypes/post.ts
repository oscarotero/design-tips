export default function (title: string) {
  const slug = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  const count = Array.from(Deno.readDirSync("./posts"))
    .filter((entry) => entry.name.match(/\d+-[\w-]+\.md$/))
    .length;

  const number = (count + 1).toString().padStart(3, "0");

  return {
    path: `/posts/${number}-${slug}.md`,
    content: {
      title: `${number} - ${title}`,
      tags: ["UI"],
      content: "Content here...",
    },
  };
}
