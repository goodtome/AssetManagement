# DumbAssets

[English](README.en.md) | [简体中文](README.zh-CN.md)

A simple asset tracker for managing physical assets, components, warranties, uploaded files, and routine maintenance.

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/dumbwareio/dumbassets" alt="GitHub package.json version" />
  <a href="https://hub.docker.com/repository/docker/pregnancy1000/assetmanagment" target="_blank"><img src="https://img.shields.io/docker/v/pregnancy1000/assetmanagment?logo=docker&label=Docker" alt="Docker Image Version" /></a>
  <img src="https://img.shields.io/docker/pulls/pregnancy1000/assetmanagment" alt="Docker Pulls" />
  <img src="https://img.shields.io/badge/license-GPL--3.0-blue.svg" alt="License" />
</p>

<p align="center">
  <img width="75%" src="https://github.com/user-attachments/assets/4c90541b-fb7d-44ac-bacb-064422abd529" />
</p>

## Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Configuration](#configuration)
- [Security](#security)
- [Technical Details](#technical-details)
- [Contributing](#contributing)
- [License](#license)

## Quick Start

### Prerequisites

- Docker, recommended for deployment
- Node.js >= 20.0.0, for local development

### Option 1: Docker

```sh
docker run -p 3000:3000 -v ./data:/app/data pregnancy1000/assetmanagment:latest
```

1. Open [http://localhost:3000](http://localhost:3000).
2. Add assets, upload photos or receipts, and track warranties.
3. Configure notifications and maintenance reminders when needed.

### Option 2: Docker Compose

Create a `docker-compose.yml` file:

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

Then run:

```sh
docker compose up -d
```

Open [http://localhost:3000](http://localhost:3000) and start managing your assets.

### Option 3: Local Development

```sh
git clone https://github.com/yourusername/DumbAssets.git
cd DumbAssets
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- Track assets with detailed information, including model, serial number, warranty, tags, and notes.
- Add components and sub-components for hierarchical asset management.
- Upload and store photos, receipts, manuals, and related files.
- Search by name, model, serial number, description, or tags.
- Configure warranty expiration notifications.
- Configure routine maintenance notifications.
- Use built-in Apprise notification integration.
- Switch between light and dark mode with theme persistence.
- Protect the app with optional PIN authentication and brute force protection.
- Deploy with Docker or Docker Compose.
- Share direct links to specific assets from notifications.

## Configuration

### Environment Variables

| Variable | Description | Default | Required |
| --- | --- | --- | --- |
| PORT | Server port | 3000 | No |
| DUMBASSETS_PIN | PIN protection, 4 or more digits | None | No |
| APPRISE_URL | Apprise URL for notifications | None | No |
| TZ | Container timezone | America/Chicago | No |
| BASE_URL | Base URL for the application | http://localhost | No |
| SITE_TITLE | Site title shown in browser tab and header | DumbAssets | No |
| ALLOWED_ORIGINS | Origins allowed to visit your instance | `*` | No |
| DEMO_MODE | Enables read-only mode | false | No |
| CURRENCY_CODE | ISO 4217 currency code for price formatting | USD | No |
| CURRENCY_LOCALE | Locale for currency formatting | en-US | No |

Apprise integration is built in, so you can add Discord, ntfy, Telegram, or other supported notification URLs without running Apprise as a separate service.

### Currency Configuration

DumbAssets supports multiple currencies through environment variables. It uses standard ISO 4217 currency codes and locale-based number formatting.

**`CURRENCY_CODE`**

- Default: `USD`
- Description: ISO 4217 currency code for price formatting
- Examples: `USD`, `EUR`, `GBP`, `CAD`, `AUD`, `JPY`, `CNY`

**`CURRENCY_LOCALE`**

- Default: `en-US`
- Description: Locale for currency formatting, including decimal separators and thousands separators
- Examples: `en-US`, `en-GB`, `de-DE`, `fr-FR`, `ja-JP`, `zh-CN`

Docker example:

```sh
docker run -p 3000:3000 -v ./data:/app/data -e CURRENCY_CODE=CNY -e CURRENCY_LOCALE=zh-CN pregnancy1000/assetmanagment:latest
```

Docker Compose example:

```yaml
services:
  dumbassets:
    image: pregnancy1000/assetmanagment:latest
    environment:
      - CURRENCY_CODE=CNY
      - CURRENCY_LOCALE=zh-CN
```

### Data Storage

All data is stored in JSON files and upload directories under `/data`:

- `/data/Assets.json`: asset data
- `/data/SubAssets.json`: component data
- `/data/Images`: uploaded photos
- `/data/Receipts`: uploaded receipts
- `/data/config.json`: notification and app configuration

## Security

- Variable-length PIN support, 4 or more digits
- Constant-time PIN comparison
- Brute force lockout after too many failed attempts
- Secure session cookies
- No client-side PIN storage
- Rate limiting

## Technical Details

### Stack

- Backend: Node.js with Express
- Frontend: Vanilla JavaScript
- Container: Docker with Alpine base
- Notifications: Apprise integration
- Uploads: Multer
- Scheduling: node-cron for warranty and maintenance notifications

### Dependencies

- `express`: Node.js web framework
- `multer`: file upload handling
- `apprise`: notification integration
- `cors`: cross-origin resource sharing middleware
- `dotenv`: environment variable management
- `express-rate-limit`: API rate limiting
- `express-session`: session management and authentication
- `cookie-parser`: cookie parsing
- `node-cron`: scheduled notification tasks
- `uuid`: asset ID generation
- `sharp`: image processing and optimization
- `compression`: response compression
- `helmet`: security headers
- `fs-extra`: filesystem helpers

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/amazing-feature`.
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/).
4. Push to the branch: `git push origin feature/amazing-feature`.
5. Open a pull request.

## License

This project is licensed under GPL-3.0. See [LICENSE](LICENSE) for details.

