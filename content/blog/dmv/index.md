---
layout: post
title:  DMV Redesign
date:   "2019-10-08"
categories: jekyll update
permalink: "/dmv"
description: A redesign of the REAL ID office visit flow for the California DMV.
thumbnail: ./thumbnail.png
category: "Product Design"
---

<img src="/splash-screen.png" alt="splash" />

<a href="https://invis.io/NEU60BEG58U" target="_blank"><b>InVision Prototype</b></a>

## The Challenge
The target user is an adult California resident who speaks English. This target user needs to visit a DMV office to renew their license with a REAL ID. The main business goals are to have more people complete the flow and to reduce the number of customer complaints.

## Lo-Fi Explorations
### Choosing an Office
I originally wanted to make it easy for users who wanted to drop in to an office ASAP as well as those who wanted to book an appointment in advance, but according to the feedback I got from users, this screen imposed a high cognitive load. Thus, in the final version, I created separate paths for users who needed an appointment ASAP and users who wanted to book an appointment in advance.

<img src="/find-an-office-lo-fi.png" alt="find-an-office-lo-fi" />

### Choosing a Time
With this screen, I wanted to make accommodate users who were either free only on a certain day or only during a certain time of day. However, the feedback I received was this wasn't clear given only one time slot rendered, something that I wanted to address but wasn't sure how to. In the final version, I realized I could take advantage of horizontal space off the screen to show that a number of time slots were available.

<img src="/choose-a-time-lo-fi.png" alt="choose-a-time-lo-fi" />

### The Day Of
For the confirmation page, I originally wanted to introduce as much natural language as possible to fit all the information necessary on one screen. However, in talking with users, I learned that this amount of text at first glance is intimidating, so in the final version, I cut down the amount of text and also visually broke up the page with alternating white and grey sections.

<img src="/day-of-lo-fi.png" alt="day-of-lo-fi" />

## Final Product
### Landing Page
**I decided to simplify the appointment landing page by routing most of the help text to the FAQs and bringing the actions to the top of the page.** I believe this was the right decision because the amount of text on the page previously obscured what actions the user could take and repeated much of what users can find in the FAQs. I believe something like making an appointment online is a common enough pattern that users don't need a paragraph explaining how to do so.

<img src="/appointment_system_before.png" alt="appointment-system-before" /> <img src="/make-an-appointment.png" alt="make-an-appointment" />

### Booking an Appointment
On this screen, and many of the following screens, **I separated each step in the process into its own screen and structured the decision process in a Q+A format.** I believe this is the right solution to reduce cognitive load per screen.

I also included a progress bar with estimated time remaining in order to give users a sense of where they are in the process now that each screen has been atomized to one step in the process.

Finally, I included info boxes to clarify some of the finer details to the user without overwhelming them with text on the screen by default.

<img src="/book-an-appointment-before.png" alt="book-an-appointment-before" /> <img src="/step-one-after2.png" alt="step-one" />

#### Choosing an Office
**Here I wanted to give users multiple paths to find their office using two common patterns: location and search.** I believe offering multiple options is the right solution because users who are comfortable sharing their location, or are in a place where it makes sense to do so, will complete the flow faster.

Once I know the area they're searching in, I decided to show the nearest office and one other office by default. This will keep the cognitive load low while preserving choice for the user. I opted to only show one other office by default since most CA residents are most likely to go to the nearest office and may be in practical range of one other offices.

<img src="/find-an-office-before.png" alt="find-an-office-before" /> <img src="/find-an-office-after.png" alt="find-an-office-after" />

#### Choosing a Time
**Here I want to guide the user to booking the first available appointment but also preserve the choice to choose their own time.** They can either filter by the time slots available on a given day, or they can filter to which days have a given time slot available. I believe this was the right decision because some users may only be available at a certain time of day or on a certain day.

<img src="/choose-a-time-before.png" alt="choose-a-time-before" /> <img src="/choose-a-time-after.png" alt="choose-a-time-after" />

### The Day Of
I decided to create a dedicated page for users to refer back to leading up to their appointment and to use when they check in (the button renders an infobox with a QR code). I also envision a link to this page being sent in the reminder and confirmation email/text message. **Having a central place to refer back to reduces cognitive load as users prepare for their appointment and may reduce customer complaints.**

<img src="/confirm-appointment-before2.png" alt="confirm-appointment-before" /> <img src="/day-of-after.png" alt="day-of-after" />

## Takeaways
As the first project in my second-year studio course, I am grateful to have had the opportunity to build my skills and confidence in solving a known design problem. Given the scope of the problem, it took me the full four weeks to come to a solution I felt strongly about. What helped me most was getting out of the building and getting people's feedback on my mockups. **The power of understanding one's users and getting their feedback has continued to pleasantly surprise me, and it is one of the parts of being a designer I have come to enjoy the most.**
