# 听读小站 - 英语学习资源导航网站

一个为高中生精选的英语阅读与听力资源导航网站。

## 功能特性

- 🌓 **Light/Dark 模式切换** - 右上角按钮切换明暗主题
- 🌐 **中英语言切换** - 支持中文和英文界面切换（资源名称保持英文）
- 🔍 **资源筛选** - 按类型（阅读/听力）和难度筛选资源
- 🔎 **搜索功能** - 支持关键字搜索资源标题、标签和介绍
- 📱 **响应式设计** - 适配各种设备屏幕

## 文件结构

```
听读小站/
├── index.html          # 首页
├── resources.html      # 资源列表页
├── detail.html         # 资源详情页
├── about.html          # 关于页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   ├── data.js        # 资源数据
│   ├── theme.js       # 主题切换功能
│   ├── i18n.js        # 国际化/语言切换
│   ├── main.js        # 主要功能
│   ├── resources.js   # 资源页面功能
│   └── detail.js      # 详情页功能
├── 网站要求文档.md     # 网站需求文档
└── README.md          # 本文件
```

## 使用方法

1. 直接在浏览器中打开 `index.html` 即可访问网站
2. 无需服务器，所有功能均为前端实现
3. 可以通过编辑 `js/data.js` 文件来添加或修改资源

## 添加新资源

编辑 `js/data.js` 文件，在 `resourcesData` 数组中添加新对象：

```javascript
{
    id: 14,  // 唯一ID
    name: "资源名称",  // 资源名称（英文）
    level: "Intermediate",  // 难度级别
    category: "Videos",  // 分类
    type: "listening",  // 类型：reading 或 listening
    tags: ["Tag1", "Tag2"],  // 标签数组
    description: "English description",  // 英文介绍
    descriptionZh: "中文介绍",  // 中文介绍
    link: "https://example.com"  // 资源链接
}
```

## 技术说明

- 纯静态网站，无需后端服务器
- 使用原生 JavaScript，无外部依赖
- 使用 CSS 变量实现主题切换
- 使用 localStorage 保存用户偏好设置（主题和语言）
- 响应式设计，适配移动端和桌面端

## 浏览器支持

支持所有现代浏览器（Chrome、Firefox、Safari、Edge等）

## 许可证

本项目仅供学习使用。

