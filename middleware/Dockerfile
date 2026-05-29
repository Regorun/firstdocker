#image digest: sha256:4d889c14e7d5a73929ab00be2ef8ff22437e7cbc545931e52554a7b00e123d8b
#app digest: sha256:95034e722cecec716c00830160848aab85c7b8180a131bb4f4fed9d5278f0989
#app version: 3.23

FROM node:26-alpine
WORKDIR /home
RUN npm install express mongodb
COPY index.js /home/index.js
CMD ["node", "index.js"]