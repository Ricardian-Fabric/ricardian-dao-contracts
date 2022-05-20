import { ethers } from "hardhat";

// NOTE: This function is usign testnet addresses

async function main() {
  const catalogDAO = await ethers.getContractFactory("CatalogDao", {
    libraries: { CatalogDaoLib: "0x0165878A594ca255338adfa4d48449f69242Eb8F" },
  });
  const catalog = catalogDAO.attach(
    "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853"
  );

  await catalog.setPollPeriod("50");

  console.log("DONE");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
