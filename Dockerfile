FROM cypress/included:12.3.0

WORKDIR /app

COPY package.json  /app

RUN  npm install

COPY . .

CMD ["npm", "run", "testChrome"]