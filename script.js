'use strict';

const Script = require('smooch-bot').Script;

module.exports = new Script({
    processing: {
        prompt: (bot) => bot.say('Beep boop...'),
        receive: () => 'processing'
    },

    start: {
        receive: (bot) => {
            return bot.say('Hi there , thanks for contacting us. In case we are not around, feel free to drop your queries here with your email id/contact nnumber and we will get back to you ASAP.')
                .then(() => 'startAgain');
        }
    },
    
    startAgain: {
        receive: (bot) => {
            return bot.say('My creator seems to be away. By the time they respond, do you want me to tell you a joke? I am their pet bot, "bhot"')
                .then(() => 'askGame');
        }
    },
    
    askGame: {
        receive: (bot) => {
            return bot.say('Why was the baby strawberry sad? Because its parents were in a jam. LOLZ!')
                .then(() => 'askFame');
        }
    },

    askFame: {
        receive: (bot) => {
            return bot.say('Now that we are friends, what is your name?')
                .then(() => 'askName');
        }
    },
    
    askName: {
        receive: (bot, message) => {
            const name = message.text;
            return bot.setProp('name', name)
                .then(() => bot.say(`Okey. I'll call you ${name}.`))
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
