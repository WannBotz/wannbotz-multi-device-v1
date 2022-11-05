import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {

let wan = 'https://telegra.ph/file/c080917609684bf229cd3.jpg'
let name = await conn.getName(m.sender) 
let anu2 =`
Terdeteksi *${name}*, Lagi Mencari Ingfo Escehh🗿\n\nawokawkkk
`
  conn.sendMessage(m.chat, anu2, adReply)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script)$/i
handler.group = false
handler.limit = false

handler.fail = null

export default handler