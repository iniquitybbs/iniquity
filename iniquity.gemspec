# encoding: UTF-8

Gem::Specification.new do |s|
    s.name        = "iniquity"
    s.version     = "0.0.20"
    s.summary     = "Iniquity BBS"
    s.description = "A re-imagining of the iconic BBS software."
    s.authors     = ["Dan Stephenson", "Lawrence Manuel"]
    s.email       = "ispyhumanfly@gmail.com"
    s.files = ["./artwork/sm!iniq2.asc", "./artwork/we-iniq3.ans"]
    s.executables << "iniquity"
    s.executables << "iqpkg"
    s.executables << "iqterm"
    s.homepage    = "http://iniquitybbs.org"
    s.metadata = { "issue_tracker" => "https://github.com/iniquitybbs/iniquity/issues" }
    s.license     = "MIT"
    s.add_dependency("rake")
    s.add_dependency("json")
    s.add_dependency("eventmachine")
    s.add_dependency("em-http-server")
    s.add_dependency("highline")
    s.add_dependency("thin")
    s.add_dependency("inifile")
    s.add_dependency("rspec")
    s.add_dependency("git")
    s.add_dependency("github_api")
    s.add_dependency("socksify")
    s.add_dependency("rubyzip")
    s.add_dependency("zip")
    s.add_dependency("sqlite3")
    s.add_dependency("ansi")
end