// api/config/app.env.js
// 프로젝트 안에서 env 내용을 추가 하고 싶을때 
const path = require('path');
export default (function(){
    process.env.appRoot = path.join(__dirname, '../../');
    process.env.configPath = path.join(__dirname);
})();