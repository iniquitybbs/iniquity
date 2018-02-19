# encoding: UTF-8

Gem::Specification.new do |s|
    s.name        = "iniquity"
    s.version     = "0.0.14"
    s.summary     = "Iniquity BBS"
    s.description = "A re-imagining of the iconic BBS software."
    s.authors     = ["Dan Stephenson"]
    s.email       = "ispyhumanfly@gmail.com"
    s.require_paths = ["./doc", "./artwork"]
    s.executables << "iniquity"
    s.executables << "ipm"
    s.homepage    = "http://iniquitybbs.org"
    s.metadata = { "issue_tracker" => "https://github.com/iniquitybbs/iniquity/issues" }
    s.license     = "MIT"
end