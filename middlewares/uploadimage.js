const multer = require('multer');

module.exports = (multer({
    storage :multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'./public/')
        },filename:(req,file,cb)=>{
            cb(null,Date.now().toString()+"_"+file.originalname);
        }
    }),fileFilter:(req,file,cb)=>{
        const extensaoImg = ['image/png','image/jpg','image/jpeg','image/gif'].find(formatoAceito => formatoAceito ==file.mimetype);
        if(extensaoImg){
            return cb(null,true);
        }else{
            return cb(null,false); 
        }
    }
}));