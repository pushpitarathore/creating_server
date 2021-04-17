const express = require('express')
const app = express()
let port = 3000;
app.get('/', function (req, res) {
  res.send('Hello world')
})
app.get('/test',(req, res)=>{
   let n = req.query .name;
   let sn = req.query.surname;
  console.log(req.query.name);
  console.log(req.query.surname)
  console.log(`hello ${n} ${sn} from test route`);
  res.send(`hello ${n} ${sn} from test route`);
});
 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
