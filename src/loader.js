import FS from 'fs';

function loadtxt(fileName) {
  let txt = FS.readFileSync(fileName, 'utf8');
  return txt.split('\n');
}

function getQueries(urls) {
  const prefix = 'http://b.hatena.ne.jp/entry/json/';
  const queries = urls.filter(url => url != '').map(url => prefix + url);
  return queries;
}

export default {
  loadtxt: loadtxt,
  getQueries: getQueries
};
