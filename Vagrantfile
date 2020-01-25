# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

    config.DEFAULT_SERVER_URL.replace('https://vagrantcloud.com')

    config.vm.box = "hashicorp/bionic64"
    config.vm.box_version = "1.0.282"
    config.vm.network "forwarded_port", guest: 8080, host: 8080
    config.vm.network "public_network"
 
    config.vm.provider "virtualbox" do |vb|
        vb.memory = "2048"
    end
  
    config.vm.provision "shell", inline: <<-SHELL
        apt-get update
        apt-get install -y nodejs
        apt-get install -y npm
        apt-get install -y ffmpeg
        apt-get install -y imagemagick
        apt-get install -y curl
        apt-get install -y texlive-base
        apt-get install -y pandoc
    SHELL
end
