import OBR from "@owlbear-rodeo/sdk";

const ID = "app.vercel.owb-init-tracker";

export async function setupContextMenu() {
  await OBR.contextMenu.create({
    id: `${ID}/context-menu`,
    icons: [
      {
        icon: "/add.svg",
        label: "Add to Initiative",
        filter: {
          every: [{ key: "layer", value: "CHARACTER" }],
        },
      },
    ],
  });
}