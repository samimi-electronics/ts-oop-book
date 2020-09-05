# Simple SOA and OOP case study with TypeScript and Express
## Description
This application is a case study on how to implement Service Oriented Architecure with TypeScript and Express.

The application structure is as follows:
* Interfaces that describe models
* Models that describe entities
* Services that implemet CRUD operations on models. Services use MonogoDB driver to do database operations
  
All TypeScript code is implemented using OOP adhering to S.O.L.I.D and Clean Code principles.

This style of code allows for a higher abstraction for future programmers, and in general increases code readablity.

# How to use
After cloning the repo, run ```npm install``` and then open ``` ./config/db.conf.ts``` and change the ```uri``` to your desired uri.

After that you can run on of three npm commands:
* ```npm run start```
* ```npm run start:dev```
* ```npm run build```
## start command
This command builds all the TypeScript files in ```src``` folder and runs ```./build/server.js```
## start:dev command
This command runs a development server running ```./src/server.ts```
## build command
This command builds all the TypeScript files in ```src``` folder to ```./build```