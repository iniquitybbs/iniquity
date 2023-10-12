#!/usr/bin/env node

import yargs from "yargs"

import { init, term, app } from "./commands"

yargs.command(init).command(term).command(app).demandCommand().help().argv
