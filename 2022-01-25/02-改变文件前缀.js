const fs = require('fs');
const path = require('path');

let fileNameList = fs.readdirSync(__dirname);



fileNameList.forEach( (currentName,index) => {
    if(currentName.endsWith('.js') && currentName.startsWith(index)){
        fs.renameSync(path.join(__dirname,currentName),path.join(__dirname,`0${index}测试.js`))
    }
})