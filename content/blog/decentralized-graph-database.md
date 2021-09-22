---
date: 2021-09-22T06:33:02.933Z
title: Decentralized graph database
description: The database for freedom fighters
thumbnail: /images/uploads/gunjs.jpeg
banner: /images/uploads/gunjs.jpeg
tag: javascript
---
## What is Gun.js?

GUN is a small, easy, and fast protocol for syncing data. It is a Decentralised graph database.

Unlike a centralised database that lives on a hosted server, data in GUN is distributed by peers and synced using WebRTC(Web Real-Time Communication), Websockets, or other transports. 

## What is a Dweb(Decentralised web)?

Gun.js is based on the concept of a Dweb. A Decentralised Web is a system of interconnected, independent, privately owned computers that work together to provide private, secure, censorship-resistant access to information and services.

## How Gun.js work?

![peer-2-peer](/images/uploads/p2p.png "peer-2-peer")

Each peer would store the data that it needs in the devices local storage, then sync changes with other peers in the same network.

A peer can be an end user or a relay server, that was deployed to make the system more reliable.

The entire database is a union of all graphs on the network, and no one machine controls the entire system.

## Benefits of Gun.js
- Realtime
- Offline mode
- Latency compensation

The data itself is managed through a minimal graph API. Where each record is a node that contains a unique id and any custom data for that entity. 

Any node on the graph can reference another node, allowing you to create an infinite loop of circular dependancies. 

## Getting Started
Simply install the npm package:
```
npm install gun
```

In the javascript Project, make a reference to the node: 
```
import Gun from "gun";
const gun = Gun();

const ref = gun.get("DLT");

```
We use the get() method to get the data, and we pass in a "key" to let it know where to read the data from.

Writing data:
```
ref.put({ data });
```
We will use the put() method to write data to it.

listening to updates:
```
ref.on((data) => { //do something });
```
We use the on() method to subscribe to updates and changes on a node in realtime.


## Additional features
1) SEA(Security, Encryption and Authorisation)
2) RAD - a storage adapter for GUN that stores data at disk using a radix tree
3) AXE(Advance Exchange Equation) - advance way to connect peers together


[Example of chat application using gun.js](https://gun-chat-dapp.web.app/)
