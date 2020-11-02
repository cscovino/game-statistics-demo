CREATE TABLE "players" (
  "id" SERIAL PRIMARY KEY,
  "nickname" varchar,
  "image_url" varchar,
  "created_at" timestamp DEFAULT now()
);

CREATE TABLE "stats" (
  "id" SERIAL PRIMARY KEY,
  "player_id" int,
  "score" int,
  "created_at" timestamp DEFAULT now()
);

ALTER TABLE "stats" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("id");
