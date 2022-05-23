const {Router, response} = require('express');
const router = Router();
const { Op } = require("sequelize");

// 모델 불러오기
const Member = require('../database/models')['member'];
// 테스트 AXIOS 경로
// AXIOS_BASE_URL='http://localhost:4000/api'

// 회원가입 동작 테스트
router.post('/sign_up', async function(req, res){
    try {
        return res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).end();
    }
})

// 회원가입 ID 중복 테스트
router.post('/id_check', async function(req, res){
    const {login_id} = req.body;
    try {
        const dumy_id = 'TEST'
        if(login_id === dumy_id) {
            return res.status(400).end();
        }
        return res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).end();
    }
})

// 닉네임 중복 테스트
router.post('/nick_name_check', async function(req, res){
    const {nick_name} = req.body;
    try {
        const dumy_nick_name = '동현'
        if(nick_name === dumy_nick_name) {
            return res.status(400).end();
        }
        return res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).end();
    }
})

// 휴대폰 중복 테스트
router.post('/phone_check', async function(req, res){
    const {phone} = req.body;
    try {
        const dumy_phone = '010-1234-1234'
        if(phone === dumy_phone) {
            return res.status(400).end();
        }
        return res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).end();
    }
})

// 이메일 중복 테스트
router.post('/email_check', async function(req, res){
    const {email} = req.body;
    try {
        const email_dumy = 'test@test.com'
        if(email === email_dumy) {
            return res.status(400).end();
        }
        return res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).end();
    }
})

// 면허번호 중복 테스트
router.post('/license_check', async function(req, res){
    const {license} = req.body;
    try {
        const license_dumy = '12345'
        if(license === license_dumy) {
            return res.status(400).end();
        }
        return res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).end();
    }
})

// 학색증 번호 중복 테스트
router.post('/student_check', async function(req, res){
    const {student} = req.body;
    try {
        const student_dumy = '12345'
        if(student === student_dumy) {
            return res.status(400).end();
        }
        return res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).end();
    }
})

// 로그인 테스트
router.post('/member_login', async function(req, res){
    const {member} = req.body;
    console.log(member);
    try {
        const member_dumy = 'test'
        if(member === member_dumy) {
            return res.status(200).json(member)
        }
        return res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).end();
    }
})

// 클래스 이미지 테스트
router.get('/get_image', async function(req, res, next){
    try {
        return res.status(200).json([1,2,3,4,5,6].map(item => {
            return {
                id : item,
                img : `ex${item}.png`,
                category : "카테고리 이름",
                teacher : "강사명",
                titles : "강의 제목",
                like : 0,
            }
        }));
    } catch (e) {
        console.log(e);
        return res.status(400).end();
    }
    
})




module.exports = router;