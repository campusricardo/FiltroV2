const Centro = require('../models/centro.js');

const getCentro = async(req,res) => {
    
        const {hasta, desde} = req.query;

        const query = {estado: true};

        const [total, Centros] = await Promise.all([
            Centro.countDocuments(query),
            Centro.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ) )
        ]);

    res.json({
        total,
        Centros
    });
}

const postCentro = async(req,res) => {
    console.log("hola");
    const {nombre, descripcion, estado, ciudad} = req.body;
    
    const centro = new Centro({nombre, descripcion, estado, ciudad});
     
    await centro.save();
    res.json({
        "message":"post api",
        centro
    });

}


const deleteCentro = async(req,res) => {

    try{

        const {id} = req.params;
        console.log(id);
        const centro = await Centro.findByIdAndUpdate(id, {estado: false});

        res.json(centro);


    } catch(error) {




    }

}

const putCentro = async(req, res) => {

    const {nombre, descripcion, estado, ciudad} = req.body;
    const data = {
        nombre,
        descripcion,
        estado,
        ciudad
    }
    try{

        const {id} = req.params;

        const centro = await Centro.findByIdAndUpdate(id, data);

        res.json({
            "message": "centro Updated"
        })


    } catch(error) {

        res.json({
            "message": "cannot update"
        })


    }
}

module.exports = {
    getCentro,
    postCentro,
    deleteCentro,
    putCentro
}