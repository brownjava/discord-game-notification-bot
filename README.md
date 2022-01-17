# discord-game-notification-bot

This is a simple Discord bot which does one and only one thing: broadcasts a notification in a channel when a user's status changes.

This can be useful if you have a lot of friends on your Discord who regularly play games; add this bot, point it at a game notification channel, and then set your client (e.g. phone) to receive all updates for that channel.  You'll then be notified when your friends start playing games, so you can decide if you want to join in!

The setup is pretty simple:

1. Copy `config-example.js` to `config.js`.
2. Populate `config.js` with your Discord access token, as well as the ID of the channel you want to use as your "game notifications" channel.
3. Run `npm install` or `npm ci` to populate dependencies.
4. Run `node index.js`.
