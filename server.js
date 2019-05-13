const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const readline = require('readline');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;


var output = '';
var stdin = process.openStdin();



stdin.addListener("data", function(d) {
    console_in = d.toString().trim();
    

    if(console_in.toUpperCase() === "EXIT"){
        stopServer();
    }

    fetch(console_in, function(){console.log("Done!")});
});

function stopServer(){
    db.close();
    console.log("Goodbye!");
    process.exit(0);
}

app.listen(port, () => console.log('Server running on ' + port));

let db = new sqlite3.Database('./database.db3', sqlite3.OPEN_READWRITE, (err) => {
    if(err)
        console.log(err.message);
    console.log("Connected to DB");
});




app.use(bodyparser.json());

app.post('/api/points', function(req, res) {
    console.log("Recieved " + JSON.stringify(req.body.message));
    fetch(req.body.message,  function(){res.send({msg : output}) } );
   
    //console.log("sending " + msg);
    
});

app.post('/api/support', function(req, res) {
    console.log("Request from " + JSON.stringify(req.body.name));
    console.log("Email: " + JSON.stringify(req.body.email));
    console.log("Message: " + JSON.stringify(req.body.message));
    console.log("Recieved At " + JSON.stringify(req.body.date).substring(1,11) );

    db.run('INSERT INTO support(name, email, date, message) VALUES(?,?,?,?) ', [JSON.stringify(req.body.name), JSON.stringify(req.body.email), JSON.stringify(req.body.date).substring(1,11), JSON.stringify(req.body.message)], function(err){
        if(err){
            console.log(err.message);
            res.send( {msg: "Inteneral server error..."});
            return;
        }
        else{
            res.send( {msg: req.body.name + ", your request was recieved!"});
        }
        
    });

    //res.send( {msg: req.body.name + ", your request was recieved!"});
});



function fetch(input, callback){
    console.log('fetching data for ID' + input + '...');
    let sqlcmd = 'SELECT DISTINCT ID,NAME,POINTS FROM points WHERE id="' + input +'" ORDER BY id';
    output = "ID " + input + " was not found.";

    db.all(sqlcmd, [], function(err, rows)  {
        if(err){
         console.log(err)
         throw err;
        }
         //output = "ID " + input + " was not found.";
         rows.forEach((row) => {
            //console.log('ID: ' + row.ID + '   Name: ' + row.NAME + '   Points: ' + row.POINTS);
            if(row.ID != null){
             output = 'ID: ' + row.ID + ' |  Name: ' + row.NAME + ' | Points: ' + row.POINTS;
            }

          })
    console.log(output);
    callback();
    });

}




function sendPoints(){
    app.get('/api/points', (req, res) =>  {
        res.send({message: output});
    });
}