---
id: welcome
title: Welcome
sidebar_position: 0
---

## About
hypixel.ts is a [NodeJS](https://www.nodejs.org/) module which allows you to interact with the [Hypixel API](https://api.hypixel.net/) easily.
- Written in Typescript
- CommonJS, ESM support
- 100% coverage of the Hypixel API.

## Installation
**Node.js v14 or newer is required.**
```bash npm2yarn2pnpm
npm install hypixel.ts
```

## Example Usage
#### Get the info of a player:
```typescript ts2esm2cjs
import { Client } from 'hypixel.ts';

const client = new Client('API_KEY');

client.players.fetch('armc').then(console.log);
```

#### Get a SkyBlock profile:
```typescript ts2esm2cjs
import { Client } from 'hypixel.ts';

const client = new Client('API_KEY');

client.skyblock.getProfile('lifelong').then(console.log);
```

## Links
- [Discord Server](https://discord.gg/DDTmaeYUMF)
- [Github](https://github.com/hypixelts/hypixel.ts)
- [npm](https://npmjs.com/hypixel.ts)

## Help
If you're having issues with the module, or it isn't working as expected, you can join our [Discord Server](https://discord.gg/DDTmaeYUMF) or contact FC#5104.