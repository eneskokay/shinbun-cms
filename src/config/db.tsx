import mysql from "serverless-mysql";

export const sqlClient = mysql({
  config: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    port: 3306,
    database: "shinbun",
  },
});
