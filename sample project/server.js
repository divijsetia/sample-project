const app = require('express')()
const port = process.env.port|| 5555

app.get('/',(req,res)=> res.send("hello!"))

app.listen(port , ()=>{
    console.log(`started on http://localhost:${port}`)

})