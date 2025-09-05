require("dotenv").config();

const { default: Anthropic } = require("@anthropic-ai/sdk");

const anthropic = new Anthropic();
async function main() {
    anthropic.messages.stream({
        messages: [{ role: 'user', content: "Create a simple todo app" }],
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
    }).on('text', (text:unknown) => {
        console.log(text);
    });

}

main();

