const Post = require('./models/post');

module.exports = function(app){
  app.post('/posts',function(req,res){
    let title = req.body.title;
    let content = req.body.content;
    let post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;
    post.save();
    res.json(req.body);
  })

  app.get('/',function(req,res){
    console.log('Snow');
    res.send("haha\n");
  })

  app.get('/posts',function(req,res){
    Post.find(function(err,posts){
      res.json({posts:posts});
    })
  })

  app.get('/posts/:id',function(req,res){
    Post.findById({_id:req.params.id},function(err,post){
      res.json({post:post});
    })
  })

  app.put('/posts/:id',function(req,res){
    res.send('update a post')
  })
  app.delete('/posts/:id',function(req,res){
    res.send('delete a post')
  })
}
