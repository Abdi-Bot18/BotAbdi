let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    conn.reply(m.chat, '+1500 XP untuk apa nih 😂', m)  
    global.DATABASE._data.users[m.sender].exp += 1500
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else conn.reply(m.chat, 'Anda sudah mengklaim klaim harian  hari ini,klaim kembali besok!! ', m)
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

