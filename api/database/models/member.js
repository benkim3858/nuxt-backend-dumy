// database/models/member.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const member = sequelize.define('member', {
    id : {       
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false
    },
    type : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "멤버 타입 (VW:수의사대기, SW:학생대기, S:학생, V:수의사, G:일반회원)"
    },
    name : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "이름"
    },
    nick_name : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "닉네임"
    },
    login_id : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "로그인 아이디"
    },
    password : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "비밀번호"
    },
    phone : {
        type: DataTypes.STRING, 
        allowNull: true,
        comment: "휴대폰 번호"
    },
    phone_auth_no : {
        type: DataTypes.STRING, 
        allowNull: true,
        comment: "휴대폰 인증 번호"
    },
    email : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "이메일(아이디)"
    },
    address : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "주소"
    },
    address_detail : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "상세 주소"
    },
    zipcode : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "우편번호"
    },
    
  }, {
    paranoid : true
  });
  return member;
};