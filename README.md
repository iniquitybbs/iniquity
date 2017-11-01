[![Code Climate](https://codeclimate.com/github/dwyl/esta/badges/gpa.png)](https://codeclimate.com/github/iniquitybbs/iniquity)

[![Build Status](https://travis-ci.org/iniquitybbs/iniquity.png?branch=master)](https://travis-ci.org/iniquitybbs/iniquity)

[![Gem Version](https://badge.fury.io/rb/iniquity.png)](https://badge.fury.io/rb/iniquity)


# Iniquity
A re-imagining of the iconic BBS software.

<p align="left">
    <img src="https://raw.githubusercontent.com/bertrandom/press-enter/gh-pages/iniquity.png" height="300">
</p>

## Getting Started
This software is highly experimental. Right now only the telnet service really works. Soon I'll have modules loading and then things will really get cooking. I'd like to have the
core mechanics ironed out before I elaborate on other features.

Install Iniquity...

    gem install iniquity

Install the "simplebbs" ipm package to get started...

    ipm simplebbs

Start Iniquity...

    iniquity ./simplebbs

Connect to your BBS over Telnet...

    telnet localhost 3023

Connect to your BBS over Http...

    http://localhost:3080

Retrieve JSON resources over Iniquity's RESTful service...

    http://localhost:3082/v0/getOnlineUsers.json

## Public Scratch Pad
Mostly rough notes at this point. I will expand on these ideas, turning this portion of the README into a formal whitepaper, or design document...

### Core Concepts
1. A modern BBS should be as easy to setup for the novice sysop as it is for the novice user.
2. Every module should be treated as a unique component. Each module component contains proper
instructions for its functionality. Every module can be displayed over a Terminal or Web interface.

### Legacy Backlog
As I read about Iniquity, its users, its sysops and past attempts to revive the project, I actively
1. Have multiple WFC screens.
2. Allow for custom WFC screens (use tab to rotate through them)
3.

### Feature Thoughts...

1. Rumors that allow anonymous replies as well. That could be fun. :)
2. I like x/84 and how you can use tags for "message" areas.
3. Sysop pagers should do things like send emails or push notifications to phones, not just play ansi music in a terminal...
4. The ability to "share" messages/files. (The ability for users to make sure that what they post/upload/download is private, as a converse.)
    - This would mean that users could connect their social media accounts to the bbs.
    - This would also mean that users could opt out of message sharing or "keep private" any messages/files/information on the bbs that includes their name.
5. A sysop/developer should be able to develop Iniquity modules in a "standalone mode". Basically, how it runs in their own environment outside of the bbs is the same as if it was connected.
    -  Something like `iniquity /path/to/module/dir --standalone`

## License
MIT
