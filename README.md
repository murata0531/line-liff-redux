# line-liff-redux

# 環境

React TypeScript

redux-toolkit

Line/Liff

# 構築

` .env.development.local ` にLIFF IDを追加
```
REACT_APP_LIFF_ID="<YOUR_LIFF_ID>"
```

コンテナ立ち上げ

```
$ docker-compose up
```

ライブラリを追加したい場合
```
$ docker-compose run --rm node sh -c "npm install"
```

立ち上がったら `http://localhost:3000` にアクセス
