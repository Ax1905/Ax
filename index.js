const { default: makeWASocket, DisconnectReason, useSingleFileAuthState} = require('@adiwajshing/baileys')
const { state, saveState } = useSingleFileAuthState('./session.json')
const fs = require('fs')
const pino = require('pino')
const connectKeWA = () => {
const semar = makeWASocket({logger:pino({level:'silent'}),printQRInTerminal: true,auth: state,browser: ["bot By Ax", "Dekstop", "3.0"]})

require('./semar.js')
nocache('./semar.js', module => console.log(`"${module}" Updated!`))

semar.ev.on('messages.upsert', async denz => {
if (!denz.messages) return
msg = denz.messages[0]
nomorOwner = ['6285890510112']
nomorDeveloper = ['6285890510112']
semar.sendPresenceUpdate('unavailable')
require("./semar")(semar, denz, msg)})

semar.ev.on('connection.update', (update) => {
const {connection,lastDisconnect} = update
if (connection === 'close') {lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? connectKeWA() : ''}
else if(connection === 'open') 
{
    // console.log(update)
}

semar.ev.on('creds.update', saveState)
// console.log(update)
})}	









function nocache(module, cb = () => { }) {console.log(`Module ${module} detected!`) 
fs.watchFile(require.resolve(module), async () => {await uncache(require.resolve(module))
cb(module)})}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()} catch (e) {reject(e)}})}

connectKeWA()