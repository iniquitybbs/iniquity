[![Code Climate](https://codeclimate.com/github/dwyl/esta/badges/gpa.png)](https://codeclimate.com/github/iniquitybbs/iniquity)

[![Build Status](https://travis-ci.org/iniquitybbs/iniquity.png?branch=master)](https://travis-ci.org/iniquitybbs/iniquity)

[![Gem Version](https://badge.fury.io/rb/iniquity.png)](https://badge.fury.io/rb/iniquity)

# Iniquity

This is the re-imagining of the iconic Iniquity Bulletin Board Software. It is written in Ruby, and has been radically re-invented as a modular system. At present, Iniquity can be installed onto a computer system via RubyGems, uses a simple .ini configuration format, and provides telnet and restful interfaces. A new or experienced Sysop can create an Iniquity BBS easily using the provided utilities.

<p align="left">
    <img src="https://github.com/iniquitybbs/iniquity/blob/master/artwork/SyncTERM_-_Iniquity_BBS.png?raw=true" height="300">
</p>

## Key Ideas & Features

1. Cross-platform. Runs anywhere Ruby runs.
2. Iniquity has been re-imagined as a collection of modules.
    - Create and extend your BBS using Iniquity's package manager.
    - Install/customize/remove popular BBS packages easily.
3. Configurable WFC screens (Waiting For Caller)
    - Supports multiple WFCs.
    - Easily switch between WFCs using the tab key.
4. Network Iniquity with other Iniquity BBSs easily.
    - By its core design, an encrypted network hosts the BBS.
        - Easily network message bases.
        - Easily network file bases.
        - Easily network users.
5. Broadcast messages to IRC, Discord and iMessages.

## Supported Platforms

Labore ipsum laborum mollit adipisicing eu incididunt ipsum cillum id Lorem. Officia et qui sint laborum pariatur voluptate. Incididunt labore culpa occaecat qui consequat sint. Velit irure dolor ut anim ad laboris. Quis cillum dolor fugiat ad Lorem eiusmod magna ullamco do magna. Laboris do aliqua sint duis enim sunt exercitation id voluptate.
### macOS

    brew install sqlite3 sqlite3-dev make gcc g++ ruby ruby-build

### Ubuntu Linux

    apt-get install libsqlite3-dev ruby rub-dev git

### Windows

    Coming soon...

## Installation

Install Iniquity from RubyGems...

    gem install iniquity

Inside of a new directory, initialize it as an Iniquity system...

    iniquity init

Next, install the "eternity" package to help get things going...

    iqpkg install eternity

Now start your new Iniquity BBS!

    iniquity

You can connect to your Iniquity BBS over Telnet...

    iqterm localhost 3023

Or retrieve BBS resources from Iniquity's RESTful service...

    curl -L http://localhost:3080/v0/getOnlineUsers.json

## Documentation

https://www.rubydoc.info/github/iniquitybbs/iniquity/master

## Issues

https://github.com/iniquitybbs/iniquity/issues

## Authors

* Dan Stephenson (ispyhumanfly)
* Lawrence Manuel (smooth)

## Contributors

* Jack Plash
* Spec
* Darkwing
* Mike Pike
* Mike Fricker

## Copyright

(c) 1991 - 2018 The Iniquity BBS Project