// import path from 'path';
import express from 'express';
import bodyParser from "body-parser";
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../../../webpack.dev.config';
import Users from './user';

const urlencodedParser = bodyParser.urlencoded({extended: false});

const app = express();
            const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));













app.post("/register", urlencodedParser, async (req, res) => {
  console.log(req.body);
  if(!req.body) {
    res.sendStatus(400);
  }
    const user = new Users(req.body.log, req.body.pass);
    await user.save();
    res.redirect('index.html');
});

app.post("/inlog", urlencodedParser, async (req, res) => {
  console.log(req.body);
  if(!req.body) {
    res.sendStatus(400);
  }  
    const user = new Users(req.body.log, req.body.pass);
    await user.search(req.body);
    if (user.search(req.body)){
      res.redirect('index.html');
    }
    else {
      res.redirect('inlog.html'); 
    }

});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})