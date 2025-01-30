const db = require('./db');

async function testConnection() {
    try {
        const [rows] = await db.query('SELECT 1 + 1 AS result');
        console.log('Connection successful! Test result:', rows[0].result);
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
}

testConnection();
