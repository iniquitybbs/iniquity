#!/usr/bin/env ruby
# encoding: UTF-8

BEGIN {
    unless ENV["INIQUITY_HOME"]
        abort "Please set the INIQUITY_HOME environment variable."
    end
}

class Terminal < EM::Connection

    def initialize
        super
        send_data "\nIniquity (c) #{DateTime.now.year} Dan Stephenson [ispyhumanfly]\n"
        send_data "\nEncoding: UTF_8\n\n"
    end

    def post_init

        puts "-- someone connected to the echo server!"

        IO.readlines("./modules/welcome.ans").each do |line|
            send_data line.force_encoding(Encoding::IBM437).encode(Encoding::UTF_8)
        end

        def wrap(s, width=78)
            s.gsub(/(.{1,#{width}})(\s+|\Z)/, "\\1\n")
        end

        send_data wrap("Eu duis consequat laborum sunt incididunt deserunt dolor nisi eu occaecat commodo ad. Reprehenderit aute laboris Lorem ex cillum ipsum laborum irure excepteur sint do pariatur Lorem sit. Aliqua ipsum dolor quis ea. Tempor non ipsum consequat proident fugiat ad id laboris aliquip amet magna.\n", 78)
    end

    def receive_data data
        #send_data ">>>you sent: #{data}"
        close_connection if data =~ /quit|q/i
    end

    def unbind
        puts "-- someone disconnected from the echo server!"
    end
end

class Web < EM::Connection
    def initialize
        super
    end
    def post_init
    end
    def receive_data
    end
    def unbind
    end
end

class API < EM::Connection
    def initialize
        super
    end
    def post_init
    end
    def receive_data
    end
    def unbind
    end
end
