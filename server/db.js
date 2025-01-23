import pg from 'pg';

const Pool = pg.Pool;
const PORT = 5432;

const pool = new Pool({
  user: 'postgres',
  password: 'Skipper0091',
  host: 'localhost',
  port: PORT,
  database: 'client_db'
})

export default pool;