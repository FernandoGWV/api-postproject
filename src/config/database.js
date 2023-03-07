import dotenv from "dotenv";

dotenv.config();
export default {
  dialect: "mariadb",
  database: process.env.DB,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
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
