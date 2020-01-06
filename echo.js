'use strict'

const delay = require('delay')

const main = async () => {
  while (true) {
    console.log(process.argv.slice(2).join(' '))
    await delay(1000)
  }
}

main()
