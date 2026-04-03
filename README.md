# Instructions

## Discord Developer Portal
1. Go to https://discord.com/developers/applications and create your own app
2. Retrieve your bot token (Overview -> Bot -> Token -> Reset Token)
3. Invite the bot to your server with the correct permissions (Overview -> Bot -> Bot Permissions)
4. Select desired permissions
5. Copy  the permissions integer at the bottom
6. Generate bot invite link (Overview -> Installation -> Install Link)
7. Copy the link and add a new parameter (&permissions=yourpermissioninteger&scope=bot) example: https://discord.com/oauth2/authorize?client_id=123409812349&permissions=12391812938&scope=bot

## In VS Code / Editor
1. Create a .env file, copy the template, and replace the placeholder text with your bot token
2. Create a terminal and run ```npm i``` to initialize the project
3. Edit index.js w/ your custom functions
4. Run ```node index.js``` to start the bot
