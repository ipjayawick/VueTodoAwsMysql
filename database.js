const mysql=require('mysql2')
const dotenv=require('dotenv')

dotenv.config()

const pool=mysql.createPool({
    host:"todoapp.ck2iogphtt9t.ap-northeast-1.rds.amazonaws.com",
    user:'admin',
    password:'user1234',
    database:'todo'
}).promise()

async function getList(){
    const [rows]=await pool.query("SELECT * FROM list")
    return rows
}
async function createTodo(item){
    const result=await pool.query(`INSERT INTO list VALUES(?)`,[item])
    return result
}
async function deleteTodo(item){
    const result=await pool.query(`DELETE FROM list WHERE item=?`,[item])
    return result
}

module.exports={createTodo,getList,deleteTodo}