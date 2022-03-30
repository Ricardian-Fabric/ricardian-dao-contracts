    	Missing function Variable not found: requiredBalance (context FeeDao)
    	Missing function Variable not found: EMPTYSTRING (context TrailsRegistry)

    	Contract locking ether found:

    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#contracts-that-lock-ether

    	Reentrancy in CatalogDao.ban(address) (contracts/CatalogDao.sol#370-374):

    	Reentrancy in DaoStaking.claimReward(uint256) (contracts/DaoStaking.sol#184-220):

    	Reentrancy in DaoStaking.depositRewards(uint256) (contracts/DaoStaking.sol#174-182):

    	Reentrancy in RicVault.lockFor(address,uint256,uint256) (contracts/RicVault.sol#64-86):

    	Reentrancy in RicVault.lockFunds(uint256,uint256) (contracts/RicVault.sol#42-62):

    	Reentrancy in RicVault.release(uint256) (contracts/RicVault.sol#88-108):

    	Reentrancy in DaoStaking.stake() (contracts/DaoStaking.sol#110-130):

    	Reentrancy in DaoStaking.unStake() (contracts/DaoStaking.sol#136-151):

    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-1

    	DaoStaking.setStakingBlocks(uint256) (contracts/DaoStaking.sol#106-108) should emit an event for:

    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#missing-events-arithmetic

    	Reentrancy in RicSale.buyTokens() (contracts/RicSale.sol#113-138):

    	/ERC20/utils/SafeERC20.sol#93)

    	Reentrancy in DaoStaking.claimReward(uint256) (contracts/DaoStaking.sol#184-220):

    	Reentrancy in CatalogDao.closeRankProposal(uint256) (contracts/CatalogDao.sol#97-101):

    	Reentrancy in CatalogDao.closeRemovalProposal(uint256) (contracts/CatalogDao.sol#331-338):

    	Reentrancy in CatalogDao.closeSmartContractProposal(uint256) (contracts/CatalogDao.sol#265-272):

    	Reentrancy in DaoStaking.depositRewards(uint256) (contracts/DaoStaking.sol#174-182):

    	Reentrancy in RicVault.lockFor(address,uint256,uint256) (contracts/RicVault.sol#64-86):

    	Reentrancy in RicVault.lockFunds(uint256,uint256) (contracts/RicVault.sol#42-62):

    	Reentrancy in DaoStaking.penalize(address) (contracts/DaoStaking.sol#161-172):

    	Reentrancy in CatalogDao.proposeContractRemoval(string,uint256,bool) (contracts/CatalogDao.sol#293-311):

    	Reentrancy in CatalogDao.proposeNewRank(string) (contracts/CatalogDao.sol#53-61):

    	Reentrancy in CatalogDao.proposeNewSmartContract(string,bool,bool,bool,uint256) (contracts/CatalogDao.sol#216-233):

    	Reentrancy in RicVault.release(uint256) (contracts/RicVault.sol#88-108):

    	Reentrancy in DaoStaking.stake() (contracts/DaoStaking.sol#110-130):

    	Reentrancy in DaoStaking.unStake() (contracts/DaoStaking.sol#136-151):

    	Reentrancy in CatalogDao.voteOnNewRank(uint256,bool) (contracts/CatalogDao.sol#87-95):

    	Reentrancy in CatalogDao.voteOnNewSmartContract(uint256,bool,bool) (contracts/CatalogDao.sol#255-263):

    	Reentrancy in CatalogDao.voteOnRemoval(uint256,bool) (contracts/CatalogDao.sol#321-329):

    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3

    	Address.isContract(address) (node_modules/@openzeppelin/contracts/utils/Address.sol#27-37) uses assembly

    	Address.verifyCallResult(bool,bytes,string) (node_modules/@openzeppelin/contracts/utils/Address.sol#196-216) uses assembly

    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage

    	Different versions of Solidity is used:

    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#different-pragma-directives-are-used

    	FeeDao.hashBalance(address) (contracts/FeeDao.sol#362-364) is never used and should be removed
    	FeeDao.hashTokenProposal(TokenProposal,address) (contracts/FeeDao.sol#160-175) is never used and should be removed
    	FeeDao.tokenHashWithAddress(Token) (contracts/FeeDao.sol#249-258) is never used and should be removed
    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code

    	Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/access/Ownable.sol#4) allows old versions
    	Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol#4) allows old versions
    	Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#4) allows old versions
    	Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#4) allows old versions
    	Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#4) allows old versions
    	Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#4) allows old versions
    	Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/utils/Address.sol#4) allows old versions
    	Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/utils/Context.sol#4) allows old versions
    	Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/utils/math/Math.sol#4) allows old versions
    	Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol#4) allows old versions
    	Pragma version>=0.4.22<0.9.0 (node_modules/@ricardianfabric/simpleterms/contracts/SimpleTerms.sol#2) is too complex
    	Pragma version^0.8.0 (contracts/ArweavePS.sol#2) allows old versions
    	Pragma version^0.8.0 (contracts/CatalogDao.sol#2) allows old versions
    	Pragma version^0.8.0 (contracts/DaoStaking.sol#2) allows old versions
    	Pragma version^0.8.0 (contracts/FeeDao.sol#2) allows old versions
    	Pragma version^0.8.0 (contracts/Ric.sol#2) allows old versions
    	Pragma version^0.8.0 (contracts/RicSale.sol#2) allows old versions
    	Pragma version^0.8.0 (contracts/RicVault.sol#2) allows old versions
    	Pragma version^0.8.0 (contracts/libraries/CatalogDaoLib.sol#2) allows old versions
    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-versions-of-solidity

    	Pragma version^0.8.0 (contracts/Trails.sol#2) allows old versions
    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-versions-of-solidity

    	Low level call in Address.sendValue(address,uint256) (node_modules/@openzeppelin/contracts/utils/Address.sol#55-60):

    	Low level call in Address.functionCallWithValue(address,bytes,uint256,string) (node_modules/@openzeppelin/contracts/utils/Address.sol#123-134):

    	Low level call in Address.functionStaticCall(address,bytes,string) (node_modules/@openzeppelin/contracts/utils/Address.sol#152-161):

    	Low level call in Address.functionDelegateCall(address,bytes,string) (node_modules/@openzeppelin/contracts/utils/Address.sol#179-188):

    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls

    	Parameter SimpleTerms.acceptedTerms(address)._address (node_modules/@ricardianfabric/simpleterms/contracts/SimpleTerms.sol#61) is not in mixedCase
    	Parameter ArweavePS.setStakingLib(DaoStaking).\_staking (contracts/ArweavePS.sol#24) is not in mixedCase
    	Parameter ArweavePS.setPS(string).\_to (contracts/ArweavePS.sol#28) is not in mixedCase
    	Parameter ArweavePS.stoppedStaking(address).\_address (contracts/ArweavePS.sol#48) is not in mixedCase
    	Parameter ArweavePS.getPS(address).\_address (contracts/ArweavePS.sol#73) is not in mixedCase
    	Parameter CatalogDao.proposeNewRank(string).\_repository (contracts/CatalogDao.sol#53) is not in mixedCase
    	Parameter CatalogDao.getRank(address).\_address (contracts/CatalogDao.sol#63) is not in mixedCase
    	Parameter CatalogDao.votedAlreadyOnRank(uint256,address).\_voter (contracts/CatalogDao.sol#79) is not in mixedCase
    	Parameter CatalogDao.proposeNewSmartContract(string,bool,bool,bool,uint256).\_arweaveTxId (contracts/CatalogDao.sol#217) is not in mixedCase
    	Parameter CatalogDao.proposeNewSmartContract(string,bool,bool,bool,uint256).\_hasFrontEnd (contracts/CatalogDao.sol#218) is not in mixedCase
    	Parameter CatalogDao.proposeNewSmartContract(string,bool,bool,bool,uint256).\_hasFees (contracts/CatalogDao.sol#219) is not in mixedCase
    	Parameter CatalogDao.votedAlreadyOnSmartContract(uint256,address).\_voter (contracts/CatalogDao.sol#247) is not in mixedCase
    	Parameter CatalogDao.proposeContractRemoval(string,uint256,bool).\_discussionUrl (contracts/CatalogDao.sol#294) is not in mixedCase
    	Parameter CatalogDao.proposeContractRemoval(string,uint256,bool).\_acceptedSCIndex (contracts/CatalogDao.sol#295) is not in mixedCase
    	Parameter CatalogDao.votedAlreadyOnRemoval(uint256,address).\_voter (contracts/CatalogDao.sol#313) is not in mixedCase
    	Parameter CatalogDao.ban(address).\_address (contracts/CatalogDao.sol#370) is not in mixedCase
    	Parameter CatalogDao.retire(address).\_address_ (contracts/CatalogDao.sol#376) is not in mixedCase
    	Parameter DaoStaking.getStakeDateFor(address)._address_ (contracts/DaoStaking.sol#90) is not in mixedCase
    	Parameter DaoStaking.setCatalogDao(CatalogDao)._address (contracts/DaoStaking.sol#102) is not in mixedCase
    	Parameter DaoStaking.isStaking(address).\_address (contracts/DaoStaking.sol#132) is not in mixedCase
    	Parameter DaoStaking.getStaker(address).\_address_ (contracts/DaoStaking.sol#238) is not in mixedCase
    	Parameter FeeDao.setRicVault(RicVault)._ricVault_ (contracts/FeeDao.sol#113) is not in mixedCase
    	Parameter FeeDao.proposeNewToken(IERC20,string,string)._token (contracts/FeeDao.sol#131) is not in mixedCase
    	Parameter RicSale.purchasedAlready(address).\_address (contracts/RicSale.sol#103) is not in mixedCase
    	Parameter RicSale.getCurrentRate(uint256).\_tokensSold_ (contracts/RicSale.sol#221) is not in mixedCase
    	Parameter RicVault.setFeeDao(FeeDao)._feedao_ (contracts/RicVault.sol#37) is not in mixedCase
    	Parameter RicVault.lockFunds(uint256,uint256)._period_ (contracts/RicVault.sol#42) is not in mixedCase
    	Parameter RicVault.lockFunds(uint256,uint256)._amount_ (contracts/RicVault.sol#42) is not in mixedCase
    	Parameter RicVault.lockFor(address,uint256,uint256)._owner_ (contracts/RicVault.sol#65) is not in mixedCase
    	Parameter RicVault.lockFor(address,uint256,uint256)._period_ (contracts/RicVault.sol#66) is not in mixedCase
    	Parameter RicVault.lockFor(address,uint256,uint256)._amount_ (contracts/RicVault.sol#67) is not in mixedCase
    	Parameter RicVault.release(uint256)._index_ (contracts/RicVault.sol#88) is not in mixedCase
    	Parameter RicVault.getLockIndex(address)._for_ (contracts/RicVault.sol#114) is not in mixedCase
    	Parameter RicVault.getVaultContent(address,uint256)._for_ (contracts/RicVault.sol#118) is not in mixedCase
    	Parameter RicVault.getVaultContent(address,uint256)._index_ (contracts/RicVault.sol#118) is not in mixedCase
    	Parameter CatalogDaoLib.proposeNewRank(CatalogState,string).\_repository (contracts/libraries/CatalogDaoLib.sol#88) is not in mixedCase
    	Parameter CatalogDaoLib.rankProposalHash(RankProposal,address).\_proposal (contracts/libraries/CatalogDaoLib.sol#115) is not in mixedCase
    	Parameter CatalogDaoLib.rankProposalHash(RankProposal,address).\_voter (contracts/libraries/CatalogDaoLib.sol#115) is not in mixedCase
    	Parameter CatalogDaoLib.votedAlreadyOnRank(CatalogState,uint256,address).\_voter (contracts/libraries/CatalogDaoLib.sol#135) is not in mixedCase
    	Parameter CatalogDaoLib.proposeNewSmartContract(CatalogState,string,bool,bool,bool,uint256).\_arweaveTxId (contracts/libraries/CatalogDaoLib.sol#214) is not in mixedCase
    	Parameter CatalogDaoLib.proposeNewSmartContract(CatalogState,string,bool,bool,bool,uint256).\_hasFrontEnd (contracts/libraries/CatalogDaoLib.sol#215) is not in mixedCase
    	Parameter CatalogDaoLib.proposeNewSmartContract(CatalogState,string,bool,bool,bool,uint256).\_hasFees (contracts/libraries/CatalogDaoLib.sol#216) is not in mixedCase
    	Parameter CatalogDaoLib.proposeNewSmartContract(CatalogState,string,bool,bool,bool,uint256).\_isUpdate (contracts/libraries/CatalogDaoLib.sol#217) is not in mixedCase
    	Parameter CatalogDaoLib.proposeNewSmartContract(CatalogState,string,bool,bool,bool,uint256).\_updateOf (contracts/libraries/CatalogDaoLib.sol#218) is not in mixedCase
    	Parameter CatalogDaoLib.smartContractProposalHash(SmartContractProposal,address).\_proposal (contracts/libraries/CatalogDaoLib.sol#265) is not in mixedCase
    	Parameter CatalogDaoLib.smartContractProposalHash(SmartContractProposal,address).\_voter (contracts/libraries/CatalogDaoLib.sol#266) is not in mixedCase
    	Parameter CatalogDaoLib.votedAlreadyOnSC(CatalogState,uint256,address).\_sCIndex (contracts/libraries/CatalogDaoLib.sol#285) is not in mixedCase
    	Parameter CatalogDaoLib.votedAlreadyOnSC(CatalogState,uint256,address).\_voter (contracts/libraries/CatalogDaoLib.sol#286) is not in mixedCase
    	Parameter CatalogDaoLib.proposeContractRemoval(CatalogState,string,uint256,bool).\_discussionUrl (contracts/libraries/CatalogDaoLib.sol#451) is not in mixedCase
    	Parameter CatalogDaoLib.proposeContractRemoval(CatalogState,string,uint256,bool).\_acceptedSCIndex (contracts/libraries/CatalogDaoLib.sol#452) is not in mixedCase
    	Parameter CatalogDaoLib.proposeContractRemoval(CatalogState,string,uint256,bool).\_malicious (contracts/libraries/CatalogDaoLib.sol#453) is not in mixedCase
    	Parameter CatalogDaoLib.removalProposalHash(RemovalProposal,address).\_proposal (contracts/libraries/CatalogDaoLib.sol#495) is not in mixedCase
    	Parameter CatalogDaoLib.removalProposalHash(RemovalProposal,address).\_voter (contracts/libraries/CatalogDaoLib.sol#496) is not in mixedCase
    	Parameter CatalogDaoLib.votedAlreadyOnRemoval(CatalogState,uint256,address).\_voter (contracts/libraries/CatalogDaoLib.sol#514) is not in mixedCase
    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions

    	Parameter TrailsRegistry.newTrail(string,uint8)._trailId_ (contracts/Trails.sol#20) is not in mixedCase
    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions

    	RicSale.buyTokens() (contracts/RicSale.sol#113-138) uses literals with too many digits:

    	RicSale.buyTokens() (contracts/RicSale.sol#113-138) uses literals with too many digits:

    	RicSale.getCurrentRate(uint256) (contracts/RicSale.sol#221-249) uses literals with too many digits:

    	RicSale.getCurrentRate(uint256) (contracts/RicSale.sol#221-249) uses literals with too many digits:

    	RicSale.getCurrentRate(uint256) (contracts/RicSale.sol#221-249) uses literals with too many digits:

    	RicSale.getCurrentRate(uint256) (contracts/RicSale.sol#221-249) uses literals with too many digits:

    	RicSale.getCurrentRate(uint256) (contracts/RicSale.sol#221-249) uses literals with too many digits:

    	RicSale.getCurrentRate(uint256) (contracts/RicSale.sol#221-249) uses literals with too many digits:

    	RicSale.getCurrentRate(uint256) (contracts/RicSale.sol#221-249) uses literals with too many digits:

    	RicSale.getCurrentRate(uint256) (contracts/RicSale.sol#221-249) uses literals with too many digits:

    	RicSale.getCurrentRate(uint256) (contracts/RicSale.sol#221-249) uses literals with too many digits:

    	RicSale.getCurrentRate(uint256) (contracts/RicSale.sol#221-249) uses literals with too many digits:

    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#too-many-digits

    	FeeDao (contracts/FeeDao.sol#41-365) does not implement functions:

    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unimplemented-functions

    	TrailsRegistry (contracts/Trails.sol#11-85) does not implement functions:

    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unimplemented-functions

    	FeeDao.proposals (contracts/FeeDao.sol#49) is never used in FeeDao (contracts/FeeDao.sol#41-365)
    	FeeDao.voted (contracts/FeeDao.sol#50) is never used in FeeDao (contracts/FeeDao.sol#41-365)
    	FeeDao.myProposals (contracts/FeeDao.sol#52) is never used in FeeDao (contracts/FeeDao.sol#41-365)
    	FeeDao.hasPendingProposal (contracts/FeeDao.sol#53) is never used in FeeDao (contracts/FeeDao.sol#41-365)
    	FeeDao.tokens (contracts/FeeDao.sol#55) is never used in FeeDao (contracts/FeeDao.sol#41-365)
    	FeeDao.addressAdded (contracts/FeeDao.sol#58) is never used in FeeDao (contracts/FeeDao.sol#41-365)
    	FeeDao.lock (contracts/FeeDao.sol#66) is never used in FeeDao (contracts/FeeDao.sol#41-365)
    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-state-variable

    	TrailsRegistry.trails (contracts/Trails.sol#12) is never used in TrailsRegistry (contracts/Trails.sol#11-85)
    	TrailsRegistry.content (contracts/Trails.sol#13) is never used in TrailsRegistry (contracts/Trails.sol#11-85)
    	TrailsRegistry.blacklist (contracts/Trails.sol#14) is never used in TrailsRegistry (contracts/Trails.sol#11-85)
    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-state-variable

    	FeeDao.lock (contracts/FeeDao.sol#66) should be constant
    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#state-variables-that-could-be-declared-constant

    	renounceOwnership() should be declared external:

    	transferOwnership(address) should be declared external:

    	name() should be declared external:
    	- ERC20.name() (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#62-64)
    	symbol() should be declared external: - ERC20.symbol() (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#70-72)
    	decimals() should be declared external: - ERC20.decimals() (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#87-89)
    	totalSupply() should be declared external: - ERC20.totalSupply() (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#94-96)
    	balanceOf(address) should be declared external: - ERC20.balanceOf(address) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#101-103)
    	transfer(address,uint256) should be declared external: - ERC20.transfer(address,uint256) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#113-116)
    	allowance(address,address) should be declared external: - ERC20.allowance(address,address) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#121-123)
    	approve(address,uint256) should be declared external: - ERC20.approve(address,uint256) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#132-135)
    	transferFrom(address,address,uint256) should be declared external: - ERC20.transferFrom(address,address,uint256) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#150-164)
    	increaseAllowance(address,uint256) should be declared external: - ERC20.increaseAllowance(address,uint256) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#178-181)
    	decreaseAllowance(address,uint256) should be declared external: - ERC20.decreaseAllowance(address,uint256) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#197-205)
    	getRank(address) should be declared external: - CatalogDao.getRank(address) (contracts/CatalogDao.sol#63-65)
    	votedAlready(uint256,address) should be declared external: - FeeDao.votedAlready(uint256,address) (contracts/FeeDao.sol#178-185)
    	calculateWithdraw(IERC20,uint256) should be declared external: - FeeDao.calculateWithdraw(IERC20,uint256) (contracts/FeeDao.sol#272-284)
    	calculateETHWithdraw(uint256) should be declared external: - FeeDao.calculateETHWithdraw(uint256) (contracts/FeeDao.sol#286-298)
    	wallet() should be declared external: - RicSale.wallet() (contracts/RicSale.sol#92-94)
    	weiRaised() should be declared external: - RicSale.weiRaised() (contracts/RicSale.sol#99-101)
    	purchasedAlready(address) should be declared external: - RicSale.purchasedAlready(address) (contracts/RicSale.sol#103-106)
    	remainingTokens() should be declared external: - RicSale.remainingTokens() (contracts/RicSale.sol#197-203)
    	votedAlreadyOnRank(CatalogState,uint256,address) should be declared external: - CatalogDaoLib.votedAlreadyOnRank(CatalogState,uint256,address) (contracts/libraries/CatalogDaoLib.sol#132-142)
    	votedAlreadyOnSC(CatalogState,uint256,address) should be declared external: - CatalogDaoLib.votedAlreadyOnSC(CatalogState,uint256,address) (contracts/libraries/CatalogDaoLib.sol#283-293)
    	Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#public-function-that-could-be-declared-external
    	. analyzed (20 contracts with 77 detectors), 161 result(s) found
