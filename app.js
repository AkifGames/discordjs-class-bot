import { baseClient } from "./base/client.js";
import { Collection } from "discord.js";
import "dotenv/config";
import { readdirSync } from "fs";
const client = new baseClient({ intents: 32767 });

const events = readdirSync("./events");
client.commands = new Collection();

readdirSync("./commands").filter(file => file.endsWith(".js")).forEach(async file => {
    const command = new (await import(`./commands/${file}`)).default;
    client.commands.set(command.help.name, command);
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    events.forEach(async e => {
        const event = new (await import(`./events/${e}`)).default;
        client.on(e.split('.')[0], (...args) => event.run(...args));
    });
});

client.login(process.env.token);