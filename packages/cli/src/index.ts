#!/usr/bin/env node

import yargs from "yargs"

import { init, term, server } from "./commands"

yargs.command(init).command(term).command(server).demandCommand().help().argv
