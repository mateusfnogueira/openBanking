module.exports = {

  production: {
    client: 'postgresql',
    connection: {
      database: 'openbanking',
      user: 'postgres',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
