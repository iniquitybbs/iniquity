var term = require("terminal-kit").terminal
term.bold.underline.red("mixed")
// Get some user input
term.magenta("Enter your name: ")
term.inputField(function(error: any, input: string) {
    term.green("\nYour name is '%s'\n", input)
})
