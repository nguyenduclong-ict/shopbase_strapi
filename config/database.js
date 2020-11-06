module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        srv: env.bool("DATABASE_SRV", false),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "shopbase_server"),
        username: env("DATABASE_USERNAME", "shopbase_server_admin"),
        password: env("DATABASE_PASSWORD", "long@123"),
      },
      options: {
        authenticationDatabase: env(
          "AUTHENTICATION_DATABASE",
          "shopbase_server"
        ),
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  },
});
