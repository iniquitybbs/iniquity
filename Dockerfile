
FROM ubuntu:18.04 as synchronet
LABEL name="synchronet"
LABEL version="3.17b"

WORKDIR /sbbs
ENV SBBSCTRL=/sbbs/ctrl
ENV SBBSEXEC=/sbbs/exec

RUN DEBIAN_FRONTEND=noninteractive apt-get update \
    && apt-get -y install build-essential python ruby wget \
    && apt-get -y install libncurses5-dev libc6-dev libc-dev g++ libnspr4-dev git cvs dosemu \
    && apt-get -y install pkg-config libzip-dev libsdl-kitchensink-dev zip unzip apt-utils \
    && apt-get -y install libmozjs-38-dev libmozjs-52-dev libcap2-dev libcap2-bin sudo lrzsz vim \ 
    && wget http://cvs.synchro.net/cgi-bin/viewcvs.cgi/*checkout*/install/terminfo \
    && wget http://cvs.synchro.net/cgi-bin/viewcvs.cgi/*checkout*/install/termcap \
    && tic terminfo && cat termcap >> /etc/termcap \
    && wget ftp://vert.synchro.net/Synchronet/ssrc317b.tgz \
    && wget ftp://vert.synchro.net/Synchronet/srun317b.tgz \ 
    && tar -xzf ssrc317b.tgz && tar -xzf srun317b.tgz \
    && echo RELEASE=1 > src/build/localdefs.mk \
    && cd src/sbbs3 \
    && echo USE_DOSEMU=1 > localdefs.mk \
    && SBBSEXEC=/sbbs/exec make symlinks \
    && SBBSCTRL=/sbbs/ctrl /sbbs/exec/jsexec update.js \
    && apt-get -y autoremove

FROM synchronet as iniquity
LABEL name="iniquity"
LABEL version="latest"


WORKDIR /iniquity
COPY . .

# Eventually there will be a bundle step for iniquity apps being ran on the cloud. For now, local only.
# RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash \
#     && . $HOME/.nvm/nvm.sh || true \
#     && nvm install 16 \
#     && nvm install-latest-npm \
#     && npm version \
#     && nvm use

RUN cd /sbbs/exec/ \
    && mv login.js login.js-original \
    && mv logon.js logon.js-original \
    && cd /sbbs/text/ \
    && mv answer.msg answer.msg-original ; touch answer.msg \
    && ln -s /iniquity/app/dist/bundle.js /sbbs/exec/login.js

VOLUME /iniquity

# Start Iniquity
EXPOSE 22-24

CMD ["/sbbs/exec/sbbs"]
