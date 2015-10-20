import Printer from './printer';
import Loader from './loader';
import Scraper from './scraper';

const alphaCount = 3; //最初の3ユーザをアルファブックマーカーとして扱う
const delayTime = 500; //500msに1回HTTPリクエストを投げる
const fileName = './search.data.txt'; // ファイル名

const data = Loader.loadtxt(fileName);
const urls = Loader.getQueries(data);

Scraper.scrapeAll(urls, delayTime, alphaCount).then(results => {
  let alphaUsers = [];
  results.forEach(result => {
    alphaUsers = alphaUsers.concat(result);
  });
  Printer.print(alphaUsers);
}, reject => {
  console.log('reject!');
  console.log(reject);
});
