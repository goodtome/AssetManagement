# DumbAssets

[English](README.en.md) | [简体中文](README.zh-CN.md)

DumbAssets 是一个简单的资产管理工具，用于管理实体资产、组件、保修、上传文件和日常维护事项。

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/dumbwareio/dumbassets" alt="GitHub package.json version" />
  <a href="https://hub.docker.com/repository/docker/pregnancy1000/assetmanagment" target="_blank"><img src="https://img.shields.io/docker/v/pregnancy1000/assetmanagment?logo=docker&label=Docker" alt="Docker Image Version" /></a>
  <img src="https://img.shields.io/docker/pulls/pregnancy1000/assetmanagment" alt="Docker Pulls" />
  <img src="https://img.shields.io/badge/license-GPL--3.0-blue.svg" alt="License" />
</p>

<p align="center">
  <img width="75%" src="https://github.com/user-attachments/assets/4c90541b-fb7d-44ac-bacb-064422abd529" />
</p>

## 目录

- [快速开始](#快速开始)
- [功能特性](#功能特性)
- [配置](#配置)
- [安全](#安全)
- [技术细节](#技术细节)
- [参与贡献](#参与贡献)
- [许可证](#许可证)

## 快速开始

### 前置要求

- Docker，推荐用于部署
- Node.js >= 20.0.0，用于本地开发

### 方式一：Docker

```sh
docker run -p 3000:3000 -v ./data:/app/data pregnancy1000/assetmanagment:latest
```

1. 打开 [http://localhost:3000](http://localhost:3000)。
2. 添加资产，上传照片或票据，并跟踪保修信息。
3. 按需配置通知和维护提醒。

### 方式二：Docker Compose

创建 `docker-compose.yml` 文件：

```yaml
services:
  dumbassets:
    container_name: dumbassets
    image: pregnancy1000/assetmanagment:latest
    restart: unless-stopped
    ports:
      - ${DUMBASSETS_PORT:-3000}:3000
    volumes:
      - ${DUMBASSETS_DATA_PATH:-./data}:/app/data
    environment:
      NODE_ENV: ${DUMBASSETS_NODE_ENV:-production}
      DEBUG: ${DUMBASSETS_DEBUG:-true}
      SITE_TITLE: ${DUMBASSETS_SITE_TITLE:-DumbAssets}
      BASE_URL: ${DUMBASSETS_BASE_URL:-http://localhost:3000}
      DUMBASSETS_PIN: ${DUMBASSETS_PIN:-1234}
      ALLOWED_ORIGINS: ${DUMBASSETS_ALLOWED_ORIGINS:-*}
      APPRISE_URL: ${DUMBASSETS_APPRISE_URL:-}
      CURRENCY_CODE: ${DUMBASSETS_CURRENCY_CODE:-USD}
      CURRENCY_LOCALE: ${DUMBASSETS_CURRENCY_LOCALE:-en-US}
```

然后运行：

```sh
docker compose up -d
```

打开 [http://localhost:3000](http://localhost:3000)，即可开始管理资产。

### 方式三：本地开发

```sh
git clone https://github.com/yourusername/DumbAssets.git
cd DumbAssets
npm install
npm start
```

打开 [http://localhost:3000](http://localhost:3000)。

## 功能特性

- 记录资产详细信息，包括型号、序列号、保修、标签和备注。
- 添加组件和子组件，支持层级化资产管理。
- 上传并保存照片、票据、说明书和相关文件。
- 按名称、型号、序列号、描述或标签搜索。
- 配置保修到期通知。
- 配置日常维护提醒。
- 内置 Apprise 通知集成。
- 支持浅色和深色主题，并保存主题偏好。
- 支持可选 PIN 认证和暴力破解防护。
- 支持 Docker 和 Docker Compose 部署。
- 通知中可包含指向具体资产的直接链接。

## 配置

### 环境变量

| 变量 | 说明 | 默认值 | 必填 |
| --- | --- | --- | --- |
| PORT | 服务端口 | 3000 | 否 |
| DUMBASSETS_PIN | PIN 保护，至少 4 位数字 | 无 | 否 |
| APPRISE_URL | 用于通知的 Apprise URL | 无 | 否 |
| TZ | 容器时区 | America/Chicago | 否 |
| BASE_URL | 应用访问地址 | http://localhost | 否 |
| SITE_TITLE | 浏览器标签页和页面标题 | DumbAssets | 否 |
| ALLOWED_ORIGINS | 允许访问实例的来源 | `*` | 否 |
| DEMO_MODE | 启用只读演示模式 | false | 否 |
| CURRENCY_CODE | 价格格式化使用的 ISO 4217 货币代码 | USD | 否 |
| CURRENCY_LOCALE | 价格格式化使用的区域设置 | en-US | 否 |

Apprise 集成已内置，可以直接填写 Discord、ntfy、Telegram 等受支持的通知 URL，不需要额外运行独立的 Apprise 服务。

### 货币配置

DumbAssets 通过环境变量支持多币种。应用使用标准 ISO 4217 货币代码，并根据区域设置格式化数字。

**`CURRENCY_CODE`**

- 默认值：`USD`
- 说明：用于价格格式化的 ISO 4217 货币代码
- 示例：`USD`、`EUR`、`GBP`、`CAD`、`AUD`、`JPY`、`CNY`

**`CURRENCY_LOCALE`**

- 默认值：`en-US`
- 说明：用于货币格式化的区域设置，会影响小数点和千位分隔符
- 示例：`en-US`、`en-GB`、`de-DE`、`fr-FR`、`ja-JP`、`zh-CN`

Docker 示例：

```sh
docker run -p 3000:3000 -v ./data:/app/data -e CURRENCY_CODE=CNY -e CURRENCY_LOCALE=zh-CN pregnancy1000/assetmanagment:latest
```

Docker Compose 示例：

```yaml
services:
  dumbassets:
    image: pregnancy1000/assetmanagment:latest
    environment:
      - CURRENCY_CODE=CNY
      - CURRENCY_LOCALE=zh-CN
```

### 数据存储

所有数据都保存在 `/data` 下的 JSON 文件和上传目录中：

- `/data/Assets.json`：资产数据
- `/data/SubAssets.json`：组件数据
- `/data/Images`：上传的照片
- `/data/Receipts`：上传的票据
- `/data/config.json`：通知和应用配置

## 安全

- 支持可变长度 PIN，至少 4 位数字。
- 使用恒定时间方式比较 PIN。
- 多次失败后触发锁定，降低暴力破解风险。
- 使用安全会话 Cookie。
- 不在客户端保存 PIN。
- 支持请求速率限制。

## 技术细节

### 技术栈

- 后端：Node.js 与 Express
- 前端：原生 JavaScript
- 容器：基于 Alpine 的 Docker 镜像
- 通知：Apprise 集成
- 上传：Multer
- 定时任务：node-cron，用于保修和维护通知

### 依赖

- `express`：Node.js Web 框架
- `multer`：文件上传处理
- `apprise`：通知集成
- `cors`：跨域资源共享中间件
- `dotenv`：环境变量管理
- `express-rate-limit`：API 请求限流
- `express-session`：会话管理和认证
- `cookie-parser`：Cookie 解析
- `node-cron`：定时通知任务
- `uuid`：资产 ID 生成
- `sharp`：图片处理和优化
- `compression`：响应压缩
- `helmet`：安全响应头
- `fs-extra`：文件系统辅助工具

## 参与贡献

1. Fork 本仓库。
2. 创建功能分支：`git checkout -b feature/amazing-feature`。
3. 使用 [Conventional Commits](https://www.conventionalcommits.org/) 提交更改。
4. 推送分支：`git push origin feature/amazing-feature`。
5. 创建 Pull Request。

## 许可证

本项目使用 GPL-3.0 许可证。详情请查看 [LICENSE](LICENSE)。

