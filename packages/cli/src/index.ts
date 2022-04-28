#!/usr/bin/env node

import * as path from "path"
import yargs from "yargs"
import init from "./commands/init"
import start from "./commands/start"
import stop from "./commands/stop"
import status from "./commands/status"

yargs.command(init).command(start).command(stop).command(status).demandCommand().help().argv
