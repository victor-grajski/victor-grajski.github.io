---
layout: post
title: Shoom
date: "2018-11-05"
categories: jekyll update
permalink: "/shoom"
description: Shoom is an app to help emerging musical artists earn more money from touring by showing them where their potential new fans are and by allowing them to book gigs with similar artists.
thumbnail: ./thumbnail.png
category: Product Design
order: 2
---

<img src="/splash-screen350.png" alt="splash" />

<a href="https://invis.io/U5OZEOI4SMF" target="_blank"><b>InVision Prototype</b></a>

## Overview

Shoom is an app that helps emerging musical artists earn more money from touring by connecting them with potential new fans and allowing them to book gigs with similar artists. I designed Shoom as part of a group project for a User Interface Design course at the UC Berkeley School of Information. Through the project I gained exposure to the full UX process from discovery and user research, to ideation, to the development of hi-fi mockups.

## Role

Shoom was designed to be part of a larger ecosystem of services. Thus, I pitched a custom course project idea to create services for artists, venues, and concert goers, and I built a team to pursue the idea. One of my teammates, Yi Gai, designed a service that enabled concert goers to request artists to play in their city. Our third teammate, Sharanya Soundararajan, designed a service that offered concert venue owners a place to list their venue and handle booking requests from artists.

Each of us conducted user research and designed flows for each of our stakeholders autonomously, offering each other regular feedback throughout the course. **I owned the user research process and designed the flow for artists.**

## Inspiration

