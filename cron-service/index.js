const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const fetch = require("node-fetch")

const { Pool } = require("pg")

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

async function main() {
  try {
    app.use(bodyParser.json())

    app.post("/cronjob", async (req, res) => {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=${Math.floor(Math.random() * 11)}`);
        const data = await response.json();
        for(let i = 0; i < data.results.length; i++){
            const {rows: rowsPlayers} = await pool.query(
                'INSERT INTO players (nickname,image_url) VALUES ($1,$2) RETURNING id;',
                [data.results[i].login.username, data.results[i].picture.large]
            );
            const score = Math.floor(Math.random() * 100) + 1;
            const {rows} = await pool.query(
                'INSERT INTO stats (score,player_id) VALUES ($1,$2) RETURNING id;',
                [score, rowsPlayers[0].id]
            );
        }
        res.sendStatus(200)
      } catch (err) {
        throw err
      }
    })

    app.get("/", (req, res) => {
      res.send('Hello there!');
    })

    app.listen(3000, () => {
      console.log(`Server Working at port 3000`);
    })
  } catch (err) {
    throw err
  }
}

try {
  main()
} catch (err) {
  throw err
}