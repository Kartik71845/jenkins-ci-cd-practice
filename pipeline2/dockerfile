FROM node:18-alpine
WORKDIR /app
COPY app.js .
ENV PORT=3000
EXPOSE 3000
ENV NODE_ENV=dev
ENV APP_NAME=DockerApp
ENTRYPOINT ["node"]
CMD ["app.js"]