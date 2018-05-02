module.exports=function(app,admin,db){
    app.get('/orders',(req,res)=>{
   
       
        console.log(req.query.rest)
   

    var db = admin.database();
    var ref = db.ref(`/orders/${req.query.rest}`);
    ref.once("value", (snapshot)=> {
     // console.log(snapshot.val());
var val=snapshot.val()
var validated=0
var canceled=0
var returned=0
var delivered=0
var Mvalidated=0
var Mcanceled=0
var Mreturned=0
var Mdelivered=0

Object.keys(val).forEach((v,e)=>{
if(val[v].status==="canceled"){
    canceled=canceled+1
    Mcanceled=Mcanceled+val[v].total_price
}
if(val[v].status==="delivered"){
    delivered=delivered+1
    Mdelivered=Mdelivered+val[v].total_price
}
if(val[v].status==="returned"){
    returned=returned+1
    Mreturned=Mreturned+val[v].total_price
}
if(val[v].status==="validated"){
    validated=validated+1
    Mvalidated=Mvalidated+val[v].total_price
}

})
     var resi={length:Object.keys(val).length,canceled:{count:canceled,montant:Mcanceled}
    ,
    validated:{count:validated,montant:Mvalidated}
    ,
    delivered:{count:delivered,montant:Mdelivered}
    ,
    returned:{count:returned,montant:Mreturned}
    }
      res.send(resi)
    });
    
})
}