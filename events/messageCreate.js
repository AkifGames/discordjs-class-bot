export default class {
    run(message) {
        if (message.webhookID || message.author.bot) return;
        if (!message.content.toLowerCase().startsWith("?")) return;

        const args = message.content.slice(1).trim().split(/ +/);
        const commandName = args.shift().toLocaleLowerCase();
        const command = message.client.commands.get(commandName);
        if (!command) return;
        
        try {
            command.execute(message, args);
        } catch (e) {
            console.log(e);
        }
    }
}