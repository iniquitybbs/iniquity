
require "rubygems"

Gem::Specification.new do |s|
    s.name        = "iniquity"
    s.version     = "0.0.2"
    s.summary     = "A re-imagining of the iconic BBS software."
    s.description = "Iniquity is a bulletin board software package written in Ruby."
    s.authors     = ["Dan Stephenson"]
    s.email       = "ispyhumanfly@gmail.com"
    s.require_paths = ["./bin", "./lib", "./examples", "./docs"]
    s.executables << "iniquity"
    s.homepage    = "https://iniquitybbs.github.io"
    s.metadata = { "issue_tracker" => "https://github.com/iniquitybbs/iniquity/issues" }
    s.license     = "MIT"
end