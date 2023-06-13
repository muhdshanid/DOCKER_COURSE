import express from 'express'

const app = express()
const PORT = 3000

app.get("/", (req,res) => {
    res.json({
        "hey": "NodeJs"
    })
})

app.listen(PORT,() => {
    console.log(`Server running on PORT:${PORT}`);
})