var handler = async (m, {conn, args, usedPrefix, command}) => {
const isClose = { 'open': 'not_announcement', 'close': 'announcement', 'abierto': 'not_announcement', 'cerrado': 'announcement', 'abrir': 'not_announcement', 'cerrar': 'announcement', 'desbloquear': 'unlocked', 'bloquear': 'locked' }[(args[0] || '')]
if (isClose === undefined) { return await conn.sendButton(m.chat, dev, '• 𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙖 𝙡𝙖 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤𝙣.', wm, [
['𝗔𝗕𝗥𝗜𝗥 𝗚𝗥𝗨𝗣𝗢 ✅', '.grupo abrir'],
['𝗖𝗘𝗥𝗥𝗔𝗥 𝗚𝗥𝗨𝗣𝗢 ❌', '.grupo cerrar'],
['𝗠𝗘𝗡𝗨 𝗕𝗢𝗧 ⭐', '.menu']], null, null, fakegif3)
}
await conn.groupSettingUpdate(m.chat, isClose)
{ 
conn.reply(m.chat, '✅ *Configurado correctamente*', m, rcanal, )
await m.react(done)
}}
handler.help = ['group abrir / cerrar']
handler.tags = ['grupo']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true

export default handler