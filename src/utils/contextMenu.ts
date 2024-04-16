import OBR, { type Item } from "@owlbear-rodeo/sdk";

const ID = "app.vercel.owb-init-tracker";

export async function setupContextMenu() {
  await OBR.contextMenu.create({
    id: `${ID}/context-menu`,
    icons: [
      {
        icon: "/add.svg",
        label: "Add to Initiative",
        filter: {
          every: [
            { key: "layer", value: "CHARACTER" },
            { key: ["metadata", `${ID}/metadata`], value: undefined },
          ],
        },
      },
      {
        icon: "/remove.svg",
        label: "Remove from Initiative",
        filter: {
          every: [{ key: "layer", value: "CHARACTER" }],
        },
      },
    ],
    onClick: (context) => {
      const addToInitiative = context.items.every(
        (item) => item.metadata[`${ID}/metadata`] === undefined,
      );
      if (addToInitiative) {
        const initiative = window.prompt("Enter the initiative value");
        OBR.scene.items
          .updateItems(context.items, (items: Item[]) => {
            for (const item of items) {
              item.metadata[`${ID}/metadata`] = {
                initiative,
              };
            }
          })
          .catch(console.error);
      } else {
        OBR.scene.items
          .updateItems(context.items, (items: Item[]) => {
            for (const item of items) {
              delete item.metadata[`${ID}/metadata`];
            }
          })
          .catch(console.error);
      }
    },
  });
}
