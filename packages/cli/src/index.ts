import * as path from "path"
import yargs from "yargs"

/**
 * Cli
 * @class
 * @implements yargs.CommandModule
 */
class Cli implements yargs.CommandModule {
    public command = "command [options]"
    public describe = "Execute one of the many iniquity commands installed."
    public builder = (yargs: yargs.Argv) => {
        return yargs.commandDir(path.join(__dirname), { recurse: true, exclude: RegExp("/*.spec.*/") }).pkgConf("iniquity")
    }
    public handler(argv: yargs.Arguments) {}
}

const cmds: yargs.CommandModule = new Cli()

if (process.argv.length > 2) yargs.command(cmds).help().argv

export default cmds
