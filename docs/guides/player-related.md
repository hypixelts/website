---
id: player
title: Player Related Info
sidebar_position: 0
---

## Getting a Player

To get info of a player, you can use the `fetch` method of the `players` property (aka PlayerManager) on the client. Assuming you have your API key, and have instantiated a new client (read the [Getting Started Guide][start] for more info):

:::info

You can pass the player's name, or their UUID, in the fetch function, the UUID of the player is fetched from a different API, if the name is provided.

::: 

```typescript
client.players.fetch('armc').then(console.log);
```
This returns a new Player class.


## Getting the friends of a Player
The friends of a Player can be accessed using the `getFriends` method of the PlayerManager, or calling the same method on a Player class:

:::info

You do not need to pass the name/uuid of the player if you're calling the `getFriends` method on the Player class.

:::

### Using the PlayerManager:
```typescript
client.players.getFriends('armc', false).then(console.log);
```

:::caution

The above code may take some time to return the results, as the 2nd argument, `raw` is set to false, which means the friends of the player are first requested from the API, which returns only the UUID's of the friends, and each of the friends are manually fetched from the API. An array of Player classes is returned by the above code

:::

### Using Player class:
```typescript
const player = await client.players.fetch('armc'); // returns a Player class.

player.getFriends().then(console.log);
```

:::info

Like the `getFriends` method of the PlayerManager, you can pass a `raw` argument to the above code (which is a boolean), to either return the raw response, containing the UUID's of the friends (`raw` should be set to `true`), or return an array of Player classes (`raw` should be set to `false`).

:::

## Getting the Recently Played Games of a Player
To get the recently played games of a player, you can either use the `recentlyPlayedGames` getter of the player class, or the `getRecentlyPlayedGames` method of the PlayerManager:

### Using the PlayerManager:
```typescript
client.players.getRecentlyPlayedGames('armc').then(console.log);
```
The above code returns an array of recently played games by the name/uuid of the player provided.

### Using the Player class:
```typescript
const player = await client.players.get('armc') // returns a Player class.

player.recentlyPlayedGames.then(console.log);
```

## Get the Status of a Player:
To get the status of a player, you can either use the `status` getter of the player class, or the `getStatus` method of the PlayerManager:

### Using the PlayerManager:
```typescript
client.players.getStatus('armc').then(console.log);
```
The above code returns an object containing the player's status, of the name/uuid of the player provided.

### Using the Player class:
```typescript
const player = await client.players.get('armc') // returns a Player class.

player.status.then(console.log);
```

## Get the Ranked SkyWars Data of a Player:
To get the status of a player, you can either use the `rankedSkywarsData` getter of the player class, or the `getRankedSkywarsData` method of the PlayerManager:

### Using the PlayerManager:
```typescript
client.players.getRankedSkywarsData('armc').then(console.log);
```
The above code returns an object containing the player's ranked skywars data.

### Using the Player class:
```typescript
const player = await client.players.get('armc') // returns a Player class.

player.rankedSkywarsData.then(console.log);
```

[start]: ../Welcome.md