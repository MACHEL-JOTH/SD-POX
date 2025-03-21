module.exports.config = {
	name: "help",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "JRT",
	description: "Help Menu",
	commandCategory: "Công cụ",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 30
	}
};

module.exports.languages = {
	"en": {
		"moduleInfo": " ",
		"helpList": '🧩Currently Available Commands🧩\n\n🌀🔸 Category: Group Admin\n\n👉1.all\n👉2.box info\n👉3.resend\n👉4.fbuser -fbuser id remove\n👉5.kick - Member Remove\n👉6.antiout - Auto Added Member\n👉7.antiflood -\n👉8.antijoin - Join Noti\n👉9.autoreply - Set auto reply\n👉10.unsend - Check Unsend Message\n👉11.boxemoji - set emoji\n👉12.boximage - set image\n👉13.setall - Onlyadmin setting.\n👉14. advice - উক্তি\n\n🌀🔹Category ISLAM 🔸\n\n👉1.হাদিস - হাদিস বাংলা\n👉2.Hadis - বাংলা পিক হাদিস,\n👉3.Dua - ইসলামিক প্রয়োজনীয় দোয়া সমূহ,\n👉4.HZALI - হজরত আলি (রাঃ) এর উক্তি.\n👉5.Death - 😓😭\n\n🌀🔹Category: All User Used Command🔸\n\n👉1.uid - আপনার নিজের আইডি Cord\n👉2.trans - Language Translator\n👉3.search - Google Searcher\n👉4.imagesearch - 🔎 Searching for image...\n👉5.jail - জেল খানা.\n👉6.idbox - Box number \n👉7.kiss - চুম্মা চুম্মি🤫\n👉8.marry - শুভ বিবাহ 😘\n👉9.couple - Couple pick\n👉10.Love - Love ℅ ♥\n👉11.LOVEU- ভালোবাসার উক্তি\n👉12.mystery - অলৌকিক শক্তি.\n👉13.rip - 😪মরে জাওয়া😓\n👉14.setneme - ইউজার নাম চেঞ্জ\n👉15.mems - Some Funny Memes\n👉16.poop - কাবাবের হাড্ডি.\n👉17.Shortlink - Original url: undefined\n👉18.spank - Try to use THIS Command Funny.\n👉19.ss - full Link Page  Screenshots\n👉20.vb - Bangla Voice\n👉21.ve - English Voice\n👉22.math - Solve Mathematics\n👉23.covid - For try Again.\n👉24.movie - All information.\n👉25.pic - Pic search \n👉26.rname - Random Nicknames\n\n🌀🔸Category: Fun Post🔹\n\n👉1.toilet - Funny Post ওয়াশরুম.\n👉2.Trump - Twitter funny post\n👉3.zuck - Zuckerberg Funny post\n👉4.mark - Mark Zuckerberg  Comment\n👉5.poutine - আমার ছোট ভাই পুতিন এর সাথে মিটিং.\n👉6.Obama - Twitter Funny Post\n👉7.Kader - Facebook post Obaidul Kader\n👉8.lexi - Lexi Lore funny post\n👉9.phub - Post the content of the comment on ponhub\n👉10.Mia - Mia khalifa Fun post\n👉11.Sunny - sunny leyon Fun post\n👉12.sefuda - sefatullal Fun post\n\n🌀🔸Category: Cover Making 🔹\n\n👉1.fbcover - Facebook cover mack\n👉2.fbcover2 - Facebook cover mack 2\n👉3.Card - simply Parsonal Card\n\n🌀🔹Category: Music Player & Video Downloader🔸\n\n👉1.tiksearch - [Tiktok] Enter the character to search for! Song artist name.\n👉2.yt2mp3 - YouTube to Mp3\n👉3.yt2mp4 - YouTube to Mp4\n👉4.ytsearch - YouTube Video Search\n👉5.video - Yt Video\n👉6.Song - Yt Song all\n👉7.lyrics - ♩ গান এর লিরিক্স.\n👉8.sing - yt song\n👉9.fbvideo - facebook video downlood.\n\n🌀🔸Category Repot Admin🔹\n\n👉1.report - (যে কোন সমস্যা হলে রিপোর্ট লিখে রিপোর্ট করুন)\n\n🌀🔸Category: ROBOT🔹\n\n👉1.Meta - Meta is all bangla auto robot\n\n✅Reply & Pick a Number to See How to Use The Command 😴\n\n⚡️More Coming Soon⚡️\n\n✅ For More Contact With Bot Developer : Mohammad SHiblu  SHiblum44@gmail.com ✌🎫 For More Contact Me: https://www.facebook.com/SHibluBhai69 & Facebook Page Follow :- https://www.facebook.com/COPYRIGHT.8484 Thank You.BOT CEO : Mohammad SHiblu 🔸\n\n',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
}

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const command = commands.values();
		var group = [], msg = "";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
		
		return api.sendMessage(msg + getText("helpList", commands.size, prefix), threadID, async (error, info) =>{
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		});

	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}