# telegram-GPT (Bot)

How to deploy bot on Google Cloud [>>>](https://habr.com/ru/articles/488560/)

### Create Telegram token
1. Got to Telegram and search BotFather or [link](https://t.me/BotFather).
2. Send command to BotFather: `/newbot`.
3. Send message to BotFather: `{your_bot_name}` (TgBotAI).
4. Send username to BotFather: `{your_bot_username}` (TgBotAIBot).
5. After that you get Token and bot link.

### Create OpenAI key:
1. Go to `https://platform.openai.com/` (need registration).
2. Go to `View API keys`.
3. Press button `Create new secret key`.
4. In modal window type key name (TgBotAI).
5. After that you get API key.

### Launch  
Via Docker:  
Run `make build` - build Docker image.  
Run `make run` run Docker image.  
Stop `make stop` - stop Docker image.

Via NPM:  
Run `npm run dev` - launch dev mode.  
Run`npm run start` - launch prod mode.
