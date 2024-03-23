---
title: "Configuring BGP on a Cisco Router: A Step-by-Step Guide"
draft: false
author: enginrr
image:
  src: /images/pexels-pixabay-159304.jpg
  alt: Picture of a router
snippet: In the world of social media marketing, a new player is making a significant impact TikTok. This guide explores the potential of TikTok ads and how to harness them effectively
publishDate: 2023-06-29 11:39
category: Tutorials
tags:
  - networking
  - router
  - bgp
  - configuration
---
So, you've got a Cisco router and you want to set up BGP (Border Gateway Protocol) to enable communication with other autonomous systems on the internet. Well, you're in the right place! Configuring BGP might seem daunting at first, but with a clear guide, it can be a breeze. Let's dive in and get started.

## Prerequisites

Before we begin, make sure you have:

- Access to your Cisco router's CLI (Command Line Interface)
- Basic knowledge of networking concepts
- BGP neighbor information from your ISP or the autonomous systems you wish to peer with

## Step 1: Accessing the CLI

First things first, let's access the CLI of your Cisco router. You can do this through SSH, Telnet, or directly connecting to the console port.

```markdown
$ ssh username@router_ip
```

## Step 2: Enter Global Configuration Mode

Once you're in, you'll need to enter global configuration mode. This is where we'll make all the necessary changes to configure BGP.

```markdown
Router> enable
Router# configure terminal
```

## Step 3: Enable BGP Routing

Now, let's enable BGP routing on the router.

```markdown
Router(config)# router bgp <your_ASN>
```

Replace `<your_ASN>` with your Autonomous System Number (ASN). This is provided to you by your ISP.

## Step 4: Configure BGP Neighbors

Next, you'll want to configure BGP neighbors. These are the routers with which your router will exchange routing information.

```markdown
Router(config-router)# neighbor <neighbor_ip> remote-as <neighbor_ASN>
```

Replace `<neighbor_ip>` with the IP address of your neighbor router and `<neighbor_ASN>` with their ASN.

## Step 5: Advertise Networks

Now, let's tell BGP which networks to advertise to our neighbors.

```markdown
Router(config-router)# network <network_address> mask <subnet_mask>
```

Replace `<network_address>` with the network you want to advertise and `<subnet_mask>` with its corresponding subnet mask.

## Step 6: Verify and Save Configurations

Finally, let's verify our configurations and save them.

```markdown
Router# show ip bgp
Router# copy running-config startup-config
```

The first command will display the BGP routing table, showing the routes learned and advertised. The second command saves our configurations so they persist across reboots.

And there you have it! You've successfully configured BGP on your Cisco router. Remember, BGP configurations can vary depending on your network setup and requirements, so always refer to Cisco's documentation or consult with a networking expert if you encounter any issues. Happy routing!
