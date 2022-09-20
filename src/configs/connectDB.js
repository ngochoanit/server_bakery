const mysql = require('mysql2');
const { userName, host,  database, password } = require('.');

let dbInstance =null;

export const connectDB =async()=>{
    try{
        dbInstance=await  mysql.createPool({
            host: host,
            user: userName,
            database: database,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
    }
    catch(err){
      throw new Error(err);
    }
} 
export const getDB = () => {
    if (!dbInstance) throw new Error('Must connect to Database first')
    return dbInstance.promise()
}
       
