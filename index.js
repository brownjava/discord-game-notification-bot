const Discord = require('discord.js');

const config = require('./config');

const intents = new Discord.Intents()
intents.add(Discord.Intents.FLAGS.GUILDS);
intents.add(Discord.Intents.FLAGS.GUILD_PRESENCES);
intents.add(Discord.Intents.FLAGS.GUILD_MEMBERS);

const activityNames = presence => {
    return presence.activities.map((activity) => { return activity.name; });
}

const sendMessage = async (userId, message) => {
    channel = discord.channels.cache.get(config['channel'])
    await channel.send(`<@${userId}> ${message}`);
}

let discord = new Discord.Client({intents: intents});
discord.on('ready', () => {
    console.log('logged in!');
    discord.on('presenceUpdate', async (oldPresence, newPresence) => {
        oldActivities = activityNames(oldPresence);
        newActivities = activityNames(newPresence);

        stoppedActivities = oldActivities.filter(activity => !newActivities.includes(activity))
        startedActivities = newActivities.filter(activity => !oldActivities.includes(activity))

        for (activity of stoppedActivities) {
            await sendMessage(newPresence.userId, `stopped playing ${activity}`)
        }
        for (activity of startedActivities) {
            await sendMessage(newPresence.userId, `started playing ${activity}`)
        }
    });
});
discord.login(config['token']);
