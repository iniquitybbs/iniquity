[![Code Climate](https://codeclimate.com/github/dwyl/esta/badges/gpa.png)](https://codeclimate.com/github/iniquitybbs/iniquity)

[![Build Status](https://travis-ci.org/iniquitybbs/iniquity.png?branch=master)](https://travis-ci.org/iniquitybbs/iniquity)

[![Gem Version](https://badge.fury.io/rb/iniquity.png)](https://badge.fury.io/rb/iniquity)

# Iniquity
A re-imagining of the iconic BBS software.

<p align="left">
    <img src="http://disengage.ca/wp-content/uploads/2011/07/Iniquity_BBS_WFC1.jpg" height="300">
</p>

<p align="left">
    <img src="https://raw.githubusercontent.com/bertrandom/press-enter/gh-pages/iniquity.png" height="300">
</p>

## Key Features
1. Cross-platform. Runs anywhere Ruby runs.
2. Iniquity has been re-imagined as modular system.
    - Create your BBS using Iniquity's 'ipm' packages.
    - Install/customize/remove ipm packages easily.

## Getting Started
This software is highly experimental. Right now only the telnet service really works.

Install Iniquity from RubyGems...

    gem install iniquity

Create a directory for your new BBS and initialize it...

    mkdir MyBBS ; cd MyBBS
    iniquity init

Install the "examples" ipm package to help get started...

    ipm examples

Start Iniquity...

    iniquity examples

Connect to your BBS over Telnet...

    telnet localhost 3023

Connect to your BBS over Http...

    http://localhost:3080

Retrieve BBS resources from Iniquity's RESTful service...

    http://localhost:3082/v0/getOnlineUsers.json

## Issues
https://github.com/iniquitybbs/iniquity/issues

## License
MIT
