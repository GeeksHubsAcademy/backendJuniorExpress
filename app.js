//Requerimos express a una constante.

const express = require('express');

const app = express();

const port = 3000;

//////////////////////////////////////


//Importación de las rutas.

let filmRouter = require('./routers/filmRouter');
let userRouter = require('./routers/userRouter');
let orderRouter = require('./routers/orderRouter');

//Middlewares

app.use(express.json());

//USE DE ENDPOINTS

//Enrutador de películas con el recurso /film
app.use('/film', filmRouter);

//Enrutador de usuarios con el recurso /user
app.use('/user', userRouter);


//Enrutador de pedidos con el recurso /pedido

app.use('/pedido', orderRouter);

//http://localhost:3000/pedido/alquilar

//Levantamos el servidor

app.listen(port, () => console.log(`Listening at ${port}`));
