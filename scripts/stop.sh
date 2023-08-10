#!bin/bash

# stop docker compose 
docker-compose down
# before removing all containers, check if there are any containers running, if so, stop them and remove them
if [ "$(docker ps -q)" ]; then
    docker rm $(docker ps -a -q)
fi


