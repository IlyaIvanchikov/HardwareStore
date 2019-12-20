import path from 'path';
import express from 'express';
import bodyParser from "body-parser";
import Users from './user';

const urlencodedParser = bodyParser.urlencoded({extended: false});
const app = express();
            const DIST_DIR = __dirname;
            const HTML_FILE = path.join(DIST_DIR, 'page', 'index.html');
            const HTML_FILE1 = path.join(DIST_DIR, 'page', 'delivery.html');
            const HTML_FILE2 = path.join(DIST_DIR, 'page', 'payment.html');
            const HTML_FILE3 = path.join(DIST_DIR, 'page', 'inlog.html');
            const HTML_FILE4 = path.join(DIST_DIR, 'page', 'pbi.html');
            const HTML_FILE5 = path.join(DIST_DIR, 'page', 'company.html');
            const HTML_FILE6 = path.join(DIST_DIR, 'page', 'register.html');
app.use(express.static(DIST_DIR));
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
});
app.get('/index.html', (req, res) => {
    res.sendFile(HTML_FILE)
});
app.get('/delivery.html', (req, res) => {
    res.sendFile(HTML_FILE1)
});
app.get('/payment.html', (req, res) => {
    res.sendFile(HTML_FILE2)
});
app.get('/company.html', (req, res) => {
    res.sendFile(HTML_FILE5)
});
app.get('/pbi.html', (req, res) => {
    res.sendFile(HTML_FILE4)
});
app.get('/register.html', (req, res) => {
    res.sendFile(HTML_FILE6)
});
app.get('/inlog.html', (req, res) => {
    res.sendFile(HTML_FILE3)
});

app.post("/register", urlencodedParser, async (req, res) => {
    if(!req.body) {
      res.sendStatus(400);
    }
      const user = new Users(req.body.log, req.body.pass);
      await user.save();
      res.redirect('index.html');
  });
  
  app.post("/inlog", urlencodedParser, async (req, res) => {
    if(!req.body) {
      res.sendStatus(400);
    }  
      const user = new Users(req.body.log, req.body.pass);
      const result = await user.search();
      if (result) {
        await user.userSave();
        res.redirect('index.html');
      }
      else {
        res.redirect('inlog.html');
      }
    })

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
});