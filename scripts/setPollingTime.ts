import { ethers } from "hardhat";

// NOTE: This function is usign testnet addresses

async function main() {
  const catalogDAO = await ethers.getContractFactory("CatalogDao", {
    libraries: { CatalogDaoLib: "0x1FEA72213C853EF9a44A71c1267e018e17f7F5c9" },
  });
  const catalog = catalogDAO.attach(
    "0x30E072A9dfF6A38fC626fb58326683F6C74e37ca"
  );

  await catalog.setPollPeriod("259200");

  console.log("DONE");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
