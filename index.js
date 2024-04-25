const express = require("express") //importar
const app = express() //inicializar express
const PORT = 3000
const path = require("path")

app.use(express.json())//parsea el body
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    res.send("Hola The Bridge")
})

// app.get('/index',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

// app.get("/about",(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','about.html'))
// })



app.get("/despedida",(req,res)=>{
    res.send("Hasta la vista baby ;)")
})

app.get("/myName/:name", (req, res) => {
    res.send("My name is " + req.params.name);
  });

app.get("/id/:id",(req,res)=>{
    res.send("My id is "+req.params.id)
})

app.get("/myName", (req, res) => {
    res.send("My name is " + req.query.nombre);
  });

app.post("/",(req,res)=>{
    console.log("req.body",req.body.name)
    res.send("Hola "+ req.body.name)
})


app.listen(PORT,()=>console.log("Servidor levantado en el puerto "+ PORT))