class Database {
    constructor(conn) {
        this.db = require('knex')({
            client: 'mysql2',
            connection: {
                host : conn.host,
                user : conn.user,
                database : conn.database,
                password : conn.password,
            }
        })
    }
}

module.exports = Database