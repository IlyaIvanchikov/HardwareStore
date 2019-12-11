import './style/main.css';
import './style/fonts.css';
import './style/payment.css';
import './style/delivery.css';
import './style/company.css';
import './style/inlog.css';
import './style/pbi.css';
import './components/log';
import 'bootstrap';
import './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

import path from 'path';
import express from 'express';
const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
});