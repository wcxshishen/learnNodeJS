const db = require("./nodejs-orm");

async function handleDB(res,tableName,methodName,n1,n2){
    let Model = db.model(tableName);
    let result
    console.log("执行Handle函数");
    try{
        result = await new Promise((reslove,reject) => {
            if(!n1){
                Model[methodName]((err, data) => {
                    if(err){
                        reject(err);
                        return;
                    }
                    reslove(data);
                })
                return;
            }

            // 没有n2
            if(!n2){
                Model[methodName](n1,(err, data) => {
                    if(err){
                        reject(err);
                        return;
                    }
                    reslove(data);
                })
                return;
            }

            if(!n2){
                Model[methodName](n1,(err, data) => {
                    if(err){
                        reject(err);
                        return;
                    }
                    reslove(data);
                })
                return;
            }

            // n1,n2都存在
            Model[methodName](n1,n2,(err, data) => {
                if(err){
                    reject(err);
                    return;
                }
                reslove(data);
                
            })
        })
    }catch(err){
        console.log(err);
        res.send({errMsg:"数据库查询出错"});
        return;
    }
    return result;
}

module.exports = handleDB