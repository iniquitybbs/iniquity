import yargs from "yargs"
import * as Commands from "./commands"

if (process.argv.length > 2) yargs.command(Commands.default).help().argv
export default yargs.command(Commands.default).help().argv
