#!/usr/bin/env node

import yargs from "yargs"

import { init, runtime, term } from "./commands"

yargs.command(init).command(runtime).command(term).demandCommand().help().argv
