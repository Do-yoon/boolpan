FROM node:16
WORKDIR /usr
COPY package*.json ./
RUN npm install
RUN npm install --save react
RUN npm i --save-dev @types/jest
COPY . .
EXPOSE 3000
CMD npm run serve