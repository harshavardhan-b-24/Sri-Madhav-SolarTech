const https = require('https');
https.get('https://ibb.co/4gnZSFS8', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="og:image" content="(.*?)"/);
    if(match) console.log(match[1]);
  });
});
