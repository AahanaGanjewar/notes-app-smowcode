const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'notes',
    password: 'Aahana404',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool, // Export the pool for external use if needed
};
