const express           = require('express'),
      url               = require('url'),
      mongoose          = require('mongoose'),
      User              = require('./user');
      app               = express(),
      bodyParser        = require('body-parser'),
      TweetsManager     = require('./TweetsManager.js'),
      path              = require('path'),
      consts            = require('./consts'),   
      session           = require('client-sessions'),
      port              = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/assets', express.static(path.join(__dirname, 'public')));
//------------------------------------------------------------------------------
app.use(session({
  cookieName: 'session',
  secret: 'tweetsessionmanagment',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  httpOnly: true,
  secure: true,
  ephemeral: true
}));

// app.all('*', (req,res,next) => {
//     console.log("logged in");
//     req.next();
// });

const conn = mongoose.connection;//get default connection

app.post('/login', function(req, res) {
  conn.collection('users').findOne({ userName: req.body.name }, function(err, user) {
    if (!user) {
      res.json({"error": "user name not exists"});
      //res.render('login.jade', { error: 'Invalid email or password.' });
    } else {
      if (req.body.password === user.password) {
        // sets a cookie with the user's info
        req.session.user = user;
        res.send(true);
        //res.redirect('/dashboard');
      } else {
        res.json({"error": "invalid password"});
        //res.render('login.jade', { error: 'Invalid email or password.' });
      }
    }
  });
});

app.get('/logout', function(req, res) {
  req.session.reset();
  res.send(true);
  //res.redirect('/');
});

//Middleware to check if the user logged in
app.use(function(req, res, next) {
  if (req.session && req.session.user) {
    conn.collection('users').findOne({ userName: req.session.user.userName }, function(err, user) {
      if (user) {
        req.user = user;
        delete req.user.password; // delete the password from the session
        req.session.user = user;  //refresh the session value
        res.locals.user = user;
      }
      // finishing processing the middleware and run the route
      next();
    });
  } else {
    next();
  }
});

//------------------------------------------------------------------------------

app.post('/register', (req,res) => {
    console.log(`Add new user`);

    return TweetsManager.registerNewUser(req,res);
    
});

app.get('/getUserStatuses',requireLogin, (req,res) => {
    var urlPart = url.parse(req.url, true);
    var query   = urlPart.query;

    var name = query.name;
    console.log(`find user: ${name}`);

    return TweetsManager.getUserStatuses(req,res, name);
    
});

app.post('/addUserStatus',requireLogin, (req,res) => {
    return TweetsManager.addUserStatus(req,res);
});

// app.post('/addUserStatus', (req,res) => {
//     return TweetsManager.addUserStatus(req,res);
// });

app.post('/IncTweetForStatus', (req,res) => {
    return TweetsManager.IncTweetForStatus(req,res);
});

app.get('/GetTop10Statuses', (req,res) => {
    return TweetsManager.GetTop10Statuses(req,res);
});

app.get('/GetAllPosts', (req,res) => {
    return TweetsManager.GetAllPosts(req,res);
});

app.get('/GetAllPostsSummery', (req,res) => {
    return TweetsManager.GetAllPostsSummery(req,res);
});

app.post('/addNewPost', (req,res) => {
    return TweetsManager.addNewPost(req,res);
});
// app.get('/', (req,res) => {
//     console.log(`Get show api ${path.join(__dirname + '/index.html')}`);

//     res.sendFile(path.join(__dirname + '/public/index.html'));
// });

app.all('*', (req,res) => {
    res.status(404).json({
        Error: 'http verd is wrong, pls check the route and try again'
    });

});

//Function to invoke before methods that requiers login
function requireLogin (req, res, next) {
  if (!req.user) {
    res.json({"error": "you are not logged in, login and try again"});
    //res.redirect('/login');
  } else {
    next();
  }
};

app.listen(port);

console.log('listening');