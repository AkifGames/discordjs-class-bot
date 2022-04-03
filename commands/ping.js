import command from "../base/command.js";

export default class ping extends command {
    constructor() {
        super({
            name: "ping",
            description: "Pong!",
            usage: "ping",
            category: "member",
            aliases: ["pong"]
        });
    }
    execute(message, args) {
        message.channel.send("Pong!");
    }
}