import mysql from 'mysql'

export const MySqlConnection: mysql.Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pa$$w0rd',
  database: 'song'
})
