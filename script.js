'use strict';

const Script = require('smooch-bot').Script;

module.exports = new Script({
    processing: {
        prompt: (bot) => bot.say('Beep boop...'),
        receive: () => 'processing'
    },

    start: {
        receive: (bot) => {
            return bot.say('By the time my creator responds, do you want me to tell you a joke? I am their pet bot, "bhot"')
                .then(() => 'startAgain');
        }
    },
    
    startAgain: {
        receive: (bot) => {
            return bot.say('My creator seems to be away. By the time my creator responds, do you want me to tell you a joke? I am their pet bot, "bhot"')
                .then(() => 'askName');
        }
    },

    askName: {
        //prompt: (bot) => bot.say('By the time my creator responds, do you want me to tell you a joke? I am their pet bot, "bhot"'),
        receive: (bot, message) => {
            const response = message.text;
            //if response == "yes"
            return bot.setProp('name', name)
                .then(() => bot.say(`Joke`))
                .then(() => 'finish');
        }
    },

    finish: {
        receive: (bot, message) => {
            return bot.getProp('name')
                .then((name) => bot.say(`Sorry ${name}, my creator didn't ` +
                        'teach me how to do anything else!'))
                .then(() => 'finish');
        }
    }
});
