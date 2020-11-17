---
layout: post
title: Journey v1
date: "2020-01-21"
categories: jekyll update
permalink: "/journeyv1"
description: Bridging the gap between psychotherapy sessions through personalized, structured journaling.
thumbnail: ./thumbnail.png
category: Product Design
order: 4
---

<img src="/today1.png" alt="splash" />

<a href="https://www.figma.com/proto/FT1TJLTnzBh0TGV3i5iv6G/v1?node-id=42%3A0&scaling=scale-down" target="_blank"><b>Client-Side Prototype</b></a>

<a href="https://www.figma.com/proto/NUaTPF3WvQXSl8i8PjeVxS/v1?scaling=min-zoom&node-id=1%3A2" target="_blank"><b>Provider-Side Prototype</b></a> (I like to set the zoom level to Width and scroll down)

## Introduction

Journey is a service designed to bridge the gap between psychotherapy sessions through personalized, structured journaling. It consists of a mobile application for clients, and a desktop web application for therapists. At the end of a session, therapists and clients will decide on the journal prompts they want to focus on in the week ahead. Each day until the next session, clients will have the opportunity to write what comes to mind for each prompt and highlight the parts that stand out to them so that before a session, they can have an easy way to decide what they'd like to focus on in the session.

I designed this service in my Product Design Studio course at the UC Berkeley School of Information over a period of 4 weeks. I was advised by a private-practice psychotherapist to ensure I was not causing undue harm. I also conducted generative and evaluative interviews with 3 people who are in therapy or have recently been in therapy. In addition, I intend to use this design as a first iteration for my capstone project which my team and I are currently working on.

I was inspired to design this service because psychotherapists and their clients meet, at most, once a week, and in the time between sessions, a lot can happen. Clients want to make sense of what’s happening between sessions, and they want to make the most of their sessions, but therapists – as much as they want to help – do not have time to support their clients between sessions.

## Goals

Journey's goals are to make the time between sessions feel shorter as well as mindfully continue the therapeutic process between sessions.

## Target Users

Journey's target users are private-practice psychotherapists and their clients.

## Why Journaling?

Journaling is a well-studied way to process both traumatic and non-traumatic stressful events, and psychotherapists often recommend journaling to their clients. Through my interviews with therapists and clients, I found that therapists' time is highly constrained, so my hypothesis is that by having therapists provide personalized prompts for their clients, clients will feel more at ease between sessions, and they will be able to get more out of their sessions by having a repository of what they were thinking and feeling between sessions.

I also focused on journaling instead of attempting to incorporate a number of different activities like mindfulness, readings, and exercise into one service because I found through interviewing clients that they did not want to feel like they had another to-do list to worry about.

<img src="/today_v0.png" alt="today_v0" />

In earlier iterations, I also went back and forth between how much synthesis between sessions I should enable for clients, however, the therapist I was working with advised me it was best to keep synthesis within the sessions to not impose unnecessary distress, and the clients I spoke with said they would not feel comfortable synthesizing their thoughts and feelings between sessions in addition to responding to the journal prompts.

<img src="/synthesis.png" alt="synthesis" />

## Client-Side

### Dynamic Today Tab

The Today tab will be the main hub of the app, and it will cycle between a number of different states depending on the time of their session, which is confirmed by the therapist through their desktop web application.

Each day between sessions, clients will get a new topic and prompt from their therapist. Clients can write as much as they want, and they can highlight part of their response that stand out to them for easy future reference.

<img src="/today1.png" alt="splash" />

On the day of the session, the Today tab will start off with a pre-session check-in.

<img src="/today_pre_session.png" alt="today_pre_session" />

During the session, the Today tab will have its own state to make recalling journal entries as lightweight as possible.

<img src="/today_during_session.png" alt="today_during_session" />

Finally, after a session, clients will be given a short wrap-up activity.

<img src="/today_post_session.png" alt="today_post_session" />

### Timeline

The other main view in the app is Timeline which gives easy access to previous journal entries and session activities (pre-session and post-session). While the focus of the app is to keep clients in the present, I want to provide the opportunity for clients to reflect and make sense of their overall progress in therapy.

<img src="/timeline.png" alt="timeline" />

### Privacy

On the client-side, instead of creating an account with an email/password, I envision the therapist giving their client a unique access code. This will minimize the personal information we are collecting on the client, which is minimally necessary anyway since all the journal data will be stored locally.

Because the majority of therapists don't have time to review journal entries between sessions, I believe it's in the client's best interest to store data locally and not create another account that can be hacked – and yet another the client needs to keep track of – given the sensitive nature of the content they are writing.

I'm also giving clients the option to add layers of protection like Face ID and a passcode as well as giving them the option to delete their local data.

<img src="/settings.png" alt="settings" />

## Provider-Side

Given therapists' time is constrained to the last five minutes of each session, I wanted to make the process of wrapping up a session as lightweight as possible. To that end, all the therapist has to do is choose journal topics for the week ahead, confirm the time for the the next session, and write a small snippet for their client to think about on their way out.

<img src="/provider_main800.png" alt="provider_main" />

To speed up the process of assigning journal topics for the upcoming week, I envision having a library of topics to choose from that the therapist can maintain themselves organized by the types of therapy they practice. In the future, I can envision creating a standardized library for each type of therapy. During the session wrap-up, all the therapist has to do is click to assign a topic for that day instead of manually writing it in every time. To preserve flexibility, I'm giving therapists the options to write their own prompts on-the-fly and save them to a category for future use.

<img src="/choose_topics800.png" alt="choose_topics" />

## Takeaways

I enjoyed discovering how I might help therapists and their clients between sessions by working closely with each group, listening to their needs, making educated design decisions, and evaluating my designs with them. This feedback loop allowed me to get to the heart of what therapists and their clients need between sessions in a short amount of time, and I look forward to continuing the process in my capstone project.
