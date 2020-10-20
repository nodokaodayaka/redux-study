# redux-study

`$ cd redux-study && yarn install`

```
    "scripts": {
        "server": "nodemon server.js",
        "client": "npm run start --prefix client",
        "dev": "concurrently \"yarn server\" \"yarn client\"",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
```

### localhost:4000 にアクセスできる事 

`$ cd redux-study && yarn server`

### localhost:3000 にアクセスできること
`$ cd redux-study/client && yarn install`


### localhost:4000/localhost:3000 両方にアクセスできること

`$ cd redux-study && yarn dev`

