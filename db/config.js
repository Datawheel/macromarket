var dev_pw = process.env.DB_PW || null;
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": dev_pw,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {},
  "production": {}
}
