let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Ya','Ga, Lu jelek','maap males jawab:v','Mungkin','Ya*(terpaksa:( )*','Tidak','Tidak mungkin'])}
`.trim(), m)
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

