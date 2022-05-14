const Pool = require('pg').Pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "vikash@21",
  port: 5432,
  database: "test"
})

pool.connect((err) =>  {
  if (err) {
    console.log(err.message);
  }
  else {
    console.log('database connected...');
  }
})

module.exports = pool;