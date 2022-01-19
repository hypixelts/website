---
id: skyblock
title: Skyblock Related Info
sidebar_position: 3
---

## Get Info regarding Collections
To get info regarding collections in SkyBlock, you can call the `collections` method of the `skyblock` property on the client:

```typescript
client.skyblock.collections().then(console.log);
```
The above code returns an object containing the collections.

## Get Info regarding Skills
To get info regarding skills in SkyBlock, you can call the `skills` method of the SkyblockManager:

```typescript
client.skyblock.skills().then(console.log);
```
The above code returns an object containing the skills.

## Get Info regarding Items
To get info regarding items in SkyBlock, you can call the `items` method of the SkyblockManager:

```typescript
client.skyblock.items().then(console.log);
```
The above code returns an object containing the items.

## Get News
To get the news related to SkyBlock, you can call the `getNews()` method of the SkyblockManager:

```typescript
client.skyblock.getNews().then(console.log);
```
The above code returns an object containing the news.

## Get Auction
Auctions can be requested by either providing the uuid of the auction, uuid of the player, or the uuid of the profile. This can be done by calling the `getAuction` method of the SkyblockManager:

:::info
In the `getAuction` method, you have to pass the type of the UUID you are providing in the first argument, as you can see in the below code, the UUID of a player is provided and the type of the UUID is `player`. Depending on the UUID you are providing, there are 3 types: `uuid` (uuid of the auction), `player` (uuid of the player), `profile` (uuid of a profile.)
:::

```typescript
client.skyblock.getAuction('5a170273b6b34076acfe29149de1916b', 'player').then(console.log)
```
The above code returns an object containing the auctions.

## Get Active Auctions
To get the active auctions, you can call the `getActiveAuctions()` method of the SkyblockManager:

```typescript
client.skyblock.getActiveAuctions().then(console.log);
```
The above code returns an object containing the active auctions.

## Get Recently Ended Auctions
To get the recently ended auctions (auctions which ended in the last 60 seconds), you can call the `getRecentlyEndedAuctions()` method of the SkyblockManager:

```typescript
client.skyblock.getRecentlyEndedAuctions().then(console.log);
```
The above code returns an object containing the recently ended auctions.

## Baazar
Returns the list of products along with their sell summary, buy summary and quick status. For more info, please read the [Hypixel API Documentation](https://api.hypixel.net/#tag/SkyBlock/paths/~1skyblock~1bazaar/get). To get the baazar, you can call the `baazar` method of the SkyblockManager:

```typescript
client.skyblock.baazar().then(console.log);
```
The above code returns an object containing the baazar.

## Get a SkyBlock Profile
Returns the SkyBlock profile data, such as stats, objectives etc. The data returned can differ depending on the players in-game API settings. To get the profile, you can call the `getProfile` method of the SkyblockManager:

:::info
You can either pass the user's name, or their UUID in the `getProfile` method.
:::

```typescript
client.skyblock.getProfile('longlife').then(console.log);
```