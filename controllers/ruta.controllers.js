// const Ruta = require('../models/Ruta.js');

// const getRuta = async(req,res) => {
//     try {
//         const [desde, hasta] = req.query;

//         const query = {estado: true};

//         const [total, rutas] = new Promise.all([
//             Ruta.countDocuemntes(query).
//             Ruta.find(query)
//             .skip( Number(desde))
//             .limit(Number(hasta))
//         ]);

//     res.json({
//         total,
//         rutas
//     });
//     } catch (error) {
        
//     }
// }

// const postRuta = async(req,res) => {
//     const {nombre} = req.body;
    
//     const Ruta = new Ruta({nombre, descripcion, estado, ciudad});
     
//     await Ruta.save();
//     res.json({
//         "message":"post api",
//         Ruta
//     });

// }


// const deleteRuta = async(req,res) => {

//     try{

//         const {id} = req.params;
//         console.log(id);
//         const Ruta = await Ruta.findByIdAndUpdate(id, {estado: false});

//         res.json(Ruta);


//     } catch(error) {




//     }

// }

// const putRuta = async(req, res) => {

//     const {nombre, descripcion, estado, ciudad} = req.body;
//     const data = {
//         nombre,
//         descripcion,
//         estado,
//         ciudad
//     }
//     try{

//         const {id} = req.params;

//         const Ruta = await Ruta.findByIdAndUpdate(id, data);

//         res.json({
//             "message": "Ruta Updated"
//         })


//     } catch(error) {

//         res.json({
//             "message": "cannot update"
//         })


//     }
// }

// module.exports = {
//     getRuta,
//     postRuta,
//     deleteRuta,
//     putRuta
// }