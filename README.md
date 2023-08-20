# js13k-2023 13th Century

OK day 7, restarting lol

Prior to finding out the theme we rewrote the Ranger Down engine from our 2018 
JS13K, intending to use that for this year's game, but when the theme was 
announced I decided against it

We then spent a whole week researching Polynesian seafaring in the 13th century, 
and writing prototypes of eg ocean currents, wind, and so on, which was fun and 
interesting, but I was struggling to find a fun core game mechanic which was 
simple enough to implement, iterate and polish in the time allowed

So, new idea:

Parallax side scroller

Some kind of peasant character? Maybe they can pull a little cart?

They eat turnips and pick up dog turds to sell to tanners lol

We will just make the following for now:

A parallax sky layer at 0.5 speed
A parallax mountain layer at 0.75 speed

Then we will have the ground and player at 1.0 speed

We will use a basic entity component system, with a simple update and draw 
loop

- OK - go draw some assets and come back!
- Drew assets!

# log

Nothing
Used: 0B
Remaining: 13312B

Boilerplate
Used: 635B
Remaining: 12677B

Placeholder assets (crappy, to be optimized and etc)
Used: 7333B
Remaining: 5339B

Draw sky and mountains, ground and player
