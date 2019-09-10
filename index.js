// File:    index.js
// Name:    Pikey
// Date:    10/09/2018
// Desc:    Bot that will auto cell people upon mention
// Usage:   Requires nodejs with and discord.js (npm i discord.js). Once done just run the index.
// License: Copyright © 2019 Pikey
//          Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//          The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//          THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWAR

const Discord = require('discord.js')
const { token, cellRoleId } = require('./config.json')
const retards = new Set()
const client = new Discord.Client()

client.on('ready', () => {
  console.log('Bot started')
})

client.on('message', message => {
  if (!message.isMentioned(client.user)) return undefined
  message.member.addRole(cellRoleId).then(x => {
    retards.add(message.author.id)
    setTimeout(() => {
      retards.delete(message.author.id)
      message.member.removeRole(cellRoleId)
    }, 300000)
  })
})

client.login(token).then(x => console.log(`Logged in with ${token}`))
