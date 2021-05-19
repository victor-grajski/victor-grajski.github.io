---
layout: post
title: Want to Listen
date: "2020-08-29"
categories: jekyll update
permalink: "/want-to-listen"
description: Save music recommendations for later on Apple Music
thumbnail: ./thumbnail.png
category: Product Design/UX Engineering
order: 2
color: "#333333"
overview: "When SwiftUI was introduced in 2019, I was immediately intrigued, and during my summer break in 2020, I thought it would be rewarding to use some of my time off to teach myself SwiftUI. But what to build? I thought, as a musician, it goes without saying I’m passionate about music, and Apple Music is an elegant music app I use constantly; I wonder if there is anything I would want to improve? Spoiler alert: there was. Once I identified what I wanted to improve, I reviewed related experiences, mocked up what I thought the most appropriate solution was, and built a working iOS prototype in SwiftUI."
role: Design Technologist, UX Designer
duration: "6 weeks (1/4 time)"
year: 2020
tools: "Swift, SwiftUI, Sketch"
link: "https://github.com/victor-grajski/WantToListen"
linkSource: "GitHub"
---

<div class="post-content-body-content-container">
    <div class="post-content-body-content-header">
        <h4>Introduction</h4>
    </div>

<div class="post-content-body-content-content">
<p>When SwiftUI was introduced in 2019, I was immediately intrigued, and during my summer break in 2020, I thought it would be rewarding to use some of my time off to teach myself SwiftUI. But what to build? I thought, as a musician, it goes without saying I'm passionate about music, and Apple Music is an elegant music app I use constantly; I wonder if there is anything I would want to improve? Spoiler alert: there was. Once I identified what I wanted to improve, I reviewed related experiences, mocked up what I thought the most appropriate solution was, and built a working iOS prototype in SwiftUI.</p>

<p>I worked on this over the month of August at a casual pace given I had time off from school, and I believe I would finish this in two weeks were I working full-time.</p>
</div>
</div>

<div class="post-content-body-content-container">
    <div class="post-content-body-content-header">
        <h4>Target User</h4>
    </div>

<div class="post-content-body-content-content">
<p>For this project, I used myself as the target user because I kept stumbling upon a gap in Apple Music's experience, and I've also noticed this gap on Spotify. As a listener who likes to discover new music often and gets regular recommendations from friends and Apple Music, I'm not always able to follow up on music recommendations in the moment. Thus, I often forget to do so, and when I do remember, I'm usually unable to conjure what it was I meant to listen to.</p>

<p>To solve for this, I've tried using Reminders, but those to-dos usually get buried among all the other things I have going on, plus when I do open Apple Music to put something new on, it doesn't occur to me to open Reminders because of the separate context of use. Thus, there is a gap between my intent to listen to new music when I want to and my ability to do so intuitively. Throughout the rest of the project, I'll use the following scenario I've personally encountered to illustrate my process and solution.</p>
</div>
</div>

<div class="post-content-body-content-container">
    <div class="post-content-body-content-header">
        <h4>Scenario</h4>
    </div>

<div class="post-content-body-content-content">
<p>Let's say Apple Music shows me a carousel of albums similar to the one I recently listened to; in this case, Joyland by TR/ST. I see an album in that carousel, Modern Mirror by Drab Majesty, that I’ve been meaning to listen to for a while, but I don't have time to listen to it right now. A week goes by, Apple Music’s recommendation has been replaced, and when I do have time to listen to new music, I can't remember which album I meant to listen to! If only there were a way to save Apple Music recommendations for later...</p>

</div>
</div>

<img src="/Empty-State2x.png" alt="empty state" />
<!-- Apple Music often gives me relevant recommentations, but I'm not always able to follow up on them in the moment -->

<div class="post-content-body-content-container">
    <div class="post-content-body-content-header">
        <h4>Design</h4>
    </div>

<div class="post-content-body-content-content">
<p>With a clear gap identified, my next question was, What should saving music look like? After reviewing similar features in Apple's Podcasts, TV, Books, and News apps, as well as YouTube, I made three key design decisions around the organization and mechanics of saving music on Apple Music. First, I needed to go beyond the existing functionality of adding music to my library. Second, I needed to organize the feature around albums. Third, I needed to place the feature prominently in the home tab of Apple Music, Listen Now. To illustrate my decisions, I mocked up a clone of Apple Music in Sketch and integrated my potential Want to Listen feature.</p>

<h5>Going Beyond Add to Library</h5>
<p>Adding music to my library I'm interested in listening to later creates a context conflict for me because I view my library as a repository of music I already know I want to keep. When I'm following up on Apple Music's recommendation of Modern Mirror by Drab Majesty, I likely won't know I want to keep it until I've listened to it. In addition, if I were to add Modern Mirror to my library in an attempt to remember to listen to it, it may get buried in my Recently Added if I add more music to my library, and I will likely forget to follow up on it. Thus, I decided to create a separate space so I could manage music recommended to me separately from my library.</p>

<!-- <img src="/2x-detail-action-sheet.png" alt="detail with action sheet" /> -->
<!-- Want to Listen could serve as a layer intermediate to the Library -->

<p>What form should this this dedicated space take? After reviewing design patterns found in other Apple Media Products, I decided to use a carousel. Both Apple Podcasts and the Apple TV app have dedicated Up Next carousels, and Apple Books has a Want to Read carousel. Knowing the affordance of saving media for later consumption is available across Apple Media Products would allow me to maintain a consistent mental model. Speaking of maintaining a consistent mental model, I decided to name the feature Want to Listen.</p>

