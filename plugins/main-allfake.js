import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

//creador y otros
global.creador = 'Wa.me/51918425805'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/51918425805'
global.namechannel = '𝗠𝗲𝗴𝗮𝘁𝗿𝗼𝗻 𝗕𝗼𝘁 𝗣𝗿𝗼 🤖'
global.namechannel2 = '𝗠𝗲𝗴𝗮𝘁𝗿𝗼𝗻 𝗕𝗼𝘁 𝗣𝗿𝗼 🤖'
global.namegrupo = '𝗠𝗲𝗴𝗮𝘁𝗿𝗼𝗻 𝗕𝗼𝘁 𝗣𝗿𝗼 🤖'
global.namecomu = '𝗠𝗲𝗴𝗮𝘁𝗿𝗼𝗻 𝗕𝗼𝘁 𝗣𝗿𝗼 🤖'
global.namecomu2 = '𝗠𝗲𝗴𝗮𝘁𝗿𝗼𝗻 𝗕𝗼𝘁 𝗣𝗿𝗼 🤖'
global.colab1 = '𝗠𝗲𝗴𝗮𝘁𝗿𝗼𝗻 𝗕𝗼𝘁 𝗣𝗿𝗼 🤖'
global.colab2 = '𝗠𝗲𝗴𝗮𝘁𝗿𝗼𝗻 𝗕𝗼𝘁 𝗣𝗿𝗼 🤖'
global.colab3 = '𝗠𝗲𝗴𝗮𝘁𝗿𝗼𝗻 𝗕𝗼𝘁 𝗣𝗿𝗼 🤖'

//Reacciones De Comandos.!
global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'

//Emojis determinado de Ai Genesis
global.emoji = '🤖'
global.emoji2 = '🤖'
global.emoji3 = '🤖'
global.emoji4 = '🤖'
global.emojis = [emoji, emoji2, emoji3, emoji4].getRandom()

//mensaje en espera
global.wait = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼 ...*';
global.waitt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼 ...*';
global.waittt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼 ...*';
global.waitttt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼 ...*';

//Enlaces
var canal = 'https://whatsapp.com/channel/0029VaiHa0GJkK7If3ctDH0g'  
var git = 'https://www.xnxx.es/video-yai25df/sexo_anal' 
var github = 'https://www.xnxx.es/video-yai25df/sexo_anal' 
var instagram = 'https://www.instagram.com/yallico.owner' 

global.redes = [canal, git, github, instagram].getRandom()

//Imagen
let category = "imagen"
const db = './media/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//Fakes
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.estilo2 = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${packname}`, orderTitle: 'Bang', thumbnail: icons, sellerJid: '0@s.whatsapp.net'}}}

global.estilox = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873232212-5493873232221@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝗠𝗲𝗴𝗮𝘁𝗿𝗼𝗻 𝗕𝗼𝘁 𝗣𝗿𝗼 🤖', orderTitle: 'Bang', thumbnail: icons, sellerJid: '0@s.whatsapp.net' }}}
global.estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873232212-5493873232221@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}} 

global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.jpg')}}}

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363330969414495@newsletter', newsletterName: "𝗠𝗲𝗴𝗮𝘁𝗿𝗼𝗻 𝗕𝗼𝘁 𝗣𝗿𝗼 🤖", serverMessageId: -1 }
}}, { quoted: m }

global.icono = [ 
'https://qu.ax/eFsH.jpg',
'https://qu.ax/eFsH.jpg',
'https://qu.ax/eFsH.jpg',
'https://qu.ax/eFsH.jpg',
'https://qu.ax/eFsH.jpg',
].getRandom()

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: "120363330969414495@newsletter", serverMessageId: 100, newsletterName: '𝗠𝗲𝗴𝗮𝘁𝗿𝗼𝗻 𝗕𝗼𝘁 𝗣𝗿𝗼 🤖', }, externalAdReply: { showAdAttribution: true, title: packname, body: '𝗠𝗲𝗴𝗮𝘁𝗿𝗼𝗻 𝗕𝗼𝘁 𝗣𝗿𝗼 🤖', mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}

export default handler
