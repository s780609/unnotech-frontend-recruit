# unnotech-frontend-recruit
## 專案說明
專案是用 `Vue CLI` 的 `vue create [project name]` 指令 建立的，版本為3.0，preset 為預設  
用 `Vue CLI` 建立的原因是單純想說比較快，因為我也對 `Vue` 不熟，如果一個一個裝，裝 `vue`、`babel`、`webpack`，光這三個還有設定，我大概三天是用不完的，因為平常還上班

## Local端開發執行
請先用`CMD`把 git repo 拉下來
```
git clone https://github.com/s780609/unnotech-frontend-recruit
```

進入該資料夾
```
cd unnotech-frontend-recruit
```

請在這個資料夾使用 CMD 或是 shell，然後執行
```
npm install
```

然後可以執行開發環境
```
npm run serve
```

## 專案架構
### src folder(Vue)
`src` 這個資料夾存放有所有有關 VUE 的程式碼
分別有 `App.vue`, `main.js` 和 以下子資料夾  
1. assets  
用來放資源
2. components  
自製Vue元件，命名方式一律 Pascal case，並以 Component 結尾
3. lib  
共用功能的JS，主要都是用來幫我請求 API，命名方式一律 Camel case
4. pages  
頁面Vue元件，對應 path，命名方式一律 Pascal case，並以 Page 結尾

圖示   
![Imgur](https://i.imgur.com/bVJztlm.png)

### public folder
放 favicon 和 靜態index.html

## 邏輯說明
程式進入點是 `main.js`，這裡會設定 route 和 import 所需要的 css 和 第三方套件
而 `App.vue` 基本只有一個 `<router-view>` 只負責頁面切換，和 `material icons` 的 CDN  
在 pages 資料夾裡面，根據 rotues 的 設定 每一個 page component 對應到一個 path，如下
```javascript
const routes = [
  { path: "/", name: "BookListPage", component: BookListPage },
  { path: "/add", name: "AddPage", component: AddPage },
  { path: "/detail/:id", name: "BookDetailPage", component: BookDetailPage },
  { path: "/edit/:id", name: "BookEditPage", component: BookEditPage },
];
```

而 components 目前 我只有寫兩個
* BookComponent => 用來 幫忙產生 Book Card
* HeaderComponent => 用來幫忙產生頁面最上面的 header

## 使用套件以及原因
* `bootstrap` => 因為對這個UI套件最簡單，資源也最好找，而且自己刻CSS很累
* `bootstrap-vue-3` => 為了快速配合 Vue 使用
* `vue-router` => 為了方便切換頁面，本來是想使用 `window.hashChange()` 之類的 JS 原生語法來自己實作切換頁面，不過想想 還是用別人寫好的好了，比較快，也不容易出錯
* Google fonts => 因為懶得自己去刻 返回 和 編輯 的 按鈕，所以使用這個icon (https://fonts.google.com/icons)


## 遇到的困難以及如何解決
1. `Vue3` 的 `ref()` 和 `reactive()` 一開始搞不太清楚，後來看到[ref vs reactive in Vue 3?][1]，才比較理解這兩者區別
2. 因為我是統一用 common.js(自己寫的)，所以在做錯誤處理的時候，在想應該怎麼做比較好，後來是統一用 `console.error(error);`，然後都用 `try catch` 包起來
3. RWD => 因為對 CSS 不熟，所以這方面花了點時間，可是還沒做得很好，google 到的答案通常也都不知道到底對不對  


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


[1]: https://stackoverflow.com/questions/61452458/ref-vs-reactive-in-vue-3