const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const users = require(`${__dirname}/data/user.json`);
const listNews = require(`${__dirname}/data/news.json`);
const { check, validationResult } = require('express-validator/check');

const app = express();
app.set('view engine', 'ejs');


app.use('/public', express.static('public'));
app.use(express.json());

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
    res.render(__dirname+'/views/main.ejs')
});

app.post('/registration', urlencodedParser, [
    check('name').isLength({ min: 3 }),
    check('user_email').isEmail(),
    check('password').isLength({ min: 5 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }else{
        const newUser = {
            name: req.body.name,
            user_email: req.body.user_email,
            password: req.body.password
        };
        fs.readFile(__dirname+'/data/user.json', 'utf8', (err, data) =>{
            if (err){
                console.log(err);
            } else {
                let obj = JSON.parse(data); //now it an object
                obj.push(newUser); //add some data
                let json = JSON.stringify(obj); //convert it back to json
                fs.writeFile(__dirname+'/data/user.json', json, 'utf8', () => {
                    return res.status(200).render(__dirname+'/views/thanks.ejs')
                });
            }});
    }
});

app.post('/add_news', urlencodedParser, [
    check('email').isEmail(),
    check('message').isLength({ min: 10 }),
], (req, res) => {
    const errors = validationResult(req);
    console.log(!errors.isEmpty());
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }else{
        const newNews = {
            author: req.body.email,
            message: req.body.message,
        };
        fs.readFile(__dirname+'/data/news.json', 'utf8', (err, data) =>{
            if (err){
                console.log(err);
            } else {
                let obj = JSON.parse(data); //now it an object
                obj.push(newNews); //add some data
                let json = JSON.stringify(obj); //convert it back to json
                fs.writeFile(__dirname+'/data/news.json', json, 'utf8', () => {
                    return res.status(200).render(__dirname+'/views/thanks.ejs')
                });
            }});
    }
});

const list = ['dsfdsf', 'sdfsdfsdf', 'sdfsdfsdfsd', 'sdfsdfsdf'];


app.get('/add_news', function (req, res) {
    res.render(__dirname+'/views/addNews.ejs')
});

app.get('/feedback', function (req, res) {
    res.render(__dirname+'/views/feedback.ejs')
});

app.get('/registration', function (req, res) {
    res.render(__dirname+'/views/registration.ejs')
});

app.get('/news', function (req, res) {
    res.render('news', {listNews: listNews })
});

app.get('/news/:id', function (req, res) {
    res.render('newsDetail', { newsId: req.params.id, list: list })
});

app.listen(8082);