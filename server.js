const { createServer } = require('https');
const { parse } = require('url');
const fs = require('fs');
const next = require('next');

require('dotenv').config({ path: '.env.local' });

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const options = {};

try {
  options.key = fs.readFileSync(`./ssl-cert/key.pem`, { encoding: 'utf8' }).replace(/\\n/gm, '\n');
  options.cert = fs.readFileSync(`./ssl-cert/cert.pem`, { encoding: 'utf8' }).replace(/\\n/gm, '\n');
} catch (e) {
  console.error('\x1b[31m >>> SSL ключи не найдены \x1b[0m');
}
app.prepare().then(() => {
  createServer(options, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl).then(() => {});
  }).listen(port);

  console.log(`\x1b[32m >>> Server listening at https://localhost:${port} \x1b[0m`);
});
