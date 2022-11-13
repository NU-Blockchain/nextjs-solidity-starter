const { assert } = require('chai');
require('dotenv').config();

const Greeter = artifacts.require('./Greeter.sol')
const acc1 = process.env.ADDR_1;
const acc2 = process.env.ADDR_2;

require('chai')
  .use(require('chai-as-promised'))
  .should()

  contract('Greeter', (accounts) => {
    let contract
    const INIT_GREETING = 'Hello, world!'
    describe('deployment', async () => {
        before(async () => {
          contract = await Greeter.deployed(INIT_GREETING)
        })
    
        it('should read first account on ganache', async () => {
          assert.equal(accounts[0], acc1, "contract not deployed correctly")
        })
    })

    describe('greeting', async () => {
        it('should read greeting from constructor', async () => {
            const greeting = await contract.greet()
            assert.equal(greeting, INIT_GREETING, "initial greeting not read correctly")
        })


        it("should return new greeting once it's changed", async () => {
            await contract.setGreeting('Hola mundo!', {from: acc1})
            // wait until the transaction is mined
            const result = await contract.greet()
            assert.equal(result, 'Hola mundo!', "greeting not changed correctly")
        })
    })
  })
