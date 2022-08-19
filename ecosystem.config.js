module.exports = {
  apps: [
    {
      name: "nodejs-api-todo",
      script: "./src/server.js",
      watch: true,
      env: {
        "NODE_ENV": "production",
        "PORT": 3333,
        "SECRET_KEY": "3c62d904ca8dec0c78a0f853bb641da2",
        "MONGO_DB_CONNECTION": "mongodb+srv://ajjunior33:andreregedit@todo.ume3ptp.mongodb.net/?retryWrites=true&w=majority"
      }
    }
  ]
}