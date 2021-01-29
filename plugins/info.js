let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Abdi-Bot
╠➥ Script: Abdi-Bot
║
╠➥ Github: https:
╠➥ //github.com/Abdi-Bot18/BotAbdi
╠➥ Instagram: @abdi018
╠➥ YouTube: Abdi HH
║
╠═〘 Thanks To 〙 ═
╠➥ FAJAR & DEBBY
╠➥ FALAH & LIA
╠➥ DENNIS
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ DANA: Belum Tersedia
╠➥ Tsel: +6282335452441
╠➥ GOPAY: Belum Tersedia
╠➥ OVO: Belum Tersedia
║
║>Request? Wa.me/+6282335452441
║
╠═〘 Abdi-Bot〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

