#!/usr/bin/env node

import * as path from "path"
import yargs from "yargs"
import init from "./commands/init"
import start from "./commands/start"

yargs.command(init).command(start).help().argv
