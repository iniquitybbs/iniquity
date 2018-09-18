begin
    require 'rspec/core/rake_task'
    RSpec::Core::RakeTask.new(:spec)
    task :default => :spec

rescue LoadError
end

begin
    require "yard"
    YARD::Rake::YardocTask.new do |t|
        t.stats_options = ["--list-undoc"]
    end
    task :default => :yard

rescue LoadError
end