var express = require('express');
var app = express();
var ps = require('ps-node')
const psList= require('ps-list')
var cors = require('cors')

app.use(cors())

app.get('/listProcess', async (req, res) => {
    let process=[]
    await psList().then(response=>{
        process=response
    })
  res.send(process);
});

app.get('/killProcess/:pid', async (req,res)=>{

    await ps.kill(req.params.pid, (err)=>{
      if(!err){
        console.log(`The process ${req.params.pid} was successfully killed!`)
        res.send({text:`The process ${req.params.pid} was successfully killed!`})
      }
      else{
        console.log(`Impossible to finish process ${req.params.pid} --> `+new Error(err).message)
        return `Impossible to finish process ${req.params.pid} --> `+new Error(err).message
      }
    })

})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

