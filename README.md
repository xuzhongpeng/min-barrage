


## 前言



## 使用

## 例子

## API
初始化传参

属性 | 说明 | 类型 | 默认值 | 必填
---|---|---|---|---
el | 插入弹幕的父级元素，如'.barrge','#el' | string |  |是
defaultHeader | 默认显示的头像，可以是本地静态图片地址，也可以是线上地址，不能是绝对地址 | string | 无
url | 点击弹幕默认的url地址 | string | 无
speed | 弹幕默认移动速度，如10表示10s内完成移动 | number | 10
color | 字体颜色,支持各种颜色值 | string | #ffff（白色）
backColor | 弹幕背景颜色 | string | #69696980(黑灰透明)
height | 弹幕高度 | string | 40px
fontSize | 弹幕字体大小 | string | 20px
isLeft | 弹幕移动方向，为true时从左往右移动 | boolean | false 

start方法
> Barrage.prototype.start(message,option)

属性 | 说明 | 类型 | 默认值 | 必填
---|---|---|---|---
message | 弹幕显示的信息 | string | 无 | 是
option | 可选参数，单条弹幕移动速度，鼠标点击跳转页面等 | object | 无

option可选参数

属性 | 说明 | 类型 | 默认值 | 必填
---|---|---|---|---
speed | 单条弹幕移动速度，如10表示10s内完成移动 | number | 初始化的传值
url | 鼠标点击弹幕跳转页面 | string | 无
headImg | 弹幕头像地址，仅支持绝对地址或者网络图片地址 | 无 
