only one node_modules inside the root!

the idea is that each service is isolated but only one node_modules folder is used for all services.

The root package.json will have the property "workspaces" which will point to the folders of the services.

You can try this with the following steps:

try inside the root:

        npm init -w ./service_C  //NOTE: -w stands for "workspace", dont forgett to enter everything asked in the terminal,

        //try the follow command to add new dependencies for workspace "service_C"

        npm install -w service_C express // this will install the dependencies for the workspace "service_C"

that way all node_modules will stay inside the root folder and you have only one node_modules folder for all your services.
BUT each package.json inside each service folder will have its own dependencies, wich is nicer to work with docker

Start all images:

        instructions also inside the "docker-compose.yml" file, but i created a script for it for easier use inside package.json:

                npm run build_and_start_all_dockerimages

                npm run stop_all_dockerimages
