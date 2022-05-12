// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
export const RICTOTALSUPPLY = "100000000"; // 100.000.000
export const DAOSTAKINGALLOCATION = "20000000"; // 20.000.000
export const MEMBERSHIPALLOCATION = "40000000"; // 40.000.000

export const RICKVAULTALLOCATION = "40000000"; // TOTAL RIC ALLOCATION 20.000.000
export const RICTOLOCK = "2000000"; // 2.000.000 Lock this amount for RICLOCKINTERVAL
export const RICLOCKINTERVAL = 7000000; // 7.000.000

export const FEEDAOPOLLPERIOD = 259200; // The front end is coded to use the same values for the periods!
export const CATALOGPOLLPERIOD = 259200; // around 6 days

// THIS IS LIVE TESTNET PUBLIC KEY
export const RICSELLERADDRESS = "0xDF16399E6F10bbC1C07C88c6c70116182FA2e118";
const DAOSTAKINGPERIOD = 864000; // around 20 days
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  await deploymentScript({
    RICTOTALSUPPLY,
    DAOSTAKINGALLOCATION,
    MEMBERSHIPALLOCATION,
    RICKVAULTALLOCATION,
    RICTOLOCK,
    RICLOCKINTERVAL,
    FEEDAOPOLLPERIOD,
    CATALOGPOLLPERIOD,
    DAOSTAKINGPERIOD,
  });
}

