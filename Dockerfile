FROM ubuntu:focal as synchronet
LABEL name="synchronet"
LABEL version="latest"

WORKDIR /sbbs
ENV SBBSCTRL=/sbbs/ctrl
ENV SBBSEXEC=/sbbs/exec

RUN DEBIAN_FRONTEND=noninteractive apt-get update \
    && apt-get -y install build-essential python3 python-is-python3 ruby wget \
    && apt-get -y install libncurses5-dev libncursesw5-dev libc6-dev libc-dev g++ libnspr4-dev git dosemu libarchive-dev \
    && apt-get -y install pkg-config libzip-dev zip unzip apt-utils \
    && apt-get -y install libcap2-dev libcap2-bin sudo lrzsz vim \ 
    && cd ~/ \
    && git clone https://github.com/iniquitybbs/sbbs.git \
    && cd ~/sbbs/install \
    && make install SYMLINK=1 NOCAP=1 USE_DOSEMU=1 OS=iq3os SBBSDIR=/sbbs REPODIR=/root/sbbs \
    && ls -la /sbbs/ \
    && ls -la /sbbs/exec/ || echo "WARNING: /sbbs/exec/ not created" \
    ; apt-get -y autoremove

FROM synchronet as iniquity
LABEL name="iniquity"
LABEL version="latest"


WORKDIR /iniquity
COPY . .

RUN ARCH=$(uname -m) && \
    if [ "$ARCH" = "aarch64" ] || [ "$ARCH" = "arm64" ]; then \
        NODE_ARCH="arm64"; \
    else \
        NODE_ARCH="x64"; \
    fi && \
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-${NODE_ARCH}.tar.xz && \
    tar -xJf node-v18.20.3-linux-${NODE_ARCH}.tar.xz -C /usr/local --strip-components=1 && \
    rm node-v18.20.3-linux-${NODE_ARCH}.tar.xz && \
    node --version && \
    npm --version

RUN mkdir -p /sbbs/exec /sbbs/text && \
    cd /sbbs/exec/ && \
    if [ -f login.js ]; then mv login.js login.js-original; fi && \
    if [ -f logon.js ]; then mv logon.js logon.js-original; fi && \
    cd /sbbs/text/ && \
    if [ -f answer.msg ]; then mv answer.msg answer.msg-original; fi && \
    touch answer.msg && \
    mkdir -p /iniquity/core/dist && \
    ln -sf /iniquity/core/dist/bundle.js /sbbs/exec/login.js

VOLUME /sbbs
VOLUME /iniquity

# Start Iniquity
EXPOSE 22 23 80 443 1123 11235

CMD ["tail", "-f", "/dev/null"]
