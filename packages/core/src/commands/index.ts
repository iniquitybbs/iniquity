import * as path from "path"
import yargs from "yargs"

/**
 * Os
 * @class
 * @implements yargs.CommandModule
 */
class Core implements yargs.CommandModule {
    public command = "core [command]"
    public describe = "make a get HTTP request"
    public builder = (yargs: yargs.Argv) => {
        return yargs.commandDir(path.join(__dirname), { recurse: true, exclude: RegExp("/*.spec.*/") }).pkgConf("iniquity")
    }
    public handler(argv: yargs.Arguments) {}
}

const cmds: yargs.CommandModule = new Core()

if (process.argv.length > 2) yargs.command(cmds).help().argv

export default cmds
