FROM node:8.11.2

EXPOSE 8000

ENTRYPOINT cd app && yarn && yarn start