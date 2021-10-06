import yargs from "yargs"
import * as path from "path"

/**
 * Init
 * @class
 * @implements yargs.CommandModule
 */
class Init implements yargs.CommandModule {
    public command = "cli [command]"
    public describe = "make a get HTTP request"

    public builder = (yargs: yargs.Argv) => {
        return yargs
            .options("test", {
                type: "string",
                describe: "This is a test.",
                demandOption: true
            })
            .pkgConf("iniquity", path.join(__dirname))
    }
    public handler(argv: yargs.Arguments) {
        console.log("here")

        if (argv.test === "yes") {
            console.log("yay")
            console.log("yay")
            console.log("yay")
        }
    }
}

const init: yargs.CommandModule = new Init()

if (process.argv.length > 2) yargs.command(init).pkgConf("iniquity").help().argv
export default init
