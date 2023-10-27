# Step 1 Build
FROM node:18 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# STEP 2
FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY --from=builder /usr/src/app/dist ./
RUN npm install pm2 -g
COPY ./config/ecosystem.config.js ./ecosystem.config.js
CMD ["pm2-runtime", "./ecosystem.config.js"]
