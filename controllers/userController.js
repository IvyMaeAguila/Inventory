//SQL
const connection = require('../config/db.js');
//get all users
exports.getAllUsers=(req,res)=>{
    connection.query('SELECT*FROM inventory', (err, rows, fields)=>{
        if(err)throw err;
            res.json(rows);
    });

};

//Search a user by id
exports.getUsersById=(req,res)=>{

    const id = req.params.id;
    connection.query('SELECT * FROM inventory WHERE id=? OR productName=?', [id, id],(err,rows,fields)=>{
        if(err)throw err;
        if(rows.length>0)
            res.json(rows);
        else 
            res.status(404).json({message:'Product not found'});   
    });
};
//Create a new user
//CRUD - Create
exports.createUser=(req,res)=>{
    const {product_name, category, stock_count, location_code, last_updated} = req.body;
    connection.query('INSERT INTO inventory(productName, category, stockCount, locationCode, lastUpdated) VALUES(?,?,?,?,?)', [product_name, category, stock_count, location_code, last_updated],(err,result)=>{
        if(err)throw err;
            res.json({message:'Product created successfully', userId:result.insertId});
    })
}