import { say, ask } from "./.iniquity/node_modules/@iniquitybbs/core/src"
import config from "./iniquity.json"

say(`Welcome to ${config.name}.`).pause()
say("This is a test of the Iniquity BBS system").pause()

say("Hey there visitor.".color("red")).pause()

const name = ask("Hey can I know your name")
say(`Hello ${name}!`).pause()
