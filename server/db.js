const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "zny515253",
    host: "localhost",
    port: 5432,
    database: "engrafi"
});

module.exports = pool;