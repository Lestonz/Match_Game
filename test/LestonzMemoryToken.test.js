const LestonzMemoryToken = artifacts.require('./LestonzMemoryToken.sol')

// Mocha and Chai for the test contract
require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Memory Token', (accounts) => {
  let token

  //Let's define state where the token will come from so that we don't need to define it, again and again, every time.
  before(async () => {
    token = await LestonzMemoryToken.deployed()
  })

  // Define deployment
  describe('deployment', async () => {

    // Check the token contract address
    it('deploys successfully', async () => {
      const address = token.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    // Check the name of Token Name
    it('has a name', async () => {
      const name = await token.name()
      assert.equal(name, 'Lestonz Memory Token')
    })

    // Check the symbol of Token Symbol
    it('has a symbol', async () => {
      const symbol = await token.symbol()
      assert.equal(symbol, 'MEMORY')
    })
  })


  //Define Token Distribution
  describe('token distribution', async () => {
    let result

    it('mints tokens', async () => {
      // Put your nft uri 
      await token.mint(accounts[0], 'https://www.token-uri.com/nft')

      // It should increase the total supply
      result = await token.totalSupply()
      assert.equal(result.toString(), '1', 'total supply is correct')

      // It increments owner balance
      result = await token.balanceOf(accounts[0])
      assert.equal(result.toString(), '1', 'balanceOf is correct')

      // Token should belong to owner
      result = await token.ownerOf('1')
      assert.equal(result.toString(), accounts[0].toString(), 'ownerOf is correct')
      result = await token.tokenOfOwnerByIndex(accounts[0], 0)

      // Owner can see all tokens
      let balanceOf = await token.balanceOf(accounts[0])
      let tokenIds = []
      for (let i = 0; i < balanceOf; i++) {
        let id = await token.tokenOfOwnerByIndex(accounts[0], i)
        tokenIds.push(id.toString())
      }
      let expected = ['1']
      assert.equal(tokenIds.toString(), expected.toString(), 'tokenIds are correct')

      // Token URI Correct
      let tokenURI = await token.tokenURI('1')
      assert.equal(tokenURI, 'https://www.token-uri.com/nft')
    })
  })

})
