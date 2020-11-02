# PSh Games

PSh-Game is an online game with thousands of participants abroad the world. In this instance we require to generate statistics for matches between players and a web report with the best players.

## Features

### Data

We simulate statistics of the games between players inserting randomly into a database, statistics of the player’s games between 0 and 10 players with the following information:

- Unique identifier on the stat.
- Unique identifier of the player.
- Nickname (random)
- Profile Image (random)
- Creation date in timestamp.
- Score (random from 1 to 100).

We have to configure a cron job that does this operation every 5 minutes.

### Web Report

We generate a web report that shows top 10 best scores of the players of the whole history and also show the last time stats were generated. Also if you click the button you can export the report to CSV.

## Requirements to run the Web App

This App was created with React for the web UI, NodeJS for insert the data into the DB, PostgreSQL for the DB and Hasura for the cron job and the graphQL APIs.

To run this Web App you must have install these packages:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Running the App:

Once you have installed docker and docker compose you only have to run two commands:
```
docker-compose build
docker-compose up
```

If it is the first time you launch the app you must run the bash script `configHasura.sh` with the commands:
```
chmod +x configHasura.sh
./configHasura.sh
```
This script allows Hasura to track our tables defined in our database (file `./resources/init_db.sql`) and create the Hasura cron trigger to fill the DB every 5 minutes.

For the next times you don't have to run this script because we save the data with the volumes of docker-compose.

Finally you can access the app on `http://localhost:8088` and also can access the hasura console on `http://localhost:8080`.
