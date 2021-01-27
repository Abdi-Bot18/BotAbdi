let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [Belum Tersedia]
│ • Telkomsel [082335452441]
│ • Gopay [Belum Tersedia]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282335452441
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
