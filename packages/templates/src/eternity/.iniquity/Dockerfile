FROM iniquitybbs/iniquity:latest as iniquity
LABEL name="iniquity"
LABEL version="latest"

WORKDIR /dist
COPY ../ .

RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash \
    && . $HOME/.nvm/nvm.sh || true \
    && nvm install 18 \
    && nvm install-latest-npm \
    # && npm version \
    && nvm use

RUN cd /sbbs/exec/ \
    && mv login.js login.js-original \
    && mv logon.js logon.js-original \
    && cd /sbbs/text/ \
    && mv answer.msg answer.msg-original ; touch answer.msg \
    && ln -s /dist/bundle.js /sbbs/exec/login.js

VOLUME /sbbs
VOLUME /dist

# Start Iniquity
EXPOSE 22 23 80 443 1123 11235

CMD ["/sbbs/exec/sbbs"]
