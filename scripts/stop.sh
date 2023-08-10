#!bin/bash

# stop docker compose 
docker-compose down
# before removing all containers, check if there are any containers running, if so, stop them and remove them
echo "run if [ (docker ps -q) ]; then
    docker rm (docker ps -a -q)
fi"
if [ "$(docker ps -q)" ]; then
    docker stop $(docker ps -a -q)
    docker rm $(docker ps -a -q)
fi


