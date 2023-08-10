#!bin/bash

# stop docker compose 
docker-compose down
# delete all containers
docker rm $(docker ps -a -q)