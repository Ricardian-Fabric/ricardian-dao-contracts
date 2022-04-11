# Smart Contract Security Assessment

## Ricardian Fabric

**Introduction**
This report was prepared for the Ricardian Fabric team.

The audited code is available at https://github.com/Ricardian-Fabric/ricardian-fabric-dao-contracts and was audited after commit [54008a9](https://github.com/Ricardian-Fabric/ricardian-fabric-dao-contracts/tree/54008a95e791609e3c7155680fdb58219d1acb4f). Users must check if they are interacting with the same contract as was audited.

The following contracts were audited:

- ArweavePs.sol
- CatalogDao.sol
- CatalogDaoLib.sol
- DaoStaking.sol
- FeeDao.sol
- Ric.sol
- RicSale.sol
- RicVault.sol
- Trails.sol

---

**Procedure**

We performed the audit according to the following procedures:

- Automated analysis by scanning the projects smart contract with publicly available automated Solidity analysis tools
- Manual verification of all the issue found by the tools.
- Manual Smart contract logic check
- Manually analyse for security vulnerabilities

---

**Vulnerabilities checked for**:

- [Unencrypted Private Data On-Chain](https://swcregistry.io/docs/SWC-136) PASSED
- [Code With No Effects](https://swcregistry.io/docs/SWC-135) PASSED
- [Message call with hardcoded gas amount](https://swcregistry.io/docs/SWC-134) PASSED
- [Typological Error](https://swcregistry.io/docs/SWC-129) PASSED
- [DoS With Block Gas Limit](https://swcregistry.io/docs/SWC-128) PASSED
- [Presence of unused variables](https://swcregistry.io/docs/SWC-131) NOT PASSED
- [Incorrect Inheritance Order](https://swcregistry.io/docs/SWC-125) PASSED
- [Requirement Violation](https://swcregistry.io/docs/SWC-123) PASSED
- [Weak Sources of Randomness](https://swcregistry.io/docs/SWC-120) PASSED
- [Shadowing State Variables](https://swcregistry.io/docs/SWC-119) PASSED
- [Incorrect Constructor Name](https://swcregistry.io/docs/SWC-118) PASSED
- [Block values as a proxy for time](https://swcregistry.io/docs/SWC-116) PASSED
- [Authorization through tx.origin](https://swcregistry.io/docs/SWC-115) PASSED
- [DoS with Failed Call](https://swcregistry.io/docs/SWC-113) PASSED
- [Delegatecall to Untrusted Callee](https://swcregistry.io/docs/SWC-112) PASSED
- [Use of Deprecated Solidity Functions](https://swcregistry.io/docs/SWC-111) PASSED
- [Assert Violation](https://swcregistry.io/docs/SWC-110) PASSED
- [State Variable Defauld Visibility](https://swcregistry.io/docs/SWC-108) PASSED
- [Reentrancy](https://swcregistry.io/docs/SWC-107) PASSED
- [Unprotected SELFDESCTRUCT Instruction](https://swcregistry.io/docs/SWC-106) PASSED
- [Unprotected ETHER Withdrawal](https://swcregistry.io/docs/SWC-105) PASSED
- [Unchecked Call Return Value](https://swcregistry.io/docs/SWC-104) PASSED
- [Floating Pragma](https://swcregistry.io/docs/SWC-103) PASSED
- [Outdated Compiler Version](https://swcregistry.io/docs/SWC-102) PASSED
- [Integer Overflow and Underflow](https://swcregistry.io/docs/SWC-101) PASSED
- [Function Default Visibility](https://swcregistry.io/docs/SWC-100) PASSED

#### Classification of issue severify

| Severity | Details                                                                                                                                                                                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High     | High severity issues can cause a significant or full loss of funds, change of contract ownership, major interference with contract logic. Such issues require immediate attention.                                                                                           |
| Medium   | Medium severity issues do not pose an immediate risk, but can be detrimental to the client's reputation if exploited. Medium severity issues may lead to a contract failure and can be fixed by modifying the contract state or redeployment. Such issues require attention. |
| Low      | Low severity issues do not cause significant destruction to the contract's functionality. Such issues are recommended to be taken into consideration.                                                                                                                        |

---

### Issues

###### HIGH Severity

1. **Contract locks ether without releasing it**

   Status: RESOLVED

The automated tools have detected a missing withdraw function from the FeeDao contract, manual inspection shows the function exists

     function withdrawETH(uint256 amount) external

Recommendation: Adequate naming will help the static analysis tool detect these errors better.

### Slither Output

    Contract locking ether found:
    	Contract FeeDao (contracts/FeeDao.sol#41-365) has payable functions:
    	- FeeDao.receive() (contracts/FeeDao.sol#315-319)
    	But does not have a function to withdraw the ether
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#contracts-that-lock-ether

    Reentrancy in CatalogDao.ban(address) (contracts/CatalogDao.sol#370-374):
    	External calls:
    	- daoStaking.penalize(_address) (contracts/CatalogDao.sol#372)
    	State variables written after the call(s):
    	- state.rank[_address] = 0 (contracts/CatalogDao.sol#373)
    Reentrancy in DaoStaking.claimReward(uint256) (contracts/DaoStaking.sol#184-220):
    	External calls:
    	- _token.safeTransfer(msg.sender,rewardHalf) (contracts/DaoStaking.sol#216)
    	State variables written after the call(s):
    	- lock = 0 (contracts/DaoStaking.sol#219)
    Reentrancy in DaoStaking.depositRewards(uint256) (contracts/DaoStaking.sol#174-182):
    	External calls:
    	- _token.safeTransferFrom(msg.sender,address(this),amount) (contracts/DaoStaking.sol#179)
    	State variables written after the call(s):
    	- lock = 0 (contracts/DaoStaking.sol#181)
    Reentrancy in RicVault.lockFor(address,uint256,uint256) (contracts/RicVault.sol#64-86):
    	External calls:
    	- ric.safeTransferFrom(_owner_,address(this),_amount_) (contracts/RicVault.sol#82)
    	State variables written after the call(s):
    	- lock = 0 (contracts/RicVault.sol#83)
    Reentrancy in RicVault.lockFunds(uint256,uint256) (contracts/RicVault.sol#42-62):
    	External calls:
    	- ric.safeTransferFrom(msg.sender,address(this),_amount_) (contracts/RicVault.sol#58)
    	State variables written after the call(s):
    	- lock = 0 (contracts/RicVault.sol#60)
    Reentrancy in RicVault.release(uint256) (contracts/RicVault.sol#88-108):
    	External calls:
    	- ric.safeTransfer(msg.sender,inVault[msg.sender][_index_].lockedAmount) (contracts/RicVault.sol#101)
    	State variables written after the call(s):
    	- lock = 0 (contracts/RicVault.sol#102)
    Reentrancy in DaoStaking.stake() (contracts/DaoStaking.sol#110-130):
    	External calls:
    	- _token.safeTransferFrom(msg.sender,address(this),STAKINGREQUIREMENT) (contracts/DaoStaking.sol#127)
    	State variables written after the call(s):
    	- lock = 0 (contracts/DaoStaking.sol#129)
    Reentrancy in DaoStaking.unStake() (contracts/DaoStaking.sol#136-151):
    	External calls:
    	- arweavePS.stoppedStaking(msg.sender) (contracts/DaoStaking.sol#146)
    	- catalogDao.retire(msg.sender) (contracts/DaoStaking.sol#147)
    	- _token.safeTransfer(msg.sender,stakers[msg.sender].stakeAmount) (contracts/DaoStaking.sol#148)
    	State variables written after the call(s):
    	- lock = 0 (contracts/DaoStaking.sol#150)
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-1

    DaoStaking.setStakingBlocks(uint256) (contracts/DaoStaking.sol#106-108) should emit an event for:
    	- stakingBlocks = to (contracts/DaoStaking.sol#107)
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#missing-events-arithmetic

    Reentrancy in RicSale.buyTokens() (contracts/RicSale.sol#104-121):
    	External calls:
    	- _processPurchase(msg.sender,tokens) (contracts/RicSale.sol#116)
    		- _token.safeTransferFrom(_wallet,beneficiary,tokenAmount) (contracts/RicSale.sol#159)
    		- returndata = address(token).functionCall(data,SafeERC20: low-level call failed) (node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#93)
    		- (success,returndata) = target.call{value: value}(data) (node_modules/@openzeppelin/contracts/utils/Address.sol#132)
    	External calls sending eth:
    	- _processPurchase(msg.sender,tokens) (contracts/RicSale.sol#116)
    		- (success,returndata) = target.call{value: value}(data) (node_modules/@openzeppelin/contracts/utils/Address.sol#132)
    	Event emitted after the call(s):
    	- TokensPurchased(_msgSender(),msg.sender,weiAmount,tokens) (contracts/RicSale.sol#117)
    Reentrancy in DaoStaking.claimReward(uint256) (contracts/DaoStaking.sol#184-220):
    	External calls:
    	- _token.safeTransfer(msg.sender,rewardHalf) (contracts/DaoStaking.sol#216)
    	Event emitted after the call(s):
    	- ClaimReward(msg.sender,forProposal,availableReward) (contracts/DaoStaking.sol#218)
    Reentrancy in CatalogDao.closeRankProposal(uint256) (contracts/CatalogDao.sol#97-101):
    	External calls:
    	- daoStaking.extendStakeTime(msg.sender) (contracts/CatalogDao.sol#98)
    	Event emitted after the call(s):
    	- ClosingRankVote(msg.sender,rankIndex) (contracts/CatalogDao.sol#99)
    Reentrancy in CatalogDao.closeRemovalProposal(uint256) (contracts/CatalogDao.sol#331-338):
    	External calls:
    	- daoStaking.extendStakeTime(msg.sender) (contracts/CatalogDao.sol#335)
    	Event emitted after the call(s):
    	- CloseRemovalProposal(msg.sender,removalIndex) (contracts/CatalogDao.sol#336)
    Reentrancy in CatalogDao.closeSmartContractProposal(uint256) (contracts/CatalogDao.sol#265-272):
    	External calls:
    	- daoStaking.extendStakeTime(msg.sender) (contracts/CatalogDao.sol#269)
    	Event emitted after the call(s):
    	- CloseSmartContractProposal(msg.sender,sCIndex) (contracts/CatalogDao.sol#270)
    Reentrancy in DaoStaking.depositRewards(uint256) (contracts/DaoStaking.sol#174-182):
    	External calls:
    	- _token.safeTransferFrom(msg.sender,address(this),amount) (contracts/DaoStaking.sol#179)
    	Event emitted after the call(s):
    	- RewardDeposit(msg.sender,amount,availableReward) (contracts/DaoStaking.sol#180)
    Reentrancy in RicVault.lockFor(address,uint256,uint256) (contracts/RicVault.sol#64-86):
    	External calls:
    	- ric.safeTransferFrom(_owner_,address(this),_amount_) (contracts/RicVault.sol#82)
    	Event emitted after the call(s):
    	- LockedFunds(_owner_,_period_,_amount_) (contracts/RicVault.sol#84)
    Reentrancy in RicVault.lockFunds(uint256,uint256) (contracts/RicVault.sol#42-62):
    	External calls:
    	- ric.safeTransferFrom(msg.sender,address(this),_amount_) (contracts/RicVault.sol#58)
    	Event emitted after the call(s):
    	- LockedFunds(msg.sender,_period_,_amount_) (contracts/RicVault.sol#59)
    Reentrancy in DaoStaking.penalize(address) (contracts/DaoStaking.sol#161-172):
    	External calls:
    	- arweavePS.stoppedStaking(address_) (contracts/DaoStaking.sol#169)
    	Event emitted after the call(s):
    	- Penalize(address_) (contracts/DaoStaking.sol#170)
    	- Unstake(msg.sender,totalStaked) (contracts/DaoStaking.sol#171)
    Reentrancy in CatalogDao.proposeContractRemoval(string,uint256,bool) (contracts/CatalogDao.sol#293-311):
    	External calls:
    	- daoStaking.extendStakeTime(msg.sender) (contracts/CatalogDao.sol#298)
    	Event emitted after the call(s):
    	- NewRemovalProposal(msg.sender,_discussionUrl,_acceptedSCIndex,malicious) (contracts/CatalogDao.sol#299-304)
    Reentrancy in CatalogDao.proposeNewRank(string) (contracts/CatalogDao.sol#53-61):
    	External calls:
    	- daoStaking.extendStakeTime(msg.sender) (contracts/CatalogDao.sol#58)
    	Event emitted after the call(s):
    	- NewRankProposal(msg.sender,_repository) (contracts/CatalogDao.sol#59)
    Reentrancy in CatalogDao.proposeNewSmartContract(string,bool,bool,bool,uint256) (contracts/CatalogDao.sol#216-233):
    	External calls:
    	- daoStaking.extendStakeTime(msg.sender) (contracts/CatalogDao.sol#223)
    	Event emitted after the call(s):
    	- NewSmartContractProposal(msg.sender,_arweaveTxId) (contracts/CatalogDao.sol#224)
    Reentrancy in RicVault.release(uint256) (contracts/RicVault.sol#88-108):
    	External calls:
    	- ric.safeTransfer(msg.sender,inVault[msg.sender][_index_].lockedAmount) (contracts/RicVault.sol#101)
    	Event emitted after the call(s):
    	- ReleasedFunds(msg.sender,inVault[msg.sender][_index_].lockedAmount) (contracts/RicVault.sol#103-106)
    Reentrancy in DaoStaking.stake() (contracts/DaoStaking.sol#110-130):
    	External calls:
    	- _token.safeTransferFrom(msg.sender,address(this),STAKINGREQUIREMENT) (contracts/DaoStaking.sol#127)
    	Event emitted after the call(s):
    	- Stake(msg.sender,totalStaked) (contracts/DaoStaking.sol#128)
    Reentrancy in DaoStaking.unStake() (contracts/DaoStaking.sol#136-151):
    	External calls:
    	- arweavePS.stoppedStaking(msg.sender) (contracts/DaoStaking.sol#146)
    	- catalogDao.retire(msg.sender) (contracts/DaoStaking.sol#147)
    	- _token.safeTransfer(msg.sender,stakers[msg.sender].stakeAmount) (contracts/DaoStaking.sol#148)
    	Event emitted after the call(s):
    	- Unstake(msg.sender,totalStaked) (contracts/DaoStaking.sol#149)
    Reentrancy in CatalogDao.voteOnNewRank(uint256,bool) (contracts/CatalogDao.sol#87-95):
    	External calls:
    	- daoStaking.extendStakeTime(msg.sender) (contracts/CatalogDao.sol#92)
    	Event emitted after the call(s):
    	- RankVote(msg.sender,rankIndex,accepted) (contracts/CatalogDao.sol#93)
    Reentrancy in CatalogDao.voteOnNewSmartContract(uint256,bool,bool) (contracts/CatalogDao.sol#255-263):
    	External calls:
    	- daoStaking.extendStakeTime(msg.sender) (contracts/CatalogDao.sol#260)
    	Event emitted after the call(s):
    	- VoteOnNewSmartContract(msg.sender,sCIndex,accepted) (contracts/CatalogDao.sol#261)
    Reentrancy in CatalogDao.voteOnRemoval(uint256,bool) (contracts/CatalogDao.sol#321-329):
    	External calls:
    	- daoStaking.extendStakeTime(msg.sender) (contracts/CatalogDao.sol#326)
    	Event emitted after the call(s):
    	- VoteOnRemoval(msg.sender,removalIndex,accepted) (contracts/CatalogDao.sol#327)
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3

    Address.isContract(address) (node_modules/@openzeppelin/contracts/utils/Address.sol#27-37) uses assembly
    	- INLINE ASM (node_modules/@openzeppelin/contracts/utils/Address.sol#33-35)
    Address.verifyCallResult(bool,bytes,string) (node_modules/@openzeppelin/contracts/utils/Address.sol#196-216) uses assembly
    	- INLINE ASM (node_modules/@openzeppelin/contracts/utils/Address.sol#208-211)
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage

    Different versions of Solidity is used:
    	- Version used: ['>=0.4.22<0.9.0', '^0.8.0']
    	- ^0.8.0 (node_modules/@openzeppelin/contracts/access/Ownable.sol#4)
    	- ^0.8.0 (node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol#4)
    	- ^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#4)
    	- ^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#4)
    	- ^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#4)
    	- ^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#4)
    	- ^0.8.0 (node_modules/@openzeppelin/contracts/utils/Address.sol#4)
    	- ^0.8.0 (node_modules/@openzeppelin/contracts/utils/Context.sol#4)
    	- ^0.8.0 (node_modules/@openzeppelin/contracts/utils/math/Math.sol#4)
    	- ^0.8.0 (node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol#4)
    	- >=0.4.22<0.9.0 (node_modules/@ricardianfabric/simpleterms/contracts/SimpleTerms.sol#2)
    	- ^0.8.0 (contracts/ArweavePS.sol#2)
    	- ^0.8.0 (contracts/CatalogDao.sol#2)
    	- ^0.8.0 (contracts/DaoStaking.sol#2)
    	- ^0.8.0 (contracts/FeeDao.sol#2)
    	- ^0.8.0 (contracts/Ric.sol#2)
    	- ^0.8.0 (contracts/RicSale.sol#2)
    	- ^0.8.0 (contracts/RicVault.sol#2)
    	- ^0.8.0 (contracts/libraries/CatalogDaoLib.sol#2)
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
    	- (success) = recipient.call{value: amount}() (node_modules/@openzeppelin/contracts/utils/Address.sol#58)
    Low level call in Address.functionCallWithValue(address,bytes,uint256,string) (node_modules/@openzeppelin/contracts/utils/Address.sol#123-134):
    	- (success,returndata) = target.call{value: value}(data) (node_modules/@openzeppelin/contracts/utils/Address.sol#132)
    Low level call in Address.functionStaticCall(address,bytes,string) (node_modules/@openzeppelin/contracts/utils/Address.sol#152-161):
    	- (success,returndata) = target.staticcall(data) (node_modules/@openzeppelin/contracts/utils/Address.sol#159)
    Low level call in Address.functionDelegateCall(address,bytes,string) (node_modules/@openzeppelin/contracts/utils/Address.sol#179-188):
    	- (success,returndata) = target.delegatecall(data) (node_modules/@openzeppelin/contracts/utils/Address.sol#186)
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls

    Parameter SimpleTerms.acceptedTerms(address)._address (node_modules/@ricardianfabric/simpleterms/contracts/SimpleTerms.sol#61) is not in mixedCase
    Parameter ArweavePS.setStakingLib(DaoStaking)._staking (contracts/ArweavePS.sol#24) is not in mixedCase
    Parameter ArweavePS.setPS(string)._to (contracts/ArweavePS.sol#28) is not in mixedCase
    Parameter ArweavePS.stoppedStaking(address)._address (contracts/ArweavePS.sol#48) is not in mixedCase
    Parameter ArweavePS.getPS(address)._address (contracts/ArweavePS.sol#73) is not in mixedCase
    Parameter CatalogDao.proposeNewRank(string)._repository (contracts/CatalogDao.sol#53) is not in mixedCase
    Parameter CatalogDao.getRank(address)._address (contracts/CatalogDao.sol#63) is not in mixedCase
    Parameter CatalogDao.votedAlreadyOnRank(uint256,address)._voter (contracts/CatalogDao.sol#79) is not in mixedCase
    Parameter CatalogDao.proposeNewSmartContract(string,bool,bool,bool,uint256)._arweaveTxId (contracts/CatalogDao.sol#217) is not in mixedCase
    Parameter CatalogDao.proposeNewSmartContract(string,bool,bool,bool,uint256)._hasFrontEnd (contracts/CatalogDao.sol#218) is not in mixedCase
    Parameter CatalogDao.proposeNewSmartContract(string,bool,bool,bool,uint256)._hasFees (contracts/CatalogDao.sol#219) is not in mixedCase
    Parameter CatalogDao.votedAlreadyOnSmartContract(uint256,address)._voter (contracts/CatalogDao.sol#247) is not in mixedCase
    Parameter CatalogDao.proposeContractRemoval(string,uint256,bool)._discussionUrl (contracts/CatalogDao.sol#294) is not in mixedCase
    Parameter CatalogDao.proposeContractRemoval(string,uint256,bool)._acceptedSCIndex (contracts/CatalogDao.sol#295) is not in mixedCase
    Parameter CatalogDao.votedAlreadyOnRemoval(uint256,address)._voter (contracts/CatalogDao.sol#313) is not in mixedCase
    Parameter CatalogDao.ban(address)._address (contracts/CatalogDao.sol#370) is not in mixedCase
    Parameter CatalogDao.retire(address)._address_ (contracts/CatalogDao.sol#376) is not in mixedCase
    Parameter DaoStaking.getStakeDateFor(address)._address_ (contracts/DaoStaking.sol#90) is not in mixedCase
    Parameter DaoStaking.setCatalogDao(CatalogDao)._address (contracts/DaoStaking.sol#102) is not in mixedCase
    Parameter DaoStaking.isStaking(address)._address (contracts/DaoStaking.sol#132) is not in mixedCase
    Parameter DaoStaking.getStaker(address)._address_ (contracts/DaoStaking.sol#238) is not in mixedCase
    Parameter FeeDao.setRicVault(RicVault)._ricVault_ (contracts/FeeDao.sol#113) is not in mixedCase
    Parameter FeeDao.proposeNewToken(IERC20,string,string)._token (contracts/FeeDao.sol#131) is not in mixedCase
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
    Parameter CatalogDaoLib.proposeNewRank(CatalogState,string)._repository (contracts/libraries/CatalogDaoLib.sol#88) is not in mixedCase
    Parameter CatalogDaoLib.rankProposalHash(RankProposal,address)._proposal (contracts/libraries/CatalogDaoLib.sol#115) is not in mixedCase
    Parameter CatalogDaoLib.rankProposalHash(RankProposal,address)._voter (contracts/libraries/CatalogDaoLib.sol#115) is not in mixedCase
    Parameter CatalogDaoLib.votedAlreadyOnRank(CatalogState,uint256,address)._voter (contracts/libraries/CatalogDaoLib.sol#135) is not in mixedCase
    Parameter CatalogDaoLib.proposeNewSmartContract(CatalogState,string,bool,bool,bool,uint256)._arweaveTxId (contracts/libraries/CatalogDaoLib.sol#214) is not in mixedCase
    Parameter CatalogDaoLib.proposeNewSmartContract(CatalogState,string,bool,bool,bool,uint256)._hasFrontEnd (contracts/libraries/CatalogDaoLib.sol#215) is not in mixedCase
    Parameter CatalogDaoLib.proposeNewSmartContract(CatalogState,string,bool,bool,bool,uint256)._hasFees (contracts/libraries/CatalogDaoLib.sol#216) is not in mixedCase
    Parameter CatalogDaoLib.proposeNewSmartContract(CatalogState,string,bool,bool,bool,uint256)._isUpdate (contracts/libraries/CatalogDaoLib.sol#217) is not in mixedCase
    Parameter CatalogDaoLib.proposeNewSmartContract(CatalogState,string,bool,bool,bool,uint256)._updateOf (contracts/libraries/CatalogDaoLib.sol#218) is not in mixedCase
    Parameter CatalogDaoLib.smartContractProposalHash(SmartContractProposal,address)._proposal (contracts/libraries/CatalogDaoLib.sol#265) is not in mixedCase
    Parameter CatalogDaoLib.smartContractProposalHash(SmartContractProposal,address)._voter (contracts/libraries/CatalogDaoLib.sol#266) is not in mixedCase
    Parameter CatalogDaoLib.votedAlreadyOnSC(CatalogState,uint256,address)._sCIndex (contracts/libraries/CatalogDaoLib.sol#285) is not in mixedCase
    Parameter CatalogDaoLib.votedAlreadyOnSC(CatalogState,uint256,address)._voter (contracts/libraries/CatalogDaoLib.sol#286) is not in mixedCase
    Parameter CatalogDaoLib.proposeContractRemoval(CatalogState,string,uint256,bool)._discussionUrl (contracts/libraries/CatalogDaoLib.sol#451) is not in mixedCase
    Parameter CatalogDaoLib.proposeContractRemoval(CatalogState,string,uint256,bool)._acceptedSCIndex (contracts/libraries/CatalogDaoLib.sol#452) is not in mixedCase
    Parameter CatalogDaoLib.proposeContractRemoval(CatalogState,string,uint256,bool)._malicious (contracts/libraries/CatalogDaoLib.sol#453) is not in mixedCase
    Parameter CatalogDaoLib.removalProposalHash(RemovalProposal,address)._proposal (contracts/libraries/CatalogDaoLib.sol#495) is not in mixedCase
    Parameter CatalogDaoLib.removalProposalHash(RemovalProposal,address)._voter (contracts/libraries/CatalogDaoLib.sol#496) is not in mixedCase
    Parameter CatalogDaoLib.votedAlreadyOnRemoval(CatalogState,uint256,address)._voter (contracts/libraries/CatalogDaoLib.sol#514) is not in mixedCase
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions

    Parameter TrailsRegistry.newTrail(string,uint8)._trailId_ (contracts/Trails.sol#20) is not in mixedCase
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions

    RicSale.buyTokens() (contracts/RicSale.sol#104-121) uses literals with too many digits:
    	- require(bool,string)(tokensSold <= 40000000e18,955) (contracts/RicSale.sol#105)
    RicSale.buyTokens() (contracts/RicSale.sol#104-121) uses literals with too many digits:
    	- require(bool,string)(tokens <= 100000e18,950) (contracts/RicSale.sol#112)
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#too-many-digits

    FeeDao (contracts/FeeDao.sol#41-365) does not implement functions:
    	- FeeDao.calculateETHWithdraw(uint256) (contracts/FeeDao.sol#286-298)
    	- FeeDao.calculateWithdraw(IERC20,uint256) (contracts/FeeDao.sol#272-284)
    	- FeeDao.closeTokenProposal(uint256) (contracts/FeeDao.sol#220-247)
    	- FeeDao.getCurrentBalance() (contracts/FeeDao.sol#321-323)
    	- FeeDao.getMyProposals() (contracts/FeeDao.sol#268-270)
    	- FeeDao.getProposals() (contracts/FeeDao.sol#264-266)
    	- FeeDao.getTokens() (contracts/FeeDao.sol#260-262)
    	- FeeDao.getTotalBalance() (contracts/FeeDao.sol#325-327)
    	- FeeDao.hashBalance(Balance) (contracts/FeeDao.sol#356-358)
    	- FeeDao.hashBalance(address) (contracts/FeeDao.sol#362-364)
    	- FeeDao.hashTokenProposal(TokenProposal,address) (contracts/FeeDao.sol#160-175)
    	- FeeDao.receive() (contracts/FeeDao.sol#315-319)
    	- FeeDao.tokenHashWithAddress(Token) (contracts/FeeDao.sol#249-258)
    	- FeeDao.viewSpentBalanceOf(IERC20) (contracts/FeeDao.sol#348-354)
    	- FeeDao.voteOnToken(uint256,bool) (contracts/FeeDao.sol#187-218)
    	- FeeDao.votedAlready(uint256,address) (contracts/FeeDao.sol#178-185)
    	- FeeDao.withdrawETH(uint256) (contracts/FeeDao.sol#300-313)
    	- FeeDao.withdrawOne(IERC20,uint256) (contracts/FeeDao.sol#329-346)
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unimplemented-functions

    TrailsRegistry (contracts/Trails.sol#11-85) does not implement functions:
    	- TrailsRegistry.add(string,string) (contracts/Trails.sol#39-49)
    	- TrailsRegistry.blackList(string,string) (contracts/Trails.sol#51-57)
    	- TrailsRegistry.getBlackList(string) (contracts/Trails.sol#59-66)
    	- TrailsRegistry.getTrailContent(string) (contracts/Trails.sol#77-84)
    	- TrailsRegistry.getTrailDetails(string) (contracts/Trails.sol#68-75)
    	- TrailsRegistry.hashString(string) (contracts/Trails.sol#35-37)
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
    	- Ownable.renounceOwnership() (node_modules/@openzeppelin/contracts/access/Ownable.sol#54-56)
    transferOwnership(address) should be declared external:
    	- Ownable.transferOwnership(address) (node_modules/@openzeppelin/contracts/access/Ownable.sol#62-65)
    name() should be declared external:
    	- ERC20.name() (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#62-64)
    symbol() should be declared external:
    	- ERC20.symbol() (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#70-72)
    decimals() should be declared external:
    	- ERC20.decimals() (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#87-89)
    totalSupply() should be declared external:
    	- ERC20.totalSupply() (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#94-96)
    balanceOf(address) should be declared external:
    	- ERC20.balanceOf(address) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#101-103)
    transfer(address,uint256) should be declared external:
    	- ERC20.transfer(address,uint256) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#113-116)
    allowance(address,address) should be declared external:
    	- ERC20.allowance(address,address) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#121-123)
    approve(address,uint256) should be declared external:
    	- ERC20.approve(address,uint256) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#132-135)
    transferFrom(address,address,uint256) should be declared external:
    	- ERC20.transferFrom(address,address,uint256) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#150-164)
    increaseAllowance(address,uint256) should be declared external:
    	- ERC20.increaseAllowance(address,uint256) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#178-181)
    decreaseAllowance(address,uint256) should be declared external:
    	- ERC20.decreaseAllowance(address,uint256) (node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#197-205)
    getRank(address) should be declared external:
    	- CatalogDao.getRank(address) (contracts/CatalogDao.sol#63-65)
    votedAlready(uint256,address) should be declared external:
    	- FeeDao.votedAlready(uint256,address) (contracts/FeeDao.sol#178-185)
    calculateWithdraw(IERC20,uint256) should be declared external:
    	- FeeDao.calculateWithdraw(IERC20,uint256) (contracts/FeeDao.sol#272-284)
    calculateETHWithdraw(uint256) should be declared external:
    	- FeeDao.calculateETHWithdraw(uint256) (contracts/FeeDao.sol#286-298)
    wallet() should be declared external:
    	- RicSale.wallet() (contracts/RicSale.sol#88-90)
    weiRaised() should be declared external:
    	- RicSale.weiRaised() (contracts/RicSale.sol#95-97)
    remainingTokens() should be declared external:
    	- RicSale.remainingTokens() (contracts/RicSale.sol#178-184)
    votedAlreadyOnRank(CatalogState,uint256,address) should be declared external:
    	- CatalogDaoLib.votedAlreadyOnRank(CatalogState,uint256,address) (contracts/libraries/CatalogDaoLib.sol#132-142)
    votedAlreadyOnSC(CatalogState,uint256,address) should be declared external:
    	- CatalogDaoLib.votedAlreadyOnSC(CatalogState,uint256,address) (contracts/libraries/CatalogDaoLib.sol#283-293)
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#public-function-that-could-be-declared-external
    . analyzed (20 contracts with 77 detectors), 148 result(s) found
