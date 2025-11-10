# build stage
FROM node:22-alpine as build-stage

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

ARG VITE_TODOS_API_URL
ARG VITE_USERS_API_URL

RUN echo "VITE_TODOS_API_URL=${VITE_TODOS_API_URL}" > .env && \
    echo "VITE_USERS_API_URL=${VITE_USERS_API_URL}" >> .env

RUN pnpm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]