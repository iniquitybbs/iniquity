
require "rubygems"

Gem::Specification.new do |s|
    s.name        = "iniquity"
    s.version     = "3.0.0"
    s.date        = DateTime.now
    s.summary     = "A re-imagining of the iconic BBS software."
    s.description = "A re-imagining of the iconic BBS software."
    s.authors     = ["Dan Stephenson"]
    s.email       = "ispyhumanfly@gmail.com"
    s.files       = ["bin/iniquity", "lib/iniquity.rb"]
    s.executables << "iniquity"
    s.homepage    = "http://rubygems.org/gems/iniquity"
    s.license     = 'MIT'
  end