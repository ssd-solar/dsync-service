'use strict'

const debug = require('debug')
const dlog = debug('dsync:service')
const log = console.log

const IPC = require('@ssd-solar/tiny-ipc')
const Joi = require('@hapi/joi')

async function main () {
  log('launching')

  const server = await IPC.server('dsync', client => {
    
  })

  server.cmd('authenticate', () => {}, Joi.any()) // user, pass, server? => authenticateResponse
  server.cmd('setting', () => {}, Joi.any()) // key, value => settingResponse


}

main().then(() => {}, console.error)
