#!/usr/bin/env node

import yargs from "yargs"
import init from "./commands/init"
import start from "./commands/start"
import stop from "./commands/stop"
import status from "./commands/status"
import term from "./commands/term"

yargs.command(init).command(start).command(stop).command(status).command(term).demandCommand().help().argv
