# discord-bot-template

1. Go to https://discord.com/developers/applications and create your own app
2. Retrieve your bot token (Overview -> Bot -> Token -> Reset Token)
3. Invite the bot to your server with the correct permissions (Overview -> Bot -> Bot Permissions)
   3.1 Select desired permissions
   3.2 Copy  the permissions integer at the bottom
   3.3 Generate bot invite link (Overview -> Installation -> Install Link)
   3.4 Copy the link and add a new parameter (&permissions=yourpermissioninteger&scope=bot) example: https://discord.com/oauth2/authorize?client_id=123409812349&permissions=12391812938&scope=bot
5. Create a .env file, copy the template, and replace the placeholder text with your bot token
6. Create a terminal and run ```npm i```
7. Run ```node index.js``` to start the bot
