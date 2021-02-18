
class Order {

    constructor (){

    }

    async alquilar(req,res){
        
        //id de pelicula. 504
        //id de usuario (clienteeeeeeeeeeeeeeeeeeeeeeeeeeee) 25
        //fecha de alquiler 19/02/2021
        //fecha de devolucion date + 3
        //precio 5

        let datosAlquiler = req.body;

        //hacemos magia dentro de un try catch. 
        //si el alquiler se produce con éxito habrá una respuesta (res) que visualizaremos a través de Postman



    }
}

let orderController = new Order;
module.exports = orderController;