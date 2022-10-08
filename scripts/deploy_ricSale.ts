import { ethers } from "hardhat";
import { RICSELLERADDRESS } from "./deploy";

const TOKENADDRESS = "0x7FDFBBb392d17774CF95F761a843a4408965f2a8"; //MAINNET TOKEN ADDRESS
const TESTNET: 0 | 1 | 2 = 0; //Deployed on Testnet, 0 is mainnet 


async function main() {
    setTimeout(async () => {
        const RicSale = await ethers.getContractFactory("RicSale");
        const ricSale = await RicSale.deploy(RICSELLERADDRESS, TOKENADDRESS, TESTNET);
        const ricsale = await ricSale.deployed();
        console.log("RicSale deployed to:", ricsale.address);
        console.log(
            "RicSale deploy transaction gasPrice",
            ethers.utils.formatEther(
                ricsale.deployTransaction.gasPrice !== undefined
                    ? ricsale.deployTransaction.gasPrice.toString()
                    : ""
            ),
            " gasLimit: ",
            ricsale.deployTransaction.gasLimit
        );
    })
}

// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// }); 