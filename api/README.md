# Documentations

## Code untuk db diagram

[ERD](https://dbdiagram.io/d/64bd12c402bd1c4a5e8a575d)

<details>

```bash
// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table authors {
  id integer [primary key]
  pen_name varchar
  profileId integer
  userId integer
  createdAt timestamp
  updatedAt timestamp
}

Table profiles {
  id integer [primary key]
  fullname varchar
  image varchar
  age varchar
  nationality varchar
  gender varchar
  createdAt timestamp
  updatedAt timestamp
}

Table users {
  id integer [primary key]
  username varchar
  email varchar
  password varchar
  role varchar
  profileId integer
  createdAt timestamp
  updatedAt timestamp
}

Table books{
  id integer [primary key]
  title varchar
  description varchar
  year integer
  page integer
  stock integer
  image varchar
  authorId integer
  genreId integer
  userId integer
  status varchar
  createdAt timestamp
  updatedAt timestamp
}

Table genres {
  id integer [primary key]
  name varchar
  userId integer
  createdAt timestamp
  updatedAt timestamp
}

Ref: authors.profileId - profiles.id // many-to-one
Ref: users.profileId - profiles.id
Ref: books.userId > users.id
Ref: books.authorId > authors.id
Ref: books.genreId > genres.id
Ref: authors.userId > users.id
Ref: genres.userId > users.id


```

</details>

# Api

## Packages

1. Server

- Express.js

2. DBMS

- PG
- Sequelize dan Sequelize-cli

3. Environtment

- Dotenv

4. Authentication

- Bcrypt
- Jsonwebtoken

5. Upload files

- Multer

6. Run apps

- nodemon

7. Convert ES6 ke atas menjadi ES level 5

- babel

```bash
 npm install @babel/core @babel/node @babel/preset-env --save-dev

 npm install @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread --save-dev
```

Buatlah file `.babelrc`, lalu isi dengan codingan berikut :

```js

{
    "presets": [
      ["@babel/env", {
        "targets": {
          "node": "current"
        }
      }]
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread"
    ]
  }
```

## Sequelize Command

1. npx sequelize-cli inti

2. npx sequelize-cli db:create

3. Migration

```
npx sequelize-cli model:generate --name author --attributes pen_name:string,profileId:integer,userId:integer
npx sequelize-cli model:generate --name book --attributes title:string,description:string,year:integer,page:integer,stock:integer,price:integer,image:string,status:string,authorId:integer,userId:integer,genreId:integer
npx sequelize-cli model:generate --name profile --attributes fullname:string,image:string,age:integer,nationality:string,gender:string
npx sequelize-cli model:generate --name genre --attributes name:string,userId:integer
npx sequelize-cli model:generate --name user --attributes username:string,email:string,password:string,role:string,profileId:integer
```

4. npx sequelize-cli db:migrate

5. npx sequelize-cli seed:generate --name seed-books
