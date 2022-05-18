const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { serialize } = require('v8');
const basename = path.basename(__filename);
const config = require(path.join(process.env.configPath, './db.config.js'));
const db = {};

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !==0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize; // 소문자는 디비 커넥션들이 들어가 있다.
db.Sequelize = Sequelize; // 대문자는 시퀄라이즈의 모듈내용이 들어가있다.

// 익스포트 해줌
module.exports = db;