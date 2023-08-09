# Monorepo Dockerized Node.js Services

This repository demonstrates a setup for managing multiple isolated services in a monorepo while sharing a single `node_modules` folder. Each service is contained within its own directory, and the root `package.json` file utilizes the "workspaces" feature to manage dependencies.

## How It Works

The idea is to keep a single `node_modules` folder at the root level to be shared by all services, while allowing each service to have its own isolated `package.json` and dependencies.

## Before You Start

type inside the root folder:

```bash
npm install
```

### Adding a New Service

To add a new service, follow these steps:

1.  Navigate to the root directory and create a new service workspace:

```
npm init -w ./service_c
```

follow the prompts in the terminal. This will create a new "workspace" propterie in the root `package.json` file.

2.  Install dependencies for the newly created service workspace:

```
npm install -w service_c express
```

3. The -w flag stand for "worksapce" and tells npm to install the dependencies in the given workspace directory, in that case service_c.

4. Each service folder can have its own `package.json` file with its own set of dependencies.

### Building and Starting Docker Images

A Docker Compose configuration is provided (`docker-compose.yml`) to build and start the Docker images for all services.

To build and start all Docker images, you can use the following command:

```bash
npm run build_and_start_all_dockerimages
```

OR you have a look into the docker-compose.yml file.

# Stopping Docker Images

To stop all running Docker images, you can use the following command:

```bash
npm run stop_all_dockerimages
```
