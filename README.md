# babel-test-project

## 순서

### 설치

```bash
$ npm init -y
$ npm install @babel/core @babel/cli @babel/plugin-transform-arrow-functions @babel/plugin-transform-template-literals @babel/preset-react
```

### 실행 방법

#### 처음 해보기

1. 직접 실행하기

```bash
$ npx babel src/code.js --presets=@babel/preset-react --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-template-literals
```

2. babel.config.js로 실행하기

```bash
$ touch babel.config.js
$ npx babel src/code.js
```

3. webpack의 babel-loader로 실행하기

```bash
$ npm install webpack webpack-cli babel-loader
$ touch webpack.config.js
$ npx webpack
```

4. @babel/core로 실행하기

#### 확장성과 유연성을 고려한 바벨 설정 방법

```bash
$ npm install babel-preset-minify
```
