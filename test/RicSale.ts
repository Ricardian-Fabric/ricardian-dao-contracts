import { expect } from "chai";
// eslint-disable-next-line node/no-missing-import
import { parseEther, setUp } from "./setup";

describe("RicSale", async function () {
  it("Tokensale", async () => {
    const { owner, participant1, participant2, ricsale, ric, daoStaking } =
      await setUp(true);
    // I transfer away the tokens, the address will have only 40.000.000 tokens in the wallet for the sale
    await ric.approve(daoStaking.address, parseEther("59999570"));
    expect(await ric.balanceOf(owner.address)).to.equal(parseEther("99957000"));
    await daoStaking.depositRewards(parseEther("59999570"));
    expect(await ric.balanceOf(owner.address)).to.equal(parseEther("39957430"));

    await ric.approve(ricsale.address, parseEther("39957430"));
    expect(await ricsale.remainingTokens()).to.equal(parseEther("39957430"));

    expect(await ric.balanceOf(participant1.address)).to.equal(
      parseEther("7000")
    );
    const tokensSold = await ricsale.getTokensSold();
    expect(tokensSold).to.equal(0);
    expect(await ricsale.getCurrentRate()).to.equal(5);

    expect(await ric.balanceOf(owner.address)).to.equal(parseEther("39957430"));

    let overrides = { value: parseEther("1000") };
    await ricsale.connect(participant1).buyTokens(overrides);

    expect(await ric.balanceOf(participant1.address)).to.equal(
      parseEther("12000")
    );
    expect(await ric.balanceOf(owner.address)).to.equal(parseEther("39952430"));
    expect(await ric.balanceOf(participant2.address)).to.equal(
      parseEther("7000")
    );

    overrides = { value: parseEther("1000") };
    await ricsale.connect(participant2).buyTokens(overrides);

    expect(await ric.balanceOf(participant2.address)).to.equal(
      parseEther("12000")
    );
  });
});
