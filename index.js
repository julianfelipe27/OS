var express = require('express');
var app = express();
var ps = require('ps-node')
const psList= require('ps-list') 




app.get('/listProcess', async (req, res) => {
    let process=[]
    await psList().then(response=>{
        process=response
    })
  res.send(process);
});

app.post('/process', function(req,res){

})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

