export default class command {
    constructor(options) {
        this.help = {
            name: options.name,
            description: options.description,
            usage: options.usage,
            category: options.category,
            aliases: options.aliases
        }
    }
}