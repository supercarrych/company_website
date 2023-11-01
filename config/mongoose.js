/**
 * Created by 1 on 2016/5/16.
 */
var mongoose=require('mongoose');
var config=require('./db_url.js');

module.exports=function(){
    var db=mongoose.connect(config.mongodb,{useMongoClient: true});
    mongoose.connection.on('error',function(err){
        if(err){
            console.log("数据库连接失败：" + error);
        }
    });
    mongoose.connection.on('open',function(){
        console.log("------数据库连接成功！------");
    });
    require('../model/user.js');
    require('../model/news.js');
    require('../model/recruit.js');
    require('../model/quit.js');
    require('../model/feedback.js');
    return db;
}