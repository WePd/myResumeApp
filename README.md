## Electron + React Hooks + TS 实战开发：实现简历平台

### 项目运行

```js
// 1.下载
npm run install
// 2. 运行
npm run start:render
npm run start:main
```
### 问题记录
```js
1. ts会检查图片文件，会出现报错
解决办法：
声明一个文件，在文件中添加
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
2. 在项目中使用redux-toolkit(后面再改)
```

