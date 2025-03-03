import SQLite from 'react-native-sqlite-storage';

// Enable debug mode
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = 'MyDatabase.db';
const database_version = '1.0';
const database_displayname = 'SQLite Test Database';
const database_size = 200000;

let db;

export const initDB = async () => {
  try {
    db = await SQLite.openDatabase(
      database_name,
      database_version,
      database_displayname,
      database_size,
    );
    console.log('Database opened');
  } catch (error) {
    console.error('Unable to open database', error);
  }
};

export const closeDB = async () => {
  if (db) {
    try {
      await db.close();
      console.log('Database closed');
    } catch (error) {
      console.error('Unable to close database', error);
    }
  } else {
    console.log('Database was not open');
  }
};

export const createTable = async () => {
  if (!db) {
    console.log('Database is not open');
    return;
  }

  try {
    await db.executeSql(
      `CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER,
        password TEXT
      );`,
    );
    console.log('Table created successfully');
  } catch (error) {
    console.error('Error creating table', error);
  }
};

export const insertUser = async (name, age, password) => {
  if (!db) {
    console.log('Database is not open');
    return;
  }

  try {
    await db.executeSql(
      `INSERT INTO Users (name, age, password) VALUES (?, ?, ?);`,
      [name, age, password],
    );
    console.log('User inserted successfully');
  } catch (error) {
    console.error('Error inserting user', error);
  }
};

export const getUsers = async () => {
  if (!db) {
    console.log('Database is not open');
    return [];
  }

  try {
    const results = await db.executeSql(`SELECT * FROM Users;`);
    const rows = results[0].rows;
    let users = [];
    for (let i = 0; i < rows.length; i++) {
      users.push(rows.item(i));
    }
    return users;
  } catch (error) {
    console.error('Error fetching users', error);
    return [];
  }
};
