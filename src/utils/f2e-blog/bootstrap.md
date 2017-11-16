title: f2e-blog 脚手架  
keywords: f2e-blog, 博客, 文档  
description: 使用 f2e-blog 逐步完成个人博客环境搭建  
date: 2017/11/16

# f2e-blog
f2e-blog 是基于nodejs环境的极简个人博客开发框架。 只需要你了解markdown语法就能快速完成博客文章的发布。

## install&start

- Node.js >= 8.9.1
- Git

``` bash
$ git clone https://github.com/shy2850/f2e-blog # 下载
$ cd f2e-blog
$ npm i
$ npm run tsc # 编译代码
$ npm start   # 启动服务并监听

```

## write article

1. 在 `src/` 下新建 `.md` 文件， 刷新首页列表看到最新文章， 点击进入后实时预览
2. 在 `.md` 文档开始部分书写以下格式描述 

> title: f2e-blog 脚手架  
> keywords: f2e-blog, 博客, 文档  
> description: 使用 f2e-blog 逐步完成个人博客环境搭建  
> date: 2017/11/16
