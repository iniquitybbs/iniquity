#!/usr/bin/env ruby
# encoding: UTF-8

#-$a. ------------------ .a$ ---------------------------- %$!, ----------------%
# `$¸   .%$$^¸$$aa.     .¸$`        .        .a$a$$.      `¸$%  $a$.        .
#-.aaa$ $$$$'- $$$$$.- $aaa. -.a%$^"$$aa -- .$$$$$'- $$a. $aaa. `$,$ ----------%
#;$$$$',a$a$  d$%$$$$$,'$$$$;$$$$$  $$$$$., $$%$$"  d$a$$ '$$$$; $$$   .a%$  $$a
#:$$$$;$$$$%; Z$$$$$$$$;$$$$:$$$$$. $$$$^$,;$$&$$   Z$$$$,;$$$$.a$$$a..$$$   $$$
#.$$$$ `$$$$.  $$$%$$$' $$$$.`$$$$  $$%$$$$ `$$$$.   $%$$$ $$$$""$$$" $$$$:  a$$
# `$$$a.$$%$   $$$$$$';a$$$`  `¸$$aa$$$$&$': `$$$$a. $$$$'a$$$`.$$'$  $$$$;  $$$
#%-----.------ $$$$'--------------- $$%$$' -- `¸$$$$$%$¸' ---- $$¸$a. `"$&$$#$%$
#dz      .   .:'¸'     .        .   $$$$'     .        .       `¸$$$$y.     `$$&
#%--------- a`-----------.--------- $$¸' -----.------------.---------------- $$$
#   .      !a    . .    .      .   .:'   .  .                  .        .:.a$$$¸
#.      .  '$a,          .        a` .   'a          .   .             s` .  . .
#      .    ¸$Aa         .       !a       a!      .    .         ..   %s      .s
#   .         ¸¸'     . .        '$$Aa.aA$$'        . .               `!$%a.a%#$
#==============================================================================
#   t h e    i n i q u i t y    b u l l e t i n    b o a r d    s y s t e m
#==============================================================================

trap("INT") {exit}

SYSTEM = ENV["INIQUITY_SYSTEM"] || Dir.pwd
ENV["INIQUITY_SYSTEM"] = SYSTEM

require "inifile"
require "thin"
require "socksify"
require "sqlite3"
require "ansi"
require "em-http-server"
require "yard"

##
# Iniquity Telnet Service

class Telnet < EM::Connection
    # @api private

    def initialize
        super

        # Disable line-wrapping (SyncTerm does not honor, careful!)
        send_data "\x1b[7l"

        # Save xterm icon and window title on stack.
        # send_data "\x1b[22;0"

        send_data "\n #{ANSI::Code.white}Iniquity BBS :: #{ANSI::Code.red }Build 0.0.20 - #{ANSI::Code.blue_on_white}Telnet Connection!\n"

        artwork = File.join(File.dirname(File.expand_path(__FILE__)), "../artwork/we-iniq3.ans")

        IO.readlines(artwork).each do |line|
            EM.next_tick { send_data line }
        end
    end

    def post_init
        puts "iniquity - Someone connected to the system..."
    end

    def receive_data data
        #send_data ">>>you sent: #{data}"
        close_connection if data =~ /quit|q|goodbye|g|logoff|l/i

    end

    def unbind
        puts "iniquity - Someone disconnected from the system..."
    end
end

class Http < EM::HttpServer::Server

    def process_http_request
          puts  @http_request_method
          puts  @http_request_uri
          puts  @http_query_string
          puts  @http_protocol
          puts  @http_content
          puts  @http[:cookie]
          puts  @http[:content_type]
          # you have all the http headers in this hash
          puts  @http.inspect

          response = EM::DelegatedHttpResponse.new(self)
          response.status = 200
          response.content_type 'text/html'
          response.content = 'It works'
          response.send_response
    end

    def http_request_errback e
      # printing the whole exception
      puts e.inspect
    end
end

##
# Rest Service Class

class Rest < EM::Connection

    def initialize
        super
    end
    def post_init
    end
    def receive_dat
    end
    def unbind
    end
end

### Iniquity Bulletin Board System

artwork = File.join(File.dirname(File.expand_path(__FILE__)), "../artwork/sm!iniq2.asc")

IO.readlines(artwork).each do |line|
    puts line.force_encoding(Encoding::IBM437).encode(Encoding::UTF_8)
end

DB = SQLite3::Database.new "#{SYSTEM}/iniquity.db"

# If "init" passed...
if ARGV[0] && ARGV[0] == "init"
    new_system_file = File.new(SYSTEM + "/iniquity.ini", "w")
    new_system_file.puts "[profile]\nname=NewBBS\n"
    new_system_file.puts "\n[iqpkg]\nsources=iniquitybbs\n"
    new_system_file.puts "\n[telnet]\nenabled=yes\n"
    new_system_file.puts "port=3023\n"
    new_system_file.puts "\n[http]\nenabled=yes\n"
    new_system_file.puts "port=3080\n"    
    new_system_file.puts "\n[rest]\nenabled=yes\n"
    new_system_file.puts "port=3443\n"
    new_system_file.close

    DB.execute <<-SQL
        create table system (
            name varchar(30),
            val int
        );
    SQL
 
    abort "\niniquity - Initialized directory as a new system.\n\n"
end

if File.exists?(SYSTEM + "/iniquity.ini")
    CONFIG = IniFile.load(SYSTEM+ "/iniquity.ini")
else
    abort "iniquity - An iniquity system must have an iniquity.ini file.\n\n"
end

puts "\niniquity - Starting " + CONFIG["profile"]["name"] + "...\n"

if CONFIG["tor"]["enabled"] == "yes"
    TCPSocket::socks_server = CONFIG["tor"]["address"]
    TCPSocket::socks_port = CONFIG["tor"]["port"]
end

EM.run do

    ### Events

    EM.add_periodic_timer(60 * 3) do
        puts "iniquity - Periodic timed event example..."
    end

    ### Services

    CONFIG.each_section do |section|

        if section == "telnet"
            if CONFIG[section]["enabled"] == "yes"

                puts "iniquity - Telnet service started."
                EM.start_server "0.0.0.0", CONFIG[section]["port"], Telnet
            end
        end

        if section == "http"
            if CONFIG[section]["enabled"] == "yes"

                puts "iniquity - HTTP service started."
                EM.start_server "0.0.0.0", CONFIG[section]["port"], Http
            end
        end

        if section == "rest"
            if CONFIG[section]["enabled"] == "yes"

                puts "iniquity - Rest service started."
                EM.start_server "0.0.0.0", CONFIG[section]["port"], Rest
            end
        end
    end
end