<!-- <img src="/Want-to-Listen.png" alt="want to listen carousel" /> -->

<p>While a carousel in Apple Music would conform to a design pattern found in Apple Music and Apple Media Products, isn't music different? Why not generate a playlist instead? That brings us to my next major design decision.</p>

<h5>Organizing Around Albums</h5>

<p>Organizing around albums provided flexibility playlists did not while preserving the simplicity playlists afford. This organization allowed me to add an entire album or certain songs from an album to Want to Listen using the mechanic that already existed when adding music to my library. For example, when I add only one song from an album to my library, a space is created in the Recently Added list with the album artwork, and tapping that artwork shows just the song I added with the option to view the entire album. I wanted to take advantage of this existing mechanic because I may only want to add certain songs from Modern Mirror to my Want to Listen.</p>

<!-- <img src="/Want-To-Listen-List.png" alt="want to listen grid" /> -->

<p>Furthermore, organizing around albums allowed me to give the Want to Listen carousel prominent placement so I would be more likely to engage with it. I admit to the circular definition, however, I believe the placement most likely to be engaged with is above-the-fold on the main tab, Listen Now, and on that tab, carousels of albums are the organizing principle.</p>

<h5>Saving for Later in Listen Now</h5>

<p>Coming back to my original goal of remembering to follow up on Apple Music's recommendation of Modern Mirror by Drab Majesty, When am I most likely to remember to follow up on that recommendation when using Apple Music? If it's placed front and center on the home tab, Listen Now, right below Top Picks. While this is a bold choice, the current second spot on Listen Now is the Recently Played carousel. In my opinion, I find Want to Listen to be a more appropriate choice for this coveted above-the-fold placement because it affords an opportunity for deeper engagement Recently Played does not. Rather than rotating through the same music until I get bored of it, seeing an invitation to go deeper each time I open the app would compel me to engage and keep coming back. Perhaps this is why Apple's Podcasts, TV, and Books apps all prominently feature saved items on their home tabs.</p>

<!-- <img src="/listen-now-full-2x.png" alt="listen now with want to listen" /> -->

</div>
</div>

<div class="post-content-body-content-container">
    <div class="post-content-body-content-header">
        <h4>Code</h4>
    </div>

<div class="post-content-body-content-content">
<p>Once I felt confident in my design decisions and mockups, I built a working prototype of my modified Apple Music clone in SwiftUI. Since this was my first SwiftUI project, I focused on learning the basics and sticking to iOS while setting a foundation for expanding to watchOS, iPadOS, macOS, and tvOS. Check out the demo video below, and you can find my code <a href="https://github.com/victor-grajski/WantToListen" target="_blank">here</a>!</p>

</div>
</div>

<iframe style='width:100%; height:700px;margin-top:8vw;' src="https://www.youtube.com/embed/GusiCJYBcbs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

<div class="post-content-body-content-container">
    <div class="post-content-body-content-header">
        <h4>Takeaways</h4>
    </div>

<div class="post-content-body-content-content">
<p>During the design phase, it was personally rewarding to reverse engineer the layouts, fonts, and colors of the app, and I certainly had to make a few educated guesses. It was also interesting to see the subtle design changes the Apple Music Design team made in the few weeks that passed between making mockups in Sketch to writing SwiftUI code, such as the making Add to Library button on the album detail page more neutral.</p>

<p>Although I focused on iOS during the UX engineering phase, the wonderful thing about SwiftUI is how much cross-platform foundation there is built-in. Overall, I found SwiftUI to be simple, elegant, and easy to use like most Apple products. With that said, SwiftUI is very new and it wasn't immediately clear what was or wasn't possible, and tracking down an answer took up the bulk of my development time. For example, SwiftUI makes it incredibly easy to set up navigation, however, I couldn't customize what the navigation bar should look like in different display styles without UIKit, and there was little indication in the documentation of what had yet to be implemented in SwiftUI. Luckily I had some UIKit experience to fall back on, and I would advise learning the basics of UIKit before taking on SwiftUI. I understand SwiftUI will continuously improve over time, and I look forward to seeing how it evolves. Being able to declare user interfaces without worrying about state management is truly remarkable. Finally, bonus points to SwiftUI for making dark mode support seamless to build in!</p>
</div>
</div>

<img src="/detail-dark-mode.jpeg" alt="album detail page dark mode" />

<img src="/listen-now-dark-mode.jpeg" alt="listen now dark mode" />

<div class="post-content-body-content-container">
    <div class="post-content-body-content-header">
        <h4>Next Steps</h4>
    </div>

<div class="post-content-body-content-content">
<p>The main things I would like to work on next are supporting adding individual songs as well as links to artists to Want to Listen. Part of why I went with the carousel approach was to eventually be able to support artist links, something that a playlist approach wouldn't afford. When talking about music with friends, they often recommend artists to me rather than specific albums, and I believe supporting both would be intuitive to users. As I mentioned earlier, I look forward to expanding the concept to other platforms like watchOS and macOS.</p>

<p>Finally, I want to conduct usability tests with users to confirm or deny my hypotheses. While this project was mainly about practicing my prototyping and UX engineering skills assuming a set scenario and target user, I would love to get feedback and refine the concept further.</p>
</div>
</div>
