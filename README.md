The Avenger Endgame API

## Description

`GET /avengers/` Gives you the list of avengers.  
`GET /villains/` Gives you the list of villains.

Not Implemented Yet  
`POST /battles/` Creates and returns for you the result of the battle.  
    Params:  
    avengers: List of 3 avenger ids that compose the team of avengers for the battle  
    villains: List of 3 villain ids that compose the team of villains for the battle  
    
`GET /battles/` Gives you the list of results of all previous battles already played.  
`GET /battles/{id}` Gives you the detail of the specified battle.


## Installation

```bash
$ yarn install
```

## Running the app

You need first to set the database. For its simplicity, we use sqlite.

Simply create a file at the root of the project called `db.sqlite`.

Then, you need to run migration to create table and add data. To do so,
you first need to install the TypeOrm CLI.

```bash
yarn global add ts-node typeorm
```

Then, simply apply migrations by doing
```bash
yarn run typeorm migration:run
```

Run the node server, and you will access the API to http://localhost:3000 
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
