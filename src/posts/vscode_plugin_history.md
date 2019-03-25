---
title: "vscode下载插件降级"
description: ""
date: "2019-03-10"
tags: ["vscode"]
published: true
---

## 方法

扩展程序的直接下载URL格式如下：

```
https://${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${extension name}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage
```

`publisher`：发布者

`extension name`: 插件名

`version`: 插件版本

## 例子

插件地址`https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode`

参数：itemName=${esbenp}.${prettier-vscode}

等于

参数：itemName=${作者}.${插件名}

## 安装

下载完成后重命名文件名为`*.vsix`

打开`vscode`,选择插件,选择...然后从`*.vsix`安装
