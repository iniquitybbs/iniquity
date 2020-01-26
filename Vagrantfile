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
        mkdir /sbbs \
        && DEBIAN_FRONTEND=noninteractive apt-get update \
        && apt-get -y install build-essential python ruby wget \
        && apt-get -y install libncurses5-dev libc6-dev libc-dev g++ libnspr4-dev git cvs dosemu \
        && apt-get -y install pkg-config libzip-dev libsdl-kitchensink-dev zip unzip apt-utils \
        && apt-get -y install libmozjs-38-dev libmozjs-52-dev libcap2-dev lrzsz vim nodejs npm \ 
        && wget http://cvs.synchro.net/cgi-bin/viewcvs.cgi/*checkout*/install/terminfo \
        && wget http://cvs.synchro.net/cgi-bin/viewcvs.cgi/*checkout*/install/termcap \
        && tic terminfo && cat termcap >> /etc/termcap \
        && wget 'http://cvs.synchro.net/cgi-bin/viewcvs.cgi/*checkout*/install/GNUmakefile' \
        && make install SYMLINK=1 USE_DOSEMU=1
    SHELL
end
