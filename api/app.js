require('./config/app.env.js');

const {sequelize} = require('./database/models');

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json({ limit: '300mb' }));

// 접속 하는 코드
sequelize.authenticate().then(() => console.log('Connection has been established successfully.'))
.catch(err => console.error('Unable to connect to the database:', err));

// SEQUELIZE 동기화 , 테이블 생성
// { force: true }
// {alter : true}
sequelize.sync({alter : true}).then(() => console.log(" DB SYNC SUCCESS"))
.catch(err => console.log("DB SYNC FAIL:",err))

// 라우터 파일을 참조하기 위헤 
app.use('/api', require('./routes/index'));
app.use('/api', require('./routes/member'));

// http 서버로서의 역할을 먼저 하는지 테스트 하기 위해 라우터를 먼저 작성 한다.
// 디비 연결은 그 이후에 (진성씨는 그렇게 한다.)
module.exports = app;