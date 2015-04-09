(function () {
    //Link location of your fork so you don't have to modify so many things.
    var fork = "ureadmyname";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }
        var bot = window.bot;
        bot.retrieveSettings();

        bot.commands.bleepbloopCommand = {
	command: 'bleepbloop',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                var thebleepbloop = ['great song!', 'great song, brah!', 'nice song!'];

var randomIndex = Math.floor(Math.random() * thebleepbloop.length);

var randomString = thebleepbloop[randomIndex];
                        API.sendChat(subChat(basicbot.chat.bleepbloop, {name: chat.un, response: basicBot.settings.bleepbloop[randomIndex]}));
                    }
                }
            };


}).call(this);
