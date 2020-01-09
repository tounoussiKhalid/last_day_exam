let mongoClient = require("mongodb").MongoClient;
let express = require("express");
let cors = require("cors");
let app = express();

app.use ( cors());
app.use( express.json());

//Set up default mongoose connection
const mongoDBURL = 'mongodb+srv://admin:admin@cluster0-wg5xk.mongodb.net/absence-app?retryWrites=true&w=majority';

mongoClient.connect(mongoDBURL, { useNewUrlParser: true ,useUnifiedTopology: true} , (err, db)=>{
    
    if( err ){
        console.log ( "there is err");
        throw err;
    }

    console.log( db )
        
    app.listen( 3001 , ( ) =>{
        console.log ( "server is listenning on 3001");
    })
 
    app.get( "/listStudents/:id_class", ( req, res) =>{
        console.log( req.params );
        let id_class= req.params.id_class;
        db.collection("Student").find().toArray( (err, data )=>{
            if ( err)
                throw err;
            res.json( data );
        })
    })

    console.log( "hackili")
} );
    
