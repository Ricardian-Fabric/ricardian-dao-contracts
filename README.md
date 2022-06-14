# Ricardian Fabric DAO Contracts

The smart contracts in this library are the DAO contracts for Ricardian Fabric.

#NOTE : We are currently REFACTORING to deploy this on MULTIPLE CHAINS!

## LATEST: Mainnet addresses:

Signup deployed to : 0xE1fe19295EcE29eCE8a25969aDf5D5650a10b914

CatalogDAO library deployed to :

CatalogDAO deployed to : 0x30E072A9dfF6A38fC626fb58326683F6C74e37ca

Ric deployed to : 0x7FDFBBb392d17774CF95F761a843a4408965f2a8

Ric Sale deployed to: 0x0e1a755B1DA431a8e0dc37c5DD8C23B8f7f23C41

DaoStaking deployed to: 0x484205757e7f5e376a40Cf378eeedF75089B42A5

FeeDao deployed to: 0xdBB2543b6Ef7e8480b51bE37f87fDd099b14cf86

Ricvault deployed to : 0x1d87b41128B645250e71EE546AC944062F7D46c3

## Smart contracts

You can find the Api in the /docs folder.

#### SignUp

- The signup contract is a **ricardian contract**, with a smart contract (SimpleTerms) on the Harmony network.
- Users must accept it to use the application.

#### CatalogDao

- Used for contributing content (smart contracts) to the application that users can later select and use.
- Users can submit proposals on what smart contracts should be in the catalog.
- The smart contract proposals are **uploaded to Arweave** and members **vote on the Transaction Id** of the content.
- Governance is with **Rank points** and **manual code reviews**.
- **10 approval points** are needed to pass a proposal.
- Users need to apply for **rank**, it **represents vote weight**.
- Rank 1 are addresses with accepted rank proposals, they can propose new smart contracts
- An address that submits 5 smart contracts is elevated to rank 2.
- After submitting 20 smart contrats, the vote weight is elevated to 3.
- The stake grows with the rank because accepted smart contracts can be used to claim rewards!
- Winning proposals are deployable in Ricardian Fabric from the catalog.
- Allows developers to **work for the DAO**.
- Allows **punishing malicious proposals**.
- **Uses a ricardian contract** to define the conditions to pass the proposal review.

#### DaoStaking

- **Staking is for sybil resistance**.
- **3000 Ric must be staked** before contributing to the CatalogDao.
- Malicious users can loose their stake.
- Proposals and Voting with the catalogDao increase the stake lock up time.
  So it's not possible to submit a malicious proposal and unstake fast, to avoid penalty.
- Pays **3000 -10000 Ric rewards** to successful contributors!
- 50% of the reward is payed out and 50% goes on the stake.
- **3000 Ric** for **smart contract code**.
- **6000 Ric** for a **smart contract code with a front end**.
- **6000 Ric** for a **smart contract code with fees sent to the FeeDao**
- **10000 Ric** for a **smart contract code with both front end and fees sent to the FeeDao**.
- Contributors can retire and **unstake to claim the accumulated stake rewards**.Their rank will go to 0 and they need to apply again for rank to restart proposing contracts.

#### ArweavePS

- A 10% fee in AR is taken while somebody is uploading to the permaweb. It's distributed to addresses that register for profit sharing using the smart contract on Harmony.
- **Must be staking to get Arweave rewards** for sybil resistance.

#### Ric

- The ERC20 token of **Ric**ardian Fab**ric**.

- Total supply of **100.000.000 Ric** tokens are minted on deployment.

- **No more tokens will be created.**

- **Membership** token that is used for Governance, **Rewards** and **for fee distribution**.

#### FeeDao

- **Contributors to the catalog are bound by a Ricardian contract to transfer any fees they collect to this smart contract.**

- The FeeDao allows **proposing and voting on ERC20 contract addresses** that can be used by the apps in the catalog.

- Ric holders can **withdraw the accumulated fees as profit**, in exchange for locking up the used Ric tokens in the RicVault.

- **Only fees supported by this contract**, can be used to pass reviews in the CatalogDao.

#### RicSale

- Users can **join the community** by buying Ric and can **become contributors** to the catalog or later **take out FeeDao rewards**.
- Tokens are sold at a fixed price, see the token allocation.

#### RicVault

- Useful for **locking up Ric** for a certain amount of blocks.
- **Used by the deployer to give insurance against dumping**.
- The **FeeDao locks up Ric** after a reward is claimed.
- Ric is **released after the required block number**.

### Build

    npx hardhat commpile

### Tests

    npx hardhat test

### Deploy

    npx hardhat node

    npx hardhat run --network localhost scripts/deploy.ts
