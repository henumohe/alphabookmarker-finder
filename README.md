# alphabookmarker-finder

## About
URL一覧ファイルから、最初の3ブクマのユーザーを集計して、登場回数が多い順にCSV形式で出力する。

## Preparation
### App
1. git clone
1. `npm install -g babel`
1. `npm install`

### Get bookmark list
- http://b.hatena.ne.jp/{はてブID}/search.data
- 3の倍数の行だけ抽出してリポジトリ直下に保存(ファイル名は`search.data.txt`を想定)

#### Example
```txt
http://qiita.com/T0000N/items/7d3450623da5bc27e116
http://ternjs.net/
http://tech-startup.hatenablog.com/entry/2015/10/20/000623
https://github.com/ipselon/structor
...
```

## Usage
`babel-node --stage 0 src/index.js > result.csv`

## Result
```txt
oskimura,6
anoncom,3
ockeghem,5
isgk,2
...
```

## config

```js
const fileName = 'search.data.txt'; // ファイル名
const alphaCount = 3; //最初の3ユーザをアルファブックマーカーとして扱う
const delayTime = 500; //500msに1回HTTPリクエストを投げる
```
> index.js
