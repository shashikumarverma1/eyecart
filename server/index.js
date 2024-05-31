import express from "express"

import cors from "cors"
import { db_connection } from "./dbConnection.js"
import { student } from "./schema/student.js"
import { router } from "./router.js"

const app=express()


db_connection();
app.use(cors())

app.use('/',router)

app.listen(5500,()=>{
    console.log("server is runing 5500")
})