**When I was growing up, I wanted to be a professional musician more than anything.** However, I came of age during a massive shift in the music industry away from physical sales, which brought an equally massive decline in overall revenue. This left me with the impression that making a living as a musician would become even harder than it already was. In the intervening years, my passion for music has not wavered (insert shameless plugs [here](https://www.instagram.com/anima1a1a1a1/) and [here](https://www.instagram.com/eminencebreak/)), but it has had to compete with my passion for UX design/engineering. Hence, when the opportunity arose to create a custom project in my first User Interface Design course, **I jumped at the opportunity to design a service that puts more power in artists’ hands** and empowers them to sustain their work on their own terms.

## Problem Space

Due to the aforementioned shift in the music industry, artists tour far more frequently than they used to in order to sustain their work. However, touring is both physically and financially draining, and most emerging artists either make no profit or lose money from touring. **How might we enable emerging artists to profit more from touring?**

<img src="/graph.png" alt="graph" />

##### Artists have come to rely on touring to produce revenue as recorded revenue has decreased

In order to create more touring profit for emerging artists, I hypothesized artists need the following:

1. Know where their fans are
2. Book their own shows
3. Manage their own tours (scheduling accommodations, transportation)

In a world where artists are their own analytics managers, booking agents, and tour managers, artists will have all the tools they need to be self-sufficient, thus cutting their costs and allowing them to keep more of their hard-earned money in their pockets.

## Timeline and Process

10 weeks

- Round 1

  - User Flow: 1 week
  - Lo-Fi Mockups: 2 weeks
  - Interviews: 2 weeks

- Round 2
  - Initial Hi-Fi Mockups: 2 weeks
  - Usability Testing: 1 week
  - Final Hi-Fi Mockups: 2 weeks

## Round 1

### User Flow

The initial user flow I envisioned included a blend of Spotify Analytics, Instagram, and Airbnb. Even before creating a lo-fi mockup, I sensed the scope would be too much to take on in an Intro to UX class, but at the time, I believed the best way to test my hypotheses was to design a full lo-fi mockup and conduct exploratory interviews rather than the other way around.

<img src="/user-flow.png" alt="user-flow" />

### Lo-Fi Mockup

To test these hypotheses, I first created a lo-fi mockup of an automated tour-planning service built on a foundation of fan analytics and direct venue booking. **The service I initially mocked up was designed to plan tours for artists by automatically booking shows for them in cities where they had the most potential to increase their fanbase.** In addition, the service estimated how much profit artists could expect to earn from the tour. Two key features helped build up to automated tour planning: fan analytics and venue discovery.

#### Fan Analytics

For Fan Analytics, I provided a heat map that shows how many fans of a given artist or genre live in a given city. **Putting this knowledge into artists’ hands cuts their touring costs by making them their own analytics managers, and it puts them one step closer to being their own booking agent.** I was inspired by Spotify Artist Analytics to show artists not only where their listeners were, but also where related artist’s listeners were, to inspire them to book shows in places they may not have otherwise considered.

<img src="/fan-discovery.png" alt="fan-discovery" />

##### Fan Analytics cuts touring costs by giving artists ownership over their streaming data

#### Venue Discovery

Venue Discovery was designed to help artists find the right venue for their show in an unfamiliar city. I did this by providing a list of venues in a given city ranked by how many related artists had played there recently. **Venue Discovery saves artists money on booking agents by allowing them to understand the scene in any city.**

<img src="/venue-discovery.png" alt="venue-discovery" />

##### Venue Discovery cuts touring costs by making artists their own booking agents

#### Tour Planning

Thus, once an artist decided which cities they wanted to tour in using the Fan Analytics feature, the automated Tour Planner would string together a series of booking requests to the most compatible venues in each of those cities. **Enabling artists to book their own tours saves them money on booking agents and tour managers and lets them keep more of their hard-earned money.**

<img src="/tour-planner.png" alt="tour-planner" />

##### Tour Planning cuts touring costs by making artists their own tour managers

### Interviews

With a full lo-fi mockup in-hand, I interviewed 4 current and former artists who had either played local shows or gone on regional tours. Before walking them through the mockup, I asked high-level questions about the biggest pain points they faced building a fanbase, booking shows, and planning tours.

#### Interview Findings

From the interviews alone, I discovered emerging artists face three key pain points, none of which necessitated an automated tour planning service:

1. **Emerging artists want a way to get noticed by bigger artists** because emerging artists build their fanbase largely by being an opening act
2. **Emerging artists want visibility into which cities suit them best**
3. **Emerging artists want to know if related artists have recently played a given city** such that they don’t compete for the same audience

By walking my participants through the mockup, I discovered that building an automated tour planning service was infeasible due to the amount of uncertainty on the road. One key feature of the service was to show artists how much profit they could expect to earn from their tour - but what if their van broke down halfway to the next show, cost \$1000 to fix, and prevented them from playing their next gig? The service I designed would not be able to handle such contingencies.

### Round 1 Lessons Learned

With the feedback I received through interviews, I had to throw my core assumption that artists want their tours planned for them out the window. Putting in hours of work to create a lo-fi mockup only to have it invalidated through interviews before even showing it taught me a hard lesson I will never forget: **understand your users first.**

In the future, I will be sure to conduct interviews before creating any mockups. But rather than feel discouraged by having my core assumption invalidated, I felt empowered that a number of musicians who had been on the road told me I was on the right track and they wish they had services specifically designed to help them. Thus, the project was reborn as a way to empower emerging artists to build their fanbase by getting noticed by bigger acts and securing a spot as an opener.

## Round 2

### Initial Hi-Fi Mockup

As encouraged as I was to discover emerging artists’ pain points, doing so late in the semester left me with little time to start over. Thus, I made a tough decision to go straight to a hi-fi mockup. Rather than prioritizing tour planning, I instead emphasized allowing artists to request to play a show with other artists because securing an opening spot was the highest priority pain point the artists I interviewed identified. After some reflection, I decided to focus solely on solving for this high priority pain point due to the time constraints.

### Usability Testing

I conducted three usability tests on the initial hi-fi mockup through UserTesting.com with participants who were musicians. The key findings were that users want to be able to see an artist’s top songs on their profile, chat with other artists, and see whether reviews came from other artists or venues.

### Final Hi-Fi Mockup

With this feedback, I created a final hi-fi mockup that showcased artists’ top songs on their profile, allowed them to chat via Facebook Messenger, and showed them whether reviews came from other artists or venues.

<img src="/discover-bands.png" alt="discover-bands" />
<img src="/band-profile.png" alt="band-profile" />

##### Giving bands a way to discover each other in the same service as discovering fans and venues addresses artists’ need to grow their fanbase through collaboration

## Takeaways

As I mentioned earlier, the biggest lesson I learned was to listen to, and understand, your users as much as possible, as early as possible. **If I were to do it all over again, I would start by interviewing as many users as it takes to see patterns, and only then would I begin creating mockups.** Doing so would have freed up time to build and test mockups that addressed artists’ needs more deeply – for example, building specific features showing artists if related acts have played in a given city recently – but given the time constraint of the semester and the setback of creating mockups before interviews, we only had time for a first pass.

Because I feel strongly about enabling emerging artists to circumvent the gatekeepers of the music industry, I’m disappointed that I was only able to go so deep into this project, but I’m encouraged by the fact that in the year since, both Spotify and Apple Music have released artist analytics products, and a number of startups are forming in this space. **Without musicians, we would have no music industry. Let’s put the power back in their hands.**
