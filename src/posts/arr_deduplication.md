---
title: "数组去重"
description: ""
date: "2019-03-07"
tags: ["javascript", "前端"]
published: false
---

```javascript
function deduplication(arr) {
  let result = [];//返回的结果
  let obj = {};
  arr.forEach(item => {
    if(!obj[item]) {//如果obj[item] 不为true代表结果数组没有这个值
      result.push(item);
      obj[item] = true;
    }
  })
  return result
}
```