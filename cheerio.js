const cheerio = require('cheerio');
const fs = require('fs');
const arg = require('bot-arg');
const [,,filepath_html = arg('filepath_html')] = process.argv;
const html = fs.readFileSync(filepath_html, 'utf8');
const $ = cheerio.load(html);
module.exports = $;
