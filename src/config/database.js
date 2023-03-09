require("dotenv").config();

module.exports = {
  dialect: "mariadb",
  host: process.env.DB_HOST,
  database: process.env.DB,
  port: process.env.DB_PORT,
  sslmode: process.env.SSLMODE,
  password: process.env.DB_PW,
  username: process.env.DB_USER,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createAt: "create_at",
    update: "update_at",
  },
  dialectOptions: {
    timezone: "America/Sao_Paulo",
  },
  timezone: "America/Sao_Paulo",
};
