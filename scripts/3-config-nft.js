import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop("0xe4EAEC3fafE3339BaCD1Dd61b0D4e9C7fd23E5D1");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "ARTEDYX GREEN BLOCKCHAIN CLIMATE MARKETPLACE DAO Membership Headband",
        description: "This NFT will give you access to ARTEDYX GREEN BLOCKCHAIN CLIMATE MARKETPLACE DAO Membership !",
        image: readFileSync("scripts/assets/ARTEDYS.png"),
      },
    ]);
    console.log("✅ Successfully created a new eSpatiale NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();