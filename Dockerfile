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
#                 t h e    i n i q u i t y    r u n t i m e
#==============================================================================

FROM ubuntu:latest as Iniquity
LABEL name="Iniquity"
LABEL version="0.0.20"

WORKDIR /sbbs

RUN DEBIAN_FRONTEND=noninteractive apt-get update \
    && apt-get -y install build-essential python ruby wget \
    && apt-get -y install libncurses5-dev libc6-dev libc-dev g++ libnspr4-dev git cvs dosemu \
    && apt-get -y install pkg-config libzip-dev libsdl-kitchensink-dev zip unzip apt-utils \
    && apt-get -y install libmozjs-38-dev libmozjs-52-dev libcap2-dev libcap2-bin lrzsz vim nodejs npm \ 
    && wget http://cvs.synchro.net/cgi-bin/viewcvs.cgi/*checkout*/install/terminfo \
    && wget http://cvs.synchro.net/cgi-bin/viewcvs.cgi/*checkout*/install/termcap \
    && tic terminfo && cat termcap >> /etc/termcap \
    && wget 'http://cvs.synchro.net/cgi-bin/viewcvs.cgi/*checkout*/install/GNUmakefile' \
    && make install SYMLINK=1 USE_DOSEMU=1 \
    && npm install typescript ts-node -g

WORKDIR /iniquity
COPY . .

# Start Iniquity
EXPOSE 21
EXPOSE 22
EXPOSE 23
EXPOSE 443
EXPOSE 80
EXPOSE 513

CMD ["/sbbs/exec/sbbs"]
