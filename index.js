const app= require('express')();

const  PORT = 4000;

app.listen( 
    PORT,
    () => console.log(`server is running on ${PORT}`)
);

app.get('/getRequest', (req,res)=>{
    res.send("Conexión exitosa")
});

app.post('/postRequest', (req,res)=>{
    res.send("Brissa Valeria Ramírez Cruz, 20991, 5A")
});