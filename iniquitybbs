#!/usr/bin/env ruby
# encoding: UTF-8

require "thin"
require "highline"

require "./services/web.rb"
require "./services/telnet.rb"
require "./services/rest.rb"

trap("INT") {exit}

EM.run do

    EM.add_periodic_timer(10) do
        puts "Iniquity: listening..."
    end

    EM.start_server "0.0.0.0", 3023, Telnet
    EM.start_server '0.0.0.0', 3080, Web
    EM.start_server '0.0.0.0', 3081, Rest

end
