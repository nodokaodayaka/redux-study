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

### localhost:4000 にアクセスできる事 

`$ yarn server`

### localhost:3000 にアクセスできること
`$ cd client && yarn install`


### localhost:4000/localhost:3000 両方にアクセスできること

`$ cd repo_dir && yarn dev`

