#!bin/bash

# start docker compose from home/ec2-user
cd ..

# echo the current directory
echo "Current directory: $(pwd)"
# echo with ls
echo "Current directory: $(ls)"

# start docker compose
docker-compose up -d --build