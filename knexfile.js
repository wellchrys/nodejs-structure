// Update with your config settings.

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'username',
            database: 'password'
        }, 
        pool: { min: 0, max: 7 },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${ __dirname }/src/database/migrations`
        }
    },

    staging: {
        client: 'mysql',
        connection: {
            database: 'my_db',
            user:     'username',
            password: 'password'
        },
        pool: { min: 2, max: 10 },
    migrations: {
        tableName: 'knex_migrations',
        directory: `${ __dirname }/src/database/migrations`
    }
},

  production: {
    client: 'mysql',
    connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
    },
    pool: { min: 2, max: 10 },

    migrations: {
      tableName: 'knex_migrations',
      directory: `${ __dirname }/src/database/migrations`
    }
  }

};