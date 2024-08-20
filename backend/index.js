/* import express from "express";
import cors from "cors";
import pg from "pg";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  FRONTEND_URL,
  PORT,
} from "./config.js";

const app = express();
const pool = new pg.Pool({
  host: DB_HOST,
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
});

app.use(
  cors({
    origin: FRONTEND_URL,
  })
);

app.get("/ping", async (req, res) => {
  const result = await pool.query("SELECT NOW()");

  res.send({
    pong: result.rows[0].now,
  });
});

app.listen(PORT, () => {
  console.log("server started on port 3000");
}); */

import express from "express";
import cors from "cors";
import pg from "pg";
import {
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
    FRONTEND_URL,
    PORT,
} from "./config.js";

/*
  const pool = new pg.Pool({
    host: "localhost",
    database: "postgres",
    user: "postgres",
    password: "mysecretpassword",
    port: 5444,
  }); 
  
  app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
*/

const app = express();
const pool = new pg.Pool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
});

app.use(
    cors({
        origin: FRONTEND_URL,
    })
);

app.get("/users", async (req, res) => {
    const result = await pool.query("SELECT NOW()");
    console.log(result);

    res.send({
        users: [],
    });
});

app.get("/ping", async (req, res) => {
    const result = await pool.query("SELECT NOW()");

    res.send({
        pong: result.rows[0].now,
    });
});

app.listen(PORT, () => {
    console.log("server started on port 3000");
});
