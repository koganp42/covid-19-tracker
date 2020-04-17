module.exports = {
  "development": {
    "username": process.env.Mysql_username,
    "password": process.env.Mysql_password,
    "database": process.env.Mysql_database,
    "host": process.env.Mysql_host,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
    "username": process.env.NEWUSER,
    "password": process.env.NEWPASS,
    "database": process.env.NEWDATABASE,
    "host": process.env.NEWHOST,
    "port": process.env.NEWPORT
  }
}