type DeploymentArg = {
  RICTOTALSUPPLY: string;
  DAOSTAKINGALLOCATION: string;
  MEMBERSHIPALLOCATION: string;
  RICKVAULTALLOCATION: string;
  RICTOLOCK: string;
  RICLOCKINTERVAL: number;
  FEEDAOPOLLPERIOD: number;
  CATALOGPOLLPERIOD: number;
  DAOSTAKINGPERIOD: number;
};
const gasPrice = ethers.utils.parseUnits("32", "gwei");
// Export for testing
export async function deploymentScript(arg: DeploymentArg) {
  setTimeout(async () => {
    const SignUp = await ethers.getContractFactory("SimpleTerms");
    const signUp = await SignUp.deploy();
    const signup = await signUp.deployed();
    console.log("Signup deployed to:", signup.address);
    console.log(
      "Signup deploy transaction gasPrice",
      ethers.utils.formatEther(
        signup.deployTransaction.gasPrice !== undefined
          ? signup.deployTransaction.gasPrice.toString()
          : ""
      ),
      " gasLimit: ",
      signup.deployTransaction.gasLimit
    );
    // console.log(
    //   "Signup is already deployed on mainnet to ",
    //   "0xdC627A00D6d717c3A920ed07C28027E6f4474dF6"
    // );
    setTimeout(async () => {
      const RicToken = await ethers.getContractFactory("Ric");

      const ricToken = await RicToken.deploy(
        ethers.utils.parseEther(arg.RICTOTALSUPPLY),
        { gasPrice: gasPrice }
      );

      const ric = await ricToken.deployed();
      console.log("Ric deployed to:", ric.address);
      console.log(
        "Ric deploy transaction gasPrice",
        ric.deployTransaction.gasPrice,
        " gasLimit: ",
        ric.deployTransaction.gasLimit
      );
      setTimeout(async () => {
        const RICSale = await ethers.getContractFactory("RicSale");

        const RicSale = await RICSale.deploy(RICSELLERADDRESS, ric.address, {
          gasPrice: gasPrice,
        });
        const ricsale = await RicSale.deployed();
        console.log("Ric sale deployed to:", ricsale.address);

        console.log(
          "RicSale deploy transaction gasPrice",
          ricsale.deployTransaction.gasPrice,
          " gasLimit: ",
          ricsale.deployTransaction.gasLimit
        );
        setTimeout(async () => {
          const DAOStaking = await ethers.getContractFactory("DaoStaking");

          const DaoStaking = await DAOStaking.deploy(
            ric.address,
            arg.DAOSTAKINGPERIOD,
            { gasPrice: gasPrice }
          );
          const daoStaking = await DaoStaking.deployed();
          console.log("DaoStaking deployed to:", daoStaking.address);
          console.log(
            "DaoStaking deploy transaction gasPrice",
            daoStaking.deployTransaction.gasPrice,
            " gasLimit: ",
            daoStaking.deployTransaction.gasLimit
          );
          setTimeout(async () => {
            const CatalogDAOLib = await ethers.getContractFactory(
              "CatalogDaoLib"
            );
            const catalogDAOLib = await CatalogDAOLib.deploy({
              gasPrice: gasPrice,
            });
            const catalogdaolib = await catalogDAOLib.deployed();
            console.log(
              "CatalogDAO library deployed to:",
              catalogdaolib.address
            );
            console.log(
              "CatalogDaoLibrary deploy transaction gasPrice",
              catalogdaolib.deployTransaction.gasPrice,
              " gasLimit: ",
              catalogdaolib.deployTransaction.gasLimit
            );
            setTimeout(async () => {
              const CatalogDAO = await ethers.getContractFactory("CatalogDao", {
                libraries: { CatalogDaoLib: catalogdaolib.address },
              });
              // The voting period should be 302400 on Harmony network
              // It's 259200 now on Harmony testnet
              const catalogDAO = await CatalogDAO.deploy(
                arg.CATALOGPOLLPERIOD,
                daoStaking.address,
                { gasPrice: gasPrice }
              );
              await catalogDAO.deployed();
              console.log("Catalogdao deployed to:", catalogDAO.address);
              console.log(
                "CatalogDao deploy transaction gasPrice",
                catalogDAO.deployTransaction.gasPrice,
                " gasLimit: ",
                catalogDAO.deployTransaction.gasLimit
              );
              setTimeout(async () => {
                daoStaking.setCatalogDao(catalogDAO.address);
                setTimeout(async () => {
                  const FeeDAO = await ethers.getContractFactory("FeeDao");
                  const feeDao = await FeeDAO.deploy(
                    ric.address,
                    daoStaking.address,
                    catalogDAO.address,
                    arg.FEEDAOPOLLPERIOD,
                    { gasPrice: gasPrice }
                  );
                  const feedao = await feeDao.deployed();
                  console.log("FeeDao deployed to:", feedao.address);
                  console.log(
                    "FeeDao deploy transaction gasPrice",
                    feedao.deployTransaction.gasPrice,
                    " gasLimit: ",
                    feedao.deployTransaction.gasLimit
                  );
                  setTimeout(async () => {
                    const RicVault = await ethers.getContractFactory(
                      "RicVault"
                    );
                    const ricVault = await RicVault.deploy(ric.address, {
                      gasPrice: gasPrice,
                    });
                    const ricvault = await ricVault.deployed();
                    console.log("Ric vault deployed to: ", ricvault.address);
                    console.log(
                      "Ric vault deploy transaction gasPrice",
                      ricvault.deployTransaction.gasPrice,
                      " gasLimit: ",
                      ricvault.deployTransaction.gasLimit
                    );
                    setTimeout(async () => {
                      await feedao.setRicVault(ricvault.address, {
                        gasPrice: gasPrice,
                      });
                      setTimeout(async () => {
                        await ricvault.setFeeDao(feedao.address, {
                          gasPrice: gasPrice,
                        });

                        // setTimeout(async () => {
                        //   await ric.approve(
                        //     daoStaking.address,
                        //     ethers.utils.parseEther(
                        //       arg.DAOSTAKINGALLOCATION
                        //     ),
                        //     { gasPrice: gasPrice }
                        //   );
                        //   setTimeout(async () => {
                        //     // 20 % goes to the daoStaking reward

                        //     await daoStaking.depositRewards(
                        //       ethers.utils.parseEther(
                        //         arg.DAOSTAKINGALLOCATION
                        //       ),
                        //       { gasPrice: gasPrice }
                        //     );
                        //     setTimeout(async () => {
                        //       // 40 % goes to the membership (crowdsale) contract
                        //       // No transfer, only approval
                        //       await ric.approve(
                        //         ricsale.address,
                        //         ethers.utils.parseEther(
                        //           arg.MEMBERSHIPALLOCATION
                        //         ),
                        //         { gasPrice: gasPrice }
                        //       );
                        //       setTimeout(async () => {
                        //         console.log(
                        //           await ric.allowance(
                        //             RICSELLERADDRESS,
                        //             ricsale.address
                        //           )
                        //         );
                        //         console.log(
                        //           await ricsale.remainingTokens()
                        //         );

                        //         // 20 % goes to the Ric vault,
                        //         await ric.approve(
                        //           ricvault.address,
                        //           ethers.utils.parseEther(
                        //             arg.RICKVAULTALLOCATION
                        //           ),
                        //           { gasPrice: gasPrice }
                        //         );
                        //       }, 38000);
                        //     }, 36000);
                        //   }, 34000);
                        // }, 32000);
                      }, 28000);
                    }, 26000);
                  }, 24000);
                }, 22000);
              }, 16000);
            }, 14000);
          }, 12000);
        }, 10000);
      }, 8000);
    }, 6000);
  }, 4000);

  // We get the contract to deploy

  // Token allocation script!

  // Locked with increasing lock up periods for RICTOLOCK amount of tokens.
  // 1. RICTOLOCK is 2% of the total supply
  // for (let i = 1; i <= 16; i++) {
  //   await ricvault.lockFunds(
  //     arg.RICLOCKINTERVAL * i,
  //     ethers.utils.parseEther(arg.RICTOLOCK)
  //   );
  // }
  // 20 % Ecosystem / Liquidity / 30 RIC Grants / wallet for making proposals / Airdrops

  // Manual lockups!
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
