---
  title: '下载m3u8格式以及各种网站视频'
  description: ''
  date: '2019-03-06'
  tags: ["JavaScript", "前端"]
  published: true
---

## 安装

首先根据文档安装[youtube-dl](https://github.com/rg3/youtube-dl)

然后安装[ffmpeg](https://ffmpeg.zeranoe.com/builds/)

把youtube-dl和ffmpeg都设置到PATH环境变量里面

```shell
// 输入命令下载视频
youtube-dl <m3u8地址>
```

命令会根据你现在的命令行路径把下载视频，根据youtube-dl文档学习配置

### 下载全部格式

```shell
  youtube-dl  --all-formats https://www.youtube.com/watch?v=hLQl3WQQoQ0
  --all-formats ： 添加这个参数之后，所有存在的格式一扫而尽，统统下载；
```

### 查看该视频所有格式类型，只看不下载 -F或者--list-formats

--list-formats ： 这是一个列清单参数，执行后并不会下载视频，但能知道这个目标视频都有哪些格式存在，这样就可以有选择的下载啦！

```shell
  youtube-dl --list-formats https://www.youtube.com/watch?v=hLQl3WQQoQ0
```

### 下载指定格式视频

-f + 编号：通过上一步获取到了所有视频格式的清单，最左边一列就是编号对应着不同的格式，例如我想下载22号那个mp4格式分辨率为1280*720的视频，则按下面的命令就可以轻松指定下载视频哦；

```shell
  youtube-dl -f 22 http://www.youtube.com/watch?v=BlXaGWbFVKY
```

### 下载youtube字幕及视频

有的youtube视频是有字幕的可供下载的，但不是全部；如果过你想要下载字幕用这个脚本来操作也是很容易的；先来说说两个参数–write-sub：加入字幕文件 –all-subs：如果有字幕存在则全部下载

```shell
  youtube-dl --write-sub --all-subs https://www.youtube.com/watch?v=0TjgZbVdOLA
```

### 读取下载链接列表文件

这里的 -a 参数表示读取外部链接文件,video_url.txt为包含视频地址的txt文件，一个地址 。

```shell
  youtube-dl -a video_url.txt
```

### 直接下载最高清版本

如果你不想查看版本，直接下载最高清的版本，也可以直接用下面的命令

```shell
  youtube-dl -f bestvideo+bestaudio https://www.youtube.com/watch?v=0TjgZbVdOLA
```