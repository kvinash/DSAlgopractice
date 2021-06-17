const https = require('https');
let fs = require("fs");
let crypto = require("crypto");
let hash = crypto.createHash("sha1");
https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let data = '';
  let fullBody = ""; 
  // parse json data here...
  resp.on("data",(eachPiece) => {
     fullBody+=eachPiece
  })

  resp.on("end", async () => {
    try{
      data = JSON.parse(fullBody).data;
      data = data.split(",");
      let stream = fs.createWriteStream("output.txt");
      for(let i=0 ; i<data.length;i+=2){
          console.log(data[i], data[i+1])
          let dataAge = data[i+1].split("=")[1];
          if(dataAge=="32"){
            let keyData = data[i].split("=")[1];
            stream.write(keyData)
            stream.write("\n")
          }
      }
  fs.createReadStream("output.txt").on('data', data => hash.update(data)).on('end', ()=>{
        return new Promise((resolve, reject)=>{
           finalOutput = hash.digest('hex')
          console.log("finalOutput", finalOutput)
           resolve(finalOutput)
        })
      

     })

     
    } catch(error) {
       console.log(error)
    }
  })
  

});