import { openai } from './openai.js'

export const INITIAL_SESSION = { messages: [], }

export async function initCommand(ctx) {
  ctx.session = INITIAL_SESSION
  await ctx.reply('Чекаю голосового або текстового повідомлення.')
}

export async function processTextToChat(ctx, content) {
  try {
    ctx.session.messages.push({ role: openai.roles.USER, content })

    const response = await openai.chat(ctx.session.messages)

    ctx.session.messages.push({ role: openai.roles.ASSISTANT, content: response.content, })

    await ctx.reply(response.content)
  } catch (e) {
    console.log('Error while processing text to GPT.', e.message)
  }
}
