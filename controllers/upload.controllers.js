// const path = require('path');
// const { response } = require('express');

// const uploadFile = async(req, res = response) => {


//     if (!req.files || Object.keys(req.files).length === 0 ||!req.files.file) {
//         return res.status(400).send('No files were uploaded.');
//       }
    
//       const {file} = req.files;
//       const uploadPath = path.join (__dirname, '../uploads/', file.name);
    
//       file.mv(uploadPath, (err) =>{
//         if (err){
//             return res.status(500).send(err);
//         }
          
//         res.json({ msg:'File uploaded!' + uploadPath});
//       });

// }


// module.exports = {
//     uploadFile
// }