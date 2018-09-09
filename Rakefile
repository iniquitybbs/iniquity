begin
    require 'rspec/core/rake_task'
    RSpec::Core::RakeTask.new(:spec)
    task :default => :spec

rescue LoadError
end

begin
    require "yard"
    YARD::Rake::YardocTask.new(:yard) do |t|
    end
    task :default => :yard

rescue LoadError
end