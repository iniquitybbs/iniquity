#!/usr/bin/env ruby
# encoding: UTF-8

BEGIN {
    unless ENV["INIQUITY_HOME"]
        abort "Please set the INIQUITY_HOME environment variable."
    end
}

require "iniquity"
require "inifile"

class Answer
    def initialize
        self.config = IniFile.load(ENV["INIQUITY_HOME"] + "/answer/answer.ini")
    end

    self.terminal {

    }

    self.web {

    }

    self.api {

    }
end