//Bot by VINOR KING//


require("./all/module")
global.owner = "255749750707" 
global.namaCreator = "DUDUU MENDEZ"
global.autoJoin = false 
global.antilink = true 
global.versisc = '6.𝟏' 
global.codeInvite = "https://whatsapp.com/channel/0029VaeDVzyF6smxnTiplY0N"
global.isLink = 'https://whatsapp.com/channel/0029VaeDVzyF6smxnTiplY0N'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "DUDUU MENDEZ" 
global.author = "𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6" 
global.jumlah = "5" 
global.namabot = "𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
