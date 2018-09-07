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
    - Create and extend your BBS using Iniquity's collection of core modules.
    - Install/customize/remove popular BBS modules easily.
3. Configurable WFC screens (Waiting For Caller).
    - Supports multiple WFCs.
    - Easily switch between WFCs using the tab key.
4. Network Iniquity with other Iniquity BBSs easily.
    - By its core design, an encrypted network hosts the BBS.
        - Easily network message bases.
        - Easily network file bases.
        - Easily network users.

## Getting Started

Install Iniquity from RubyGems...

    gem install iniquity

Inside of a new directory, initialize it as a new Iniquity BBS...

    iniquity init

Next, install the "iq-examples" package to help get things going...

    iqpkg install iq-examples

Now start your new Iniquity BBS!

    iniquity

You can connect to your Iniquity BBS over Telnet...

    telnet localhost 3023

Or retrieve BBS resources from Iniquity's RESTful service...

    curl -L http://localhost:3080/v0/getOnlineUsers.json

# Documentation
https://github.com/iniquitybbs/iniquity/doc/README_md.html

## Issues
https://github.com/iniquitybbs/iniquity/issues

## Author
Dan Stephenson (ispyhumanfly)

## Contributors
    Dan Stephenson
    Lawerence Manuel Tony
    Jack Plash
    Spec
    Mike Pike
    Mike Fricker

## License
MIT