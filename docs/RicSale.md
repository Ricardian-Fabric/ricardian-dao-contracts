# RicSale

The Ric token is sold from the app via this crowdsale contract. This contract is based on the open zeppelin crowdsale contract.

# Constructor

    constructor(address payable _wallet_, IERC20 _token_);

The deployer passes in wallet of the address where he collects the payments and the token for sale.

# External functions

    receive() external payable;

If eth is transfered, the receive will call buyTokens, but it's preferred to call buyTokens instead of a direct transfer.

    function buyTokens() public payable nonReentrant;

The prefered way to purchase tokens is via the buy functions. Max tokens sold are 40.000.000.
An address can only purchase max 100.000 tokens per Rate as it increases.

# View functions

    function token() public view returns (IERC20);

Returns the tokens being sold.

    function wallet() public view returns (address payable);

Return the funds where the wallet is collected;

    function weiRaised() public view returns (uint256);

Returns the amount of Wei raised

    function remainingTokens() public view returns (uint256);

Returns the amount of tokens remaining for sale.

    function getCurrentRate()
    	public
    	pure
    	returns (uint256);

Returns the current rate at which the tokens are sold.
