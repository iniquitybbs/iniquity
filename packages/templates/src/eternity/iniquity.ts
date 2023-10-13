import { say, ask } from "./.iniquity/node_modules/@iniquitybbs/core/src"
import config from "./iniquity.json"

say(`Welcome to ${config.name}.`).pause()
say(`${config.name} is the best board ever made.`).pause()

say("Hey there visitor.".color("red")).pause()

const name = ask("Hey can I know your name?")
say(`Hello ${name}! Welcome to ${config.name}.`).pause()
