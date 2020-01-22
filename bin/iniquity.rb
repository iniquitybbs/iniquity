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

require "rubygems"
require "commander"
require "yard"


class Iniquity
    include Commander::Methods

    def run
        program :name, 'Iniquity'
        program :version, '3.0.0'
        program :description, 'Stupid command that prints foo or bar.'
        program :help, 'Author', 'TJ Holowaychuk <tj@vision-media.ca>'

        command :init do |c|
            c.syntax = 'init'
            c.description = 'Displays foo'
            c.action do |args, options|
                say 'foo'
            end
        end

        command :install do |c|
            c.syntax = 'foobar foo'
            c.description = 'Displays foo'
            c.action do |args, options|
                say 'foo'
            end
        end
    end
end

Iniquity.new.run if $0 == __FILE__