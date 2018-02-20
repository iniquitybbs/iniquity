[![Code Climate](https://codeclimate.com/github/dwyl/esta/badges/gpa.png)](https://codeclimate.com/github/iniquitybbs/iniquity)

[![Build Status](https://travis-ci.org/iniquitybbs/iniquity.png?branch=master)](https://travis-ci.org/iniquitybbs/iniquity)

[![Gem Version](https://badge.fury.io/rb/iniquity.png)](https://badge.fury.io/rb/iniquity)


# Iniquity
This is the re-imagining of the iconic Iniquity Bulletin Board Software. It is written in Ruby, and has been radically re-invented as a modular system. At present, Iniquity can be installed onto a computer system via RubyGems, uses a simple .ini configuration format, and provides telnet and restful interfaces. A new or experienced Sysop can create an Iniquity BBS easily using the provided utilities.

<p align="left">
    <img src="http://disengage.ca/wp-content/uploads/2011/07/Iniquity_BBS_WFC1.jpg" height="300">
</p>

<p align="left">
    <img src="https://raw.githubusercontent.com/bertrandom/press-enter/gh-pages/iniquity.png" height="300">
</p>

## Key Features
1. Cross-platform. Runs anywhere Ruby runs.
2. Iniquity has been re-imagined as a collection of modules.
    - Create and extend your BBS using Iniquity's collection of core modules.
    - Install/customize/remove popular BBS modules easily.

## Getting Started

Install Iniquity from RubyGems...

    gem install iniquity

Inside of a new directory, initialize it as an Iniquity BBS...

    iniquity init

Next, install the "core-modules" package to help get things going...

    iqmod install core-modules

Now start your new Iniquity BBS!

    iniquity

You can connect to your Iniquity BBS over Telnet...

    telnet localhost 3023

Or retrieve BBS resources from Iniquity's RESTful service...

    curl -L http://localhost:3080/v0/getOnlineUsers.json

## Issues
https://github.com/iniquitybbs/iniquity/issues

## Author
Dan Stephenson (ispyhumanfly)

## License
MIT
