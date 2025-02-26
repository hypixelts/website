# Getting Started

Before you get started, please know that you will be **needing an API key** to utilize most of this library. You can get one on https://developer.hypixel.net

Some managers, like the ResourceManager, do not require an API key to function. You can read more about this below.

# Installation

First off, you need to install hypixel.ts. You can do this by running the following command in your terminal:

```bash npm2yarn2pnpm
npm install hypixel.ts
```

# Usage

Once you have installed hypixel.ts, you can start using it in your project. Here is an example of how you can use hypixel.ts to [get info about a player](/api/class/PlayerManager#fetch):

```ts ts2esm2cjs
import { Client } from "hypixel.ts";
const client = new Client({ apiKeys: ['YOUR_API_KEY'] }).start();
// using the player username:
client.players.fetch("FC5570").then(console.log);
// using the player UUID:
client.players.fetch("5a170273b6b34076acfe29149de1916b").then(console.log);
```

Certain managers, for example the ResourceManager, are able to function without needing an API key. For example, you can fetch quests using [ResourceManager.fetchQuests](/api/class/ResourceManager#fetchQuests):

```ts ts2esm2cjs
import { Client } from "hypixel.ts";
const client = new Client().start();
client.resources.fetchQuests().then(console.log);
```

That's it! You are now ready to start using hypixel.ts in your project. Head on to the [documentation](/api) to discover more features and functionalities.

If you have any questions, feel free to ask in the [Discord server](https://hypixel.js.org/discord), or DM me directly: `@fc5570`. I will be happy to help you out.
