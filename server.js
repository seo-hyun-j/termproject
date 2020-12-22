const express = require("express");

const app = express();
const PORT = process.env.PORT

app.listen(PORT,function(){
    console.log('listening on 8080')
});

app.get('/',function(요청, 응답){
    응답.sendFile(__dirname+'/index.html')
    응답.sendFile(__dirname+'css/style.css')
});