const validator = require('../service/validation.js');
module.exports = function(app){


  app.get('/api/users', (req,res)=>{
      return res.send('hi '+req.body.username);
  });


  app.post('/api/users', (req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.name;
    let email = req.body.email;
    let age = req.body.age;
    /**
      Username Check block
    */

    if(!username) {
      return res.status(400).send(validator.generateError('Username is not specified'));
    }
    if(!validator.isAscii(username)){
    return res.status(400).send(validator.generateError('Username contains non-ASCII characters'));
    }
    if(!validator.checkMinLength(username, 4)) {
          return res.status(400).send(validator.generateError('Invalid minimum length for username, must be >= 4'));
      }
    if(!validator.checkMaxLength(username, 50)) {
        return res.status(400).send(validator.generateError('Invalid max length for username, must be <= 50'));
    }
    if(!validator.checkSpecialSymbols(username)) {
        return res.status(400).send(validator.generateError('Username contains special symbols, allowed only -,_,.'));
    }
    /**
      Username Check block
    */

    if(!password) {
        return res.status(400).send(validator.generateError('The password is not specified'));
    }
    if(!validator.passMinLength(password, 6)) {
          return res.status(400).send(validator.generateError('Invalid minimum length for password, must be >= 6'));
      }
    if(!validator.passMaxLength(username, 25)) {
        return res.status(400).send(validator.generateError('Invalid max length for password, must be <= 25'));
    }
    /**
      Email Check block
    */
    if(!email) {
        return res.status(400).send(validator.generateError('The email is not specified'));
    }
    if(!validator.emailMinLength(email, 10)) {
        return res.status(400).send(validator.generateError('Invalid minimum length for email, must be >= 10'));
    }
    if(!validator.emailMaxLength(email, 255)) {
        return res.status(400).send(validator.generateError('Invalid max length for email, must be <= 255'));
    }
    if(!validator.validateEmail(email)) {
        return res.status(400).send(validator.generateError('Email contains special symbols, here is example exmaple@gmail.com'));
    }
    /**
      Age Check block
    */
    if(!validator.agetype(age)) {
        return res.status(400).send(validator.generateError('Age must be number'));
    }
    /**
      Gender check block
    */




      console.log('app.db.users == ', app.db.users);
      let new_user = new app.db.users();
      new_user.username = username;
      new_user.password = password;
      new_user.name = name;
      new_user.email = email;
      new_user.age = age;
      //new_user.gender = gender;
      new_user.save((err, doc) => {
          if (err) {
              return res.send({
                  status: 'error',
                  message: err
              })
          }
          return res.send(doc);
      });

      app.db.users.create({username: username, password: password,name:name,email:email,age:age}, (err, doc) => {
          if (err) {
              return res.send({
                  status: 'error',
                  message: err
              })
          }
          return res.send(doc);
      })
      
  });

  app.get('/api/users/:id', (req, res) => {
      app.db.users.findOne({_id: req.params.id}, (err, doc) => {
          if (err || !doc) {
              return res.send('user not found');
          }
          return res.send(doc);
      })
  });

  app.put('/api/users/:id', (req, res) => {});
};
