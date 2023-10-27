module.exports = {
  apps: [
    {
      name: "nodejs-api",
      script: "./server/application.js",
      instances: 2,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        MONGO_SERVER: "localhost:27017",
        NODE_ENV: "development",
        API_BASE_URL: "https://jsonplaceholder.typicode.com",
        SECRET_KEY:
          "ljklfhaskjhrjk3whjkjsdhfskdhfkjhkjhkh435lghjlfksdhfadjkslfhadsjkfasdf",
      },
      env_production: {
        MONGO_SERVER: "example.com:27017",
        NODE_ENV: "production",
        API_BASE_URL: "https://jsonplaceholder.typicode.com",
        SECRET_KEY:
          "ljklfhaskjhrjk3whjkjsdhfskdhfkjhkjhkh435lghjlfksdhfadjkslfhadsjkfasdf",
      },
    },
  ],
};
