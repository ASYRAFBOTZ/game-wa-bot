let handler = async (m, { conn, args, participants }) => {
  let members = participants.filter(member => !member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
 await conn.groupMakeAdmin(m.chat, [user]).catch(console.log)
}
handler.help = ['promote','admin','^', '↑'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^(promote|admin|\^|↑)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

