import { parseEther } from "ethers/lib/utils";
import { ethers } from "hardhat";

async function main() {
    const ricFactory = await ethers.getContractFactory("Ric");
    const RIC = await ricFactory.attach("0x7FDFBBb392d17774CF95F761a843a4408965f2a8");
    await RIC.approve("0xAC640cDeCCD983C3f2605823Cec396Fcb4bB93Eb", parseEther("2000000"));

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})