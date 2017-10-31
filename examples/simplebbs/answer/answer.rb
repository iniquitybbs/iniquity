#!/usr/bin/env ruby
# encoding: UTF-8

BEGIN {
    unless ENV["INIQUITY_HOME"]
        abort "Please set the INIQUITY_HOME environment variable."
    end
}

require "iniquity"

class Answer
    def initialize
    end

    self.on_connection {

    }
end