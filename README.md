# Iniquity

This is the re-imagining of the iconic Iniquity Bulletin Board Software.

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=alert_status)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=security_rating)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=sqale_index)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=iniquitybbs_iniquity&metric=code_smells)](https://sonarcloud.io/dashboard?id=iniquitybbs_iniquity)

## Key Ideas & Features

1. A cloud-native and highly portable approach to the BBS architecture.
2. Cross-platform. Runs anywhere Ruby and Docker or Vagrant can run.
3. Iniquity has been re-imagined as a collection of packages (modules).
    - Create and extend your BBS using Iniquity's package manager.
    - Install/customize/remove BBS packages easily.
4. Configurable WFC screens (Waiting For Caller)
    - Supports multiple WFCs.
    - Easily switch between WFCs using the tab key.
5. Network Iniquity with other Iniquity BBSs easily.
    - By its core design, an encrypted network hosts the BBS.
        - Easily network message bases.
        - Easily network file bases.
        - Easily network users.
6. Custom code your BBS using the Iniquity SDK available in multiple languages.
    - TypeScript
    - Ruby (_planned)
    - Python (_planned)

## Setup

![Docker Automated Build](https://img.shields.io/docker/automated/iniquitybbs/iniquity)
![Gem](https://img.shields.io/gem/v/iniquity)

## Development

Iniquity BBS development can be achieved platform that can run Ruby, NodeJS, TypeScript and Docker containers.

### macOS

    brew install sqlite3 sqlite3-dev make gcc g++ ruby ruby-build docker

### Ubuntu Linux

    apt-get install build-essentials libsqlite3-dev ruby ruby-dev git docker

### Windows

    Should work, we just don't test on Windows yet. :(

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

<https://www.rubydoc.info/github/iniquitybbs/iniquity/master>

## Issues

<https://github.com/iniquitybbs/iniquity/issues>

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

(c) 1991 - 2020 The Iniquity BBS Community
