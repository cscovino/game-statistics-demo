#!/bin/bash

curl -d'@./resources/metadata.json' http://localhost:8080/v1/query
curl -d'@./resources/cron.json' http://localhost:8080/v1/query