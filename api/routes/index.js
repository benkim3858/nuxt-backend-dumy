const {Router} = require('express');
const router = Router();

router.get('/', async function(req, res){
    return res.status(200).send("Hello Ben! This is GET");
});

router.post('/', async function(req, res){
    return res.status(200).send("Hello Ben! This is POST");
});

module.exports = router;