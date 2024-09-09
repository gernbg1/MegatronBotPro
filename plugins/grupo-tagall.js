const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join``;
  const oi = `${pesan}`;
  let emot = `${pickRandom(['𝘔𝘦𝘨𝘢𝘵𝘳𝘰𝘯', '𝘔𝘦𝘨𝘢𝘵𝘳𝘰𝘯𝘉𝘰𝘵𝘗𝘳𝘰', '𝘔𝘦𝘨𝘢𝘵𝘳𝘰𝘯𝘉𝘰𝘵', '𝘔𝘦𝘨𝘢𝘵𝘳𝘰𝘯𝘗𝘳𝘰'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
  let teks = `╭─────────\n│❏ 𝘔𝘦𝘨𝘢𝘵𝘳𝘰𝘯︎𝘛𝘦 𝘐𝘯𝘷𝘰𝘤𝘢 🤖\n│❏ ${emot}𝘓𝘰𝘷𝘦𝘳𝘴: *${participants.length}* ${oi}\n│❏ 𝘝𝘦𝘯𝘥𝘦𝘥𝘰𝘳: https://wa.link/bsu05y\n│\n`;
  for (const mem of participants) {
    teks += `│🤖 @${mem.id.split('@')[0]}\n`;
  }
  teks += `│\n╰@𝘠𝘢𝘭𝘭𝘪𝘤𝘰.𝘖𝘸𝘯𝘦𝘳 🤖`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;