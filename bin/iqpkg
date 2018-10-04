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
#   t h e    i n i q u i t y    p a c k a g e    m a n a g e r
#==============================================================================

trap("INT") {exit}

SYSTEM = ENV["INIQUITY_SYSTEM"] || Dir.pwd
ENV["INIQUITY_SYSTEM"] = SYSTEM

require "inifile"
require "github_api"
require "highline"
require "open-uri"
require "zip"
require "yard"
require "rdoc"

# Iniquity Package Manager

artwork = File.join(File.dirname(File.expand_path(__FILE__)), "../artwork/sm!iniq2.asc")

IO.readlines(artwork).each do |line|
    puts line.force_encoding(Encoding::IBM437).encode(Encoding::UTF_8)
end

puts "\niqpkg - The Iniquity BBS Package Manager.\n"

if File.exists?(SYSTEM + "/iniquity.ini")
    CONFIG = IniFile.load(SYSTEM+ "/iniquity.ini")
else
    abort "iqpkg - An Iniquity system must have an iniquity.ini file.\n\n"
end

# Find all available packages across all GitHub sources...
available_packages = []

if CONFIG["iqpkg"]["sources"]
    CONFIG["iqpkg"]["sources"].split(",").each do |source|

        repositories = Github.repos.list user: "#{source}"

        repositories.each do |iqpkg|
            if iqpkg.name.match(/^iqpkg/)
                available_packages.push(iqpkg)
            end
        end
    end
end

installed_modules = []

Dir.chdir SYSTEM
Dir.glob('iqpkg*').select { |iqpkg|
    if File.directory? iqpkg
        installed_modules.push iqpkg
    end
}

# If "install" passed.
if ARGV[0] && ARGV[0] == "install"

    ARGV.shift

    if ARGV[0]
        ARGV.each do |install|
            available_packages.each do |iqpkg|

                if install == iqpkg.name
                    next if Dir.exists? SYSTEM + "/#{iqpkg.name}"

                    # Need to wrap this sequence in a try/catch of some kind...

                    download = open("https://github.com/#{iqpkg.full_name}/archive/master.zip")
                    IO.copy_stream(download, SYSTEM + "/#{iqpkg.name}.zip")

                    Zip::File.open(SYSTEM + "/#{iqpkg.name}.zip") do |zip_file|
                        zip_file.each do |entry|
                            entry.extract(SYSTEM + "/#{entry.name}")
                        end
                    end

                    FileUtils.mv SYSTEM + "/#{iqpkg.name}-master", SYSTEM + "/#{iqpkg.name}"
                    FileUtils.rm SYSTEM + "/#{iqpkg.name}.zip"
                    puts "iqpkg - Installed #{iqpkg.name}.\n\n"
                end
            end
        end
    else
        abort "iqpkg - You must specify an iqpkg package name to install.\n\n"
    end
end

# If "uninstall" passed.
if ARGV[0] && ARGV[0] == "uninstall"

    #ARGV.shift

    if ARGV[0]
        ARGV.each do |uninstall|
            abort "iqpkg - Sorry, uninstall doesn't work yet.\n\n"
        end
    end
end

# If "search" passed.
if ARGV[0] && ARGV[0] == "search"

    #ARGV.shift

    if ARGV[0]
        ARGV.each do |search|
            abort "iqpkg - Sorry, search doesn't work yet.\n\n"
        end
    end
end

# If no options passed.
unless ARGV[0]

    if available_packages.length > 0
        puts "iqpkg - Packages available for installation.\n\n"

        available_packages.each do |iqpkg|
            puts iqpkg.name
            puts iqpkg.description
            puts "https://github.com/#{iqpkg.full_name}/archive/master.zip"
            puts ""
        end
    end

    if installed_modules.length > 0
        puts "iqpkg - Packages currently installed.\n\n"

        installed_modules.each do |iqpkg|
            puts iqpkg
        end
    end
end
