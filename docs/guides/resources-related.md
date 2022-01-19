---
id: resources
title: Resources Related Info
sidebar_position: 1
---

## Game Info
To get information about hypixel games, you can call the `gameInfo` method of the `resources` (aka ResourcesManager) property on the client:

```typescript
client.resources.gameInfo().then(console.log);
```
The above code returns an object containing the information about each game.

## Get Achievements
To get the achievements, you can call the `getAchievements` method of the ResourcesManager:

```typescript
client.resources.getAchievements('skywars').then(console.log);
```
The above code returns an object containing all the achievements.

## Get Challenges
To get the challenges, you can call the `getChallenges` method of the ResourcesManager:

```typescript
client.resources.getChallenges().then(console.log);
```
The above code returns an object containing all the challenges.

## Get Quests
To get the quests, you can call the `getQuests` method of the ResourcesManager:

```typescript
client.resources.getQuests().then(console.log);
```
The above code returns an object containing all the quests.

## Get Guild Achievements
To get the guild achievements, you can call the `getGuildAchievements` method of the ResourcesManager:

```typescript
client.resources.getGuildAchievements().then(console.log);
```
The above code returns an object containing all the guild achievements.

## Get Vanity Pets
To get the vanity pets, you can call the `getVanityPets` method of the ResourcesManager:

```typescript
client.resources.getVanityPets().then(console.log);
```
The above code returns an object containing all the vanity pets.

## Get Vanity Companions
To get the vanity companions, you can call the `getVanityCompanions` method of the ResourcesManager:

```typescript
client.resources.getVanityCompanions().then(console.log);
```
The above code returns an object containing all the vanity companions.