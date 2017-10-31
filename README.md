[![Gem Version](https://badge.fury.io/rb/iniquity@2x.png)](https://badge.fury.io/rb/iniquity)

# Iniquity
A re-imagining of the iconic BBS software.

## Synopsis
Iniquity is in early alpha. This package is highly experimental, and,should only be used by the most daring...

Install Iniquity...

    gem install iniquity

Start Iniquity...

    iniquity /path/to/bbsfiles

Connect to your BBS with a Terminal...

    telnet localhost 3023

or

    ssh anonymous@localhost 3022

Connect to your BBS over the Web...

    http://localhost:3080

Access BBS resources using Iniquity's RESTful API...

    http://localhost:3082/v0/getOnlineUsers.json

## White Paper
Mostly rough notes at this point. I will expand on these ideas, turning this portion of the README into a formal whitepaper, or design document...

### Core Concepts
1. A modern BBS should be as easy to setup for the novice sysop as it is for the novice user.
2. Every module should be treated as a unique component. Each module component contains proper
instructions for its functionality. Every module can be displayed over a Terminal or Web interface.

## A History of Iniquity BBS
What I'm attempting here is to list key people within Iniquity's history. This section should be expanded to link to real information.

### Mike Fricker
Labore duis eu laborum sunt cillum qui veniam anim ex culpa. Nulla nulla dolor tempor cillum duis consectetur enim ut elit do ad fugiat duis. Adipisicing sit do nisi exercitation ad dolor aliqua excepteur aute laboris deserunt incididunt adipisicing sunt. Velit commodo aliquip consectetur veniam nostrud nulla eiusmod. Amet magna ullamco duis et eu irure est commodo.
### Mike Pike
Ipsum sunt cupidatat velit quis. Mollit commodo anim est Lorem. Anim esse proident magna officia. Magna reprehenderit nulla officia aute consequat veniam commodo et proident reprehenderit occaecat.
### Jack Phlash
Velit velit minim voluptate pariatur sunt aliquip consequat do dolor nostrud qui nisi. Aute consequat ullamco nisi cupidatat pariatur do ipsum reprehenderit nisi et voluptate officia laboris. Nisi dolor magna irure eu adipisicing minim officia enim officia laborum reprehenderit sit ullamco cupidatat. Id est eu nisi qui ipsum ex laboris id adipisicing proident.
## Legacy Backlog
As I read about Iniquity, its users, its sysops and past attempts to revive the project, I actively
1. Have multiple WFC screens.
2. Allow for custom WFC screens (use tab to rotate through them)
3.

## Feature Ideas

1. Rumors that allow anonymous replies as well. That could be fun. :)
2. I like x/84 and how you can use tags for "message" areas.
3. Sysop pagers should do things like send emails or push notifications to phones, not just play ansi music in a terminal...
## License
MIT
