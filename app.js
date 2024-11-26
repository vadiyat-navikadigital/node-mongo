import express from "express"

const app = express()

app.get('/api', (req, res)=>{
    res.render("api working")
})

export default app