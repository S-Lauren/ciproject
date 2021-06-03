# **CI PIZZA NODE API 🍕**

- Like always run npm install after cloning
- Make your own .env as follow :

```
DB_USER= yourUserName
DB_DATABASE= yourDBName
DB_PASSWORD= yourPassword
DB_PORT=  yourPort
DB_HOST= yourHost

NODE_ENV=development
NODE_TLS_REJECT_UNAUTHORIZED=0

```

This app is performed with:

- PostGreSQL without any framework 🐘
- Node JS
- TypeScript (not so much)
- Pizza 🍕
- Heroku
- Github Actions
- Jest ☔️ _(but only 1 poor test for now, try to fix later )_

- You can use Docker 🐳 for dev environment
  if you want but not sure if it works properly,
  and you've to notice
  that I chose to go back on PG client installed locally and ran a service instance instead.

**Deployed on two environment staging and production 🚀**

- https://ci-app-node.herokuapp.com/
- https://ci-app-node-prod.herokuapp.com/
