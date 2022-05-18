// database/models/users.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id : {       
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false
    },
    email : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "이메일(아이디)"
    },
    password : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "비밀번호"
    },
    name : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "이름"
    },
    phone : {
        type: DataTypes.STRING, 
        allowNull: true,
        comment: "전화번호"
    }
  }, {
    paranoid : true
  });
  return users;
};