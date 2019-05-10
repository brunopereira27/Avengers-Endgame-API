The Avenger Endgame API

## Description

`/avengers/` Gives you the list of avengers.
`/villains/` Gives you the list of villains.

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
