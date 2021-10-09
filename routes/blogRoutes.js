const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const redis = require('redis');
const redisURL = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisURL);
const util = require('util');

const Blog = mongoose.model('Blog');

module.exports = app => {
  app.get('/api/blogs/:id', requireLogin, async (req, res) => {
    const blog = await Blog.findOne({
      _user: req.user.id,
      _id: req.params.id
    });

    res.send(blog);
  });

  app.get('/api/blogs', requireLogin, async (req, res) => {

    const blogs = await Blog.find({_user: req.user.id});

    res.send(blogs);
    
    // client.get = util.promisify(client.get);

    // // Using caching to get all blogs if available
    // const cachedblogs = await client.get(req.user.id);  // ? using util lib above to make it promise

    // // if cached available
    // if(cachedblogs){
    //   console.log("SERVING FROM CACHED");
    //   return res.send(JSON.parse(cachedblogs));
    // }

    // // if cached not available
    // const blogs = await Blog.find({ _user: req.user.id });
    // client.set(req.user.id, JSON.stringify(blogs));
    // console.log("SERVING FROM MONGODB");
    // res.send(blogs);
  });

  app.post('/api/blogs', requireLogin, async (req, res) => {
    const { title, content } = req.body;

    const blog = new Blog({
      title,
      content,
      _user: req.user.id
    });

    try {
      await blog.save();
      res.send(blog);
    } catch (err) {
      res.send(400, err);
    }
  });
};
