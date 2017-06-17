const mongoose  =   require('mongoose'),
      consts    =   require('./consts'),
      Post      =   require('./post'),
      Status    =   require('./status'),
      ObjectId  = mongoose.Types.ObjectId,
      User      =   require('./user');

mongoose.Promise = global.Promise;

mongoose.connect(consts.MLAB_KEY);

const conn = mongoose.connection;//get default connection

conn.on('error',(err) => {
        console.log(`connection error: ${err}`);
        return genarateErrorJson("Connction with Data Base failed");
});


//Add new user to 'users' collection
exports.registerNewUser = (req,res) => { 
  var name = req.body.userName,
      pass = req.body.password,
      imgurl = req.body.imgUrl;

  var newUser = new User({
          userName: name,
          password: pass,
          imgUrl: imgurl,
          statuses: []
      });
  console.log(`name ${name}, pass ${pass}, imgurl ${imgurl}`)
  try{
      var ret = conn.collection('users').save(newUser);
      console.log(ret);
  } catch (e){
    console.log(e);
    res.send(false);
    return false;
  }

  res.send(true);
  return true;
}

//Get all user statuses
exports.getUserStatuses = (req,res, name) => { 
  conn.collection('users').find(
      {userName: name},{'_id': 0, 'userName': 0, 'password': 0, 'imgUrl': 0}
    ).toArray(function(err, users) {
           console.log(users);
           res.send(users);
       });
}

//Add new status to user
exports.addUserStatus = (req,res) => { 
  
  var name          = req.body.userName,
      statusContent = req.body.statusContent;

  try{
    conn.collection('users').update(
      {userName: name}, {
      $push: { statuses: {  
        _id: new ObjectId(),     
        date: new Date(),
        content: statusContent,
        tweets: 0,
        likes: 0,
        comments: [] } 
      }
    }
    );  
  } catch (e){
    console.log(e);
    res.send(false);
    return false;
  }
  res.send(true);
  return true;
}

//Increament status tweets counter
exports.IncTweetForStatus = (req,res) => { 
  
  var id = req.body.statusId;

  try{
    conn.collection('users').update(
      {"statuses._id": ObjectId(id)}, {
      $inc: { "statuses.$.tweets": 1}
    }
    );  
  } catch (e){
    console.log(e);
    res.send(false);
    return false;
  }
  res.send(true);
  return true;
}

//Get top 10 statuses by tweets number
exports.GetTop10Statuses = (req,res) => { 
  conn.collection('users').aggregate(
    [
     { $unwind: "$statuses" },
     { $sort: { "statuses.tweets": -1 } },
     { $limit: 10 } 
    ]
    ).toArray(function(err, statuses) {
            var result = [];
            for(var statusIndex in statuses){
              var tmpStatus = statuses[statusIndex].statuses;
              console.log(`tmpStatus: ${tmpStatus}`);
              result.push(tmpStatus);
            }
            console.log(result);
            return res.send(result);
       });
}

//Get all posts in the system
exports.GetAllPosts = (req,res) => { 
  conn.collection('posts').find({}, {'_id': 0}).toArray(function(err, posts) {
           console.log(posts);
           res.send(posts);
       });
}

//Get all posts in the system
exports.GetAllPostsSummery = (req,res) => { 
  conn.collection('posts').find({}, {'_id': 0}).toArray(function(err, posts) {
            var result = [];
            for(var postIndex in posts){
              var splitedString = posts[postIndex].content.split(/[,.]+/, 5);
              console.log(`splited: ${splitedString}`);
              result.push(splitedString);
            }
            console.log(result);
            return res.send(result);
       });
}

//Add new post
exports.addNewPost = (req,res) => { 
  
  var content = req.body.postContent,
      title   = req.body.postTitle;

  var newPost = new Post({
          title: title,
          date: new Date(),
          mainImgUrl: "",
          contentImgsUrl: "",
          content: content,
          comments: []
      });
  console.log(`title ${title}, content ${content}`)
  try{
      var ret = conn.collection('posts').save(newPost);
      console.log(ret);
  } catch (e){
    console.log(e);
    res.send(false);
    return false;
  }

  res.send(true);
  return true;
}

const genarateErrorJson = (msg) => {
    var errorJson = {};
    errorJson['Error'] = msg;
    return errorJson;
}