[![Code Climate](https://codeclimate.com/github/dwyl/esta/badges/gpa.png)](https://codeclimate.com/github/iniquitybbs/iniquity)

[![Build Status](https://travis-ci.org/iniquitybbs/iniquity.png?branch=master)](https://travis-ci.org/iniquitybbs/iniquity)

[![Gem Version](https://badge.fury.io/rb/iniquity.png)](https://badge.fury.io/rb/iniquity)


# Iniquity
This is the re-imagining of the iconic Iniquity Bulletin Board Software. It has been written from scratch in Ruby, and radically re-invented as a modular BBS system. It is highly experimental, and not very functional (yet). At present, Iniquity can be installed onto a computer system via RubyGems or GitHub, uses a simple .ini configuration format, provides telnet and restful services, and is easily extended using its package management system.

<p align="left">
    <img src="http://disengage.ca/wp-content/uploads/2011/07/Iniquity_BBS_WFC1.jpg" height="300">
</p>

<p align="left">
    <img src="https://raw.githubusercontent.com/bertrandom/press-enter/gh-pages/iniquity.png" height="300">
</p>

## Key Features
1. Cross-platform. Runs anywhere Ruby runs.
2. Iniquity has been re-imagined as a collection of packages.
    - Create and extend your BBS using Iniquity's packaging system.
    - Install/customize/remove popular BBS packages easily.

## Getting Started

Install Iniquity from RubyGems...

    gem install iniquity

Inside of a new directory, initialize it as an Iniquity BBS...

    iniquity init

Install the "iq1clone" ipm package to help get started...

    ipm install iq1clone

Start Iniquity...

    iniquity

Connect to your BBS over Telnet...

    telnet localhost 3023

Retrieve BBS resources from Iniquity's RESTful service...

    http://localhost:3080/v0/getOnlineUsers.json

## Issues
https://github.com/iniquitybbs/iniquity/issues

## License
MIT
