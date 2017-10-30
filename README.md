# Iniquity
A re-imagining of the iconic bbs software.

# Basics
Install Iniquity...

    gem install iniquity

Start Iniquity BBS...

    ./iniquity

Connect to your BBS over Telnet...

    telnet localhost 3023

Connect to your BBS over the Web...

    http://localhost:3080

Create modules for your BBS using Iniquity's RESTful API...

    http://localhost:3443/rest/v0/getOnlineUsers.json

Or using Iniquity's Ruby Gem...

    require "iniquity"

    class MyModule < Iniquity::Module do
        def initialize
            super
        end

        # Insert your functions...

    end

    MyModule.start(:supports => ["telnet", "web"])

# White Paper
Tempor ipsum duis quis sit minim exercitation eu elit eu minim eiusmod deserunt. Mollit et eiusmod commodo occaecat ipsum. Sunt et esse tempor aliquip commodo ea ex nisi ut ex pariatur eu mollit aliquip. Duis nisi fugiat quis voluptate in ipsum incididunt quis. Consequat cupidatat Lorem est pariatur tempor.

Qui esse enim incididunt sint nisi officia deserunt aliqua fugiat minim aliquip quis. Sunt consectetur eu sunt laborum id pariatur duis esse. Consequat laboris est esse ullamco Lorem laborum non proident consectetur minim deserunt. Consectetur id consequat tempor dolor velit voluptate sunt cillum incididunt irure sunt.

# A History of Iniquity BBS
What I'm attempting here is to list key people within Iniquity's history. This section should be expanded to link to real information.

## Mike Fricker
Labore duis eu laborum sunt cillum qui veniam anim ex culpa. Nulla nulla dolor tempor cillum duis consectetur enim ut elit do ad fugiat duis. Adipisicing sit do nisi exercitation ad dolor aliqua excepteur aute laboris deserunt incididunt adipisicing sunt. Velit commodo aliquip consectetur veniam nostrud nulla eiusmod. Amet magna ullamco duis et eu irure est commodo.
## Mike Pike
Ipsum sunt cupidatat velit quis. Mollit commodo anim est Lorem. Anim esse proident magna officia. Magna reprehenderit nulla officia aute consequat veniam commodo et proident reprehenderit occaecat.
## Jack Phlash
Velit velit minim voluptate pariatur sunt aliquip consequat do dolor nostrud qui nisi. Aute consequat ullamco nisi cupidatat pariatur do ipsum reprehenderit nisi et voluptate officia laboris. Nisi dolor magna irure eu adipisicing minim officia enim officia laborum reprehenderit sit ullamco cupidatat. Id est eu nisi qui ipsum ex laboris id adipisicing proident.
# Legacy Backlog
As I read about Iniquity, its users, its sysops and past attempts to revive the project, I actively
1. Have multiple WFC screens.
2. Allow for custom WFC screens (use tab to rotate through them)
3.

# License
MIT
