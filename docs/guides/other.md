---
id: other
title: Other Info
sidebar_position: 4
---

## Get Active Boosters
To get the active network boosters, you can call the `getActiveBoosters` method of the `other` (aka OtherManager) property on the client:

```typescript
client.other.getActiveBoosters().then(console.log);
```
The above code returns an object containing all the active boosters.

## Get Current Player Counts
To get the player count, you can call the `getPlayerCount` method of the OtherManager:

```typescript
client.other.getPlayerCount().then(console.log);
```
The above code returns an object containing the player count.

## Get Current Leaderboards
To get the leaderboard, you can call the `getLeaderboard` method of the OtherManager:

```typescript
client.other.getLeaderboard().then(console.log);
```
The above code returns an object containing the leaderboard.

## Get Punishment Statistics
To get the punishment statistics, you can call the `getPunishmentStatistics` method of the OtherManager:

```typescript
client.other.getPunishmentStatistics().then(console.log);
```
The above code returns an object containing the punishment statistics.

