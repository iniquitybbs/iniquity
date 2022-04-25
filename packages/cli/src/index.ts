import * as path from "path"
import yargs from "yargs"

yargs.commandDir(path.join(__dirname), { recurse: true, exclude: RegExp("/*.spec.*/") }).pkgConf("iniquity")
