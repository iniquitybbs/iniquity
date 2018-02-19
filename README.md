[![Code Climate](https://codeclimate.com/github/dwyl/esta/badges/gpa.png)](https://codeclimate.com/github/iniquitybbs/iniquity)

[![Build Status](https://travis-ci.org/iniquitybbs/iniquity.png?branch=master)](https://travis-ci.org/iniquitybbs/iniquity)

[![Gem Version](https://badge.fury.io/rb/iniquity.png)](https://badge.fury.io/rb/iniquity)


# Iniquity
This is the re-imagining of the iconic Iniquity Bulletin Board Software. It has been written from scratch in Ruby, and radically re-invented as a modular BBS system. It is highly experimental, and not very functional (yet). At present, Iniquity can be installed onto a computer system via RubyGems, uses a simple .ini configuration format, and provides telnet and restful interfaces. A new or experienced Sysop can create a BBS easily using its various utilities.

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

Next, install the "iqdefaults" module to help get things going...

    iqmod install iqdefaults

Now start Iniquity!

    iniquity

You can connect to your BBS over Telnet...

    telnet localhost 3023

Or retrieve BBS resources from Iniquity's RESTful service...

    http://localhost:3080/v0/getOnlineUsers.json

## Issues
https://github.com/iniquitybbs/iniquity/issues

## License
MIT
