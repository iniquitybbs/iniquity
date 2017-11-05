
# Must be somedomain.net instead of somedomain.net/, otherwise, it will throw exception.
Net::HTTP.start("somedomain.net") do |http|
    resp = http.get("/flv/sample/sample.flv")
    open("sample.flv", "wb") do |file|
        file.write(resp.body)
    end
end
puts "Done."

Zip::File.open('foo.zip') do |zip_file|
    # Handle entries one by one
    zip_file.each do |entry|
      # Extract to file/directory/symlink
      puts "Extracting #{entry.name}"
      entry.extract(dest_file)

      # Read into memory
      content = entry.get_input_stream.read
    end

    # Find specific entry
    entry = zip_file.glob('*.csv').first
    puts entry.get_input_stream.read
  end
puts "\nTotal ipm packages: #{packages.length}\n\n"
