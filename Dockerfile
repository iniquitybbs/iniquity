FROM ubuntu:bionic as synchronet
LABEL name="synchronet"
LABEL version="latest"

WORKDIR /sbbs
ENV SBBSCTRL=/sbbs/ctrl
ENV SBBSEXEC=/sbbs/exec

RUN DEBIAN_FRONTEND=noninteractive apt-get update \
    && apt-get -y install build-essential python ruby wget \
    && apt-get -y install libncurses5-dev libncursesw5-dev libc6-dev libc-dev g++ libnspr4-dev git dosemu libarchive-dev \
    && apt-get -y install pkg-config libzip-dev libsdl-kitchensink-dev zip unzip apt-utils \
    && apt-get -y install libcap2-dev libcap2-bin sudo lrzsz vim \ 
    && cd ~/ \
    && git clone https://github.com/iniquitybbs/sbbs.git \
    # && wget https://gitlab.synchro.net/main/sbbs/-/raw/master/install/GNUmakefile \
    && cd ~/sbbs/install \
    && make install SYMLINK=1 NOCAP=1 USE_DOSEMU=1 OS=iq3os SBBSDIR=/sbbs REPODIR=/root/sbbs \
    # && /sbbs/exec/jsexec update.js \
    # && /sbbs/exec/jsexec makeuser.js iniquity -P aslk102*rmA0wq -S 99 -H iq -C "The iniquity super user" \
    # ; /sbbs/exec/jsexec makeguest.js \
    ; apt-get -y autoremove

FROM synchronet as iniquity
LABEL name="iniquity"
LABEL version="latest"


WORKDIR /iniquity
COPY . .

RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash \
    && . $HOME/.nvm/nvm.sh || true \
    && nvm install 16 \
    && nvm install-latest-npm \
    && npm version \
    && nvm use

RUN cd /sbbs/exec/ \
    && mv login.js login.js-original \
    && mv logon.js logon.js-original \
    && cd /sbbs/text/ \
    && mv answer.msg answer.msg-original ; touch answer.msg \
    && ln -s /iniquity/core/dist/bundle.js /sbbs/exec/login.js

VOLUME /sbbs
VOLUME /iniquity

# Start Iniquity
EXPOSE 22 23 80 443 1123 11235

CMD ["/sbbs/exec/sbbs"]
