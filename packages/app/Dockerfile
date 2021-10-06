
FROM bbsio/synchronet as iniquity

LABEL name="iniquity"
LABEL version="latest"


WORKDIR /iniquity
COPY . .


RUN sudo chmod -R a+rwX ./* \
    && cd /sbbs/exec/ \
    && mv login.js login.js-original \
    && mv logon.js logon.js-original \
    && cd /sbbs/text/ \
    && mv answer.msg answer.msg-original ; touch answer.msg \
    && ln -s /iniquity/app/dist/bundle.js /sbbs/exec/login.js

VOLUME /iniquity

# Start Iniquity
EXPOSE 22-24

CMD ["/sbbs/exec/sbbs"]
