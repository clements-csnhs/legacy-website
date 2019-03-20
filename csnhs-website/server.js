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
    console.log("fetching data for ID " + console_in);
    fetch(console_in);
});

app.listen(port, () => console.log('Server running on ' + port));

let db = new sqlite3.Database('./database.db3', sqlite3.OPEN_READONLY, (err) => {
    if(err)
        console.log(err.message);
    console.log("Connected to DB");
});

//db.close();


app.use(bodyparser.json());

app.post('/api/points', function(req, res) {
    console.log("Recieved " + JSON.stringify(req.body.message));
    fetch(req.body.message);
    res.send();
});


function fetch(input){
    let sqlcmd = 'SELECT DISTINCT ID,NAME,POINTS FROM points WHERE id="' + input +'" ORDER BY id';

    db.all(sqlcmd, [], (err, rows) => {
        if(err){
         throw err;
        }
         output = "ID " + input + " was not found.";
         rows.forEach((row) => {
            //console.log('ID: ' + row.ID + '   Name: ' + row.NAME + '   Points: ' + row.POINTS);
            if(row.ID != null){
             output = 'ID: ' + row.ID + ' |  Name: ' + row.NAME + ' | Points: ' + row.POINTS;
            }

    })
    console.log(output);

    sendPoints();
 });
}




function sendPoints(){
    app.get('/api/points', (req, res) =>  {
        res.send({message: output});
    });
}