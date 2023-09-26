import { Sequelize } from "sequelize";

const db_config = {
    database : 'user_auth',
    host : 'localhost',
    user : 'root',
    password : ''
}


const db = new Sequelize(db_config.database, db_config.user , db_config.password,
    {
        host: db_config.host,
        dialect: "mysql"
    }
);

export default db;