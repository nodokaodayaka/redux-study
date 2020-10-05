# redux-study

`$ yarn install`

```
    "scripts": {
        "server": "nodemon server.js",
        "client": "npm run start --prefix client",
        "dev": "concurrently \"yarn server\" \"yarn client\"",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
```


`$ yarn server`

localhost:4000 にアクセスできる事


`$ cd client && yarn install`

localhost:3000 にアクセスできること

`$ cd repo_dir && yarn dev`
localhost:4000/localhost:3000 にアクセスできること
