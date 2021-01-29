let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • OVO [Belum Tersedia]
│ • Telkom [+6282335452441]
│ • Dana [Belum Tersedia]
│ • GOPAY [Belum Tersedia]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
