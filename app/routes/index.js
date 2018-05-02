const ordersRoutes=require('./orders');

module.exports=function(app,admin,db){
    ordersRoutes(app,admin,db)

}