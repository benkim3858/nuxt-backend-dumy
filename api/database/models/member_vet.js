// database/models/member_vet.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const member_vet = sequelize.define('member_vet', {
    id : {       
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false
    },
    license_no : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "면허 번호"
    },
    license_file_id : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "면허 파일"
    },
    university : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "대학교"
    },
    belong_name : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "소속 이름"
    },
    belong_address : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "소속 주소"
    },
    belong_address_detail : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "소속 상세 주소"
    },
    type : {       
        type: DataTypes.STRING, 
        allowNull: false,
        comment: "의사 타입 (반려임상, 대동물, 일반업체, 공무원, 기관 및 기타)"
    },
    
    
  }, {
    paranoid : true
  });
  return member_vet;
};