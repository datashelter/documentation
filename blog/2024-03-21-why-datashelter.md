---
title: Why Datashelter?
description: Understand why DataShelter was created and how it can help you secure your data.
slug: why-datashelter
authors:
  - name: Malo Paletou
    title: Founder of Datashelter
    url: https://github.com/mpaletou
    image_url: https://github.com/mpaletou.png
tags: [reflexions, why]
image: https://i.imgur.com/ADGdCrv.png
hide_table_of_contents: false
---

On March 10, 2021, one of OVH's Strasbourg data centers caught fire, taking 3.6 million websites with it. Many web developers, consultants and agencies remembered, and the 8 o'clock news made it the lead story.

At the time, I was an infrastructure consultant. Initially awakened by on-call calls, I soon found myself inundated with calls from my customers: Malo, how long is this going to last? Can we restore our sites elsewhere? Malo, what should we tell our customers?

That day, two subjects took on particular importance: the location of backups and the ease with which they can be restored.

For all too many companies who put their blind trust in their hosting provider to create and maintain their backups, this incident proved critical, if not fatal.

Some companies were able to restore a backup with a delay of several days, while others lost all their data. These were not backups, but snapshots, stored on the same server as their production. 

This example perfectly illustrates **two of my main concerns today**:
- off-site backups are essential
- a backup that can't be restored isn't a backup

### Data backup is not a sexy subject

Fortunately, my customers had backups to restore 😜. But this incident got me thinking about why this type of incident has hurt so many companies. Why didn't so many companies have resilient backup processes in place?

In my opinion, there are **two reasons** explaining this situation:
- **major obstacles** to implementation
- **complexity** of the procedure

To begin with, complexity. What software should I use? What backup policy should I implement? How will I restore my data?

Complexity can never be eliminated, but it can be abstracted to provide a simple, intuitive experience for the user. Like Qonto in banking or Alan in insurance.

Secondly, when you start thinking about corporate backups, you quickly come up against a number of obstacles. Where should I store my data? Do I need to back up structured or unstructured data? How much will it cost?

We usually end up adopting one of these 3 solutions:

- develop a little python/bash script to do the bare minimum
- pay for expensive licenses from Veeam or Acronis, where the price is never clear
- ignore the problem or put it off until later

## Datashelter is here

That's why I created Datashelter. We want to offer a turnkey, sovereign data backup automation solution for small and medium-sized businesses.

This complete solution is built around a simple, **predictable price** (€2/connected server + €5/TB) and, in just a few clicks, **enables you to have resilient backups**, be alerted in the event of an anomaly, and be supported when you need it most.

Quite simply, we want to be a no-brainer when it comes to securing your company's data at the lowest possible cost. Whether you're renting **a small VPS** or **hosting hundreds of applications** with the most demanding availability constraints. 

**We believe Datashelter is the tool that makes your life easier.** So we're giving you 30 days to try it out, and [set up your first backups for free](https://app.datashelter.tech/auth/register)