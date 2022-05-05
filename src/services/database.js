// Put your database code here
"use strict";

const Database = require('better-sqlite3');

const db = new Database('log.db');

const stmt = db.prepare(
    `
    SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';
    `
);
let row = stmt.get();
if (row === undefined){
    console.log('Your database is empty. Initialzing')
    const sqlInit = `
        CREATE TABLE accesslog (id INTEGER PRIMARY KEY, 
            remoteaddr VARCHAR, 
            remoteuser VARCHAR,
            time VARCHAR,
            method VARCHAR,
            url VARCHAR,
            protocol VARCHAR,
            httpversion NUMERIC,
            status INTEGER,
            referer VARCHAR,
            useragent VARCHAR);
    `;
    db.exec(sqlInit);
    console.log("There is no database, creating a database for you...")
} else{
    console.log('Database exists')
}

module.exports = db