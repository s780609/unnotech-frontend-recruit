# unnotech-frontend-recruit
## 專案說明
專案是用 `Vue CLI` 的 `vue create [project name]` 指令 建立的，版本為3.0，preset 為預設  
用 `Vue CLI` 建立的原因是單純想說比較快，因為我也對 `Vue` 不熟，如果一個一個裝，裝 `vue`、`babel`、`webpack`，光這三個還有設定，我大概三天是用不完的，因為平常還上班

## 專案設定
請先把 git repo 拉下來
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
### src folder
`src` 這個資料夾存放有所有有關 VUE 的程式碼
分別有 `App.vue`, `main.js` 和 以下子資料夾  
1. assets  
用來放資源
2. components  
元件
3. lib  
共用功能
4. pages  
頁面Vue元件

### public folder
放 favicon 和 靜態index.html

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
