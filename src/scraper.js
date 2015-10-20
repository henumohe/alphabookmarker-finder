import client from 'cheerio-httpcli';
import JSON5 from 'json5';

function wait(n){
  return new Promise(resolve => setTimeout(() => resolve(), n));
};

function scrapeAll(urls, delay, alphaCount) {
  return Promise.all(urls.map(async function(url,i) {
    await wait(delay*i);
    return scrape(url, alphaCount);
  }));
}

async function scrape(url, alphaCount) {
  let result = await client.fetch(url);
  const b = JSON5.parse(result.body).bookmarks.slice(-alphaCount).map(bookmark => {return bookmark.user});
  return b;
}

export default {
  scrape: scrape,
  scrapeAll: scrapeAll
};
