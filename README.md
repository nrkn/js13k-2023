# js13k-2023

JS13K 2023

We are going to write a sequel to our previous entry, and do the ol' switcheroo.

We will show a fancy intro scene using our new gfx, but then static, an error
message, and the gfx revert to previous Ranger Down game - but with a new
cutscene etc - copy over the ideas from other doc - player sees old 
gfx for a short time until they get their first "upgrade" - surprise, it's not 
Ranger 2018 - now we can diverge into a new storyline based on this year's theme

We won't start story and gameplay until we get the theme, but we can set up the 
engine and etc

Last time we ran out of time long before we ran out of bytes, so let's give 
ourselves a better chance by setting up early and doing the engine work

Just for fun, we will rewrite the old ranger engine using just our gfx and 
readme from last time, but we won't look at the code, it was very 
imperative-style golfed and I want to see if we can do it more functionally and 
still get similar savings

We will use the old dev log and implement the engine features in roughly the
same order, that'll be fun

# log

## 28/07/2023

- pre setup boilerplate etc 
  0 used, 13312 left  

- minimal boilerplate
  index.html - tsconfig.json - webpack etc - old ranger gfx
  5872 used, 7440 left

- old dev log starts here
  "pixels scaled as big as possible centered in viewport"
  but we will treat our size eg 160px as the min side and have aspect ratio 
  support (we can override this when pretending to be RD18)
  6381 used, 6931 left

- "draw font to canvas"  
  did it pretty bare bones, but we can improve later
  6530 used, 6782 left