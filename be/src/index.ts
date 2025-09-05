require("dotenv").config();

const { default: Anthropic } = require("@anthropic-ai/sdk");

const anthropic = new Anthropic();
async function main() {
const msg = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1000,
    temperature: 1,
    messages: [{
        role: "user",
        content: "Write the code for a TODO application"
        }]
    });
    console.log(msg);
}

main();

