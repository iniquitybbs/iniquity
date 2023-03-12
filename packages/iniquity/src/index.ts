#!/usr/bin/env node

import yargs from "yargs"

import { init, runtime, term, app } from "./commands"

yargs.command(init).command(runtime).command(term).command(app).demandCommand().help().argv
