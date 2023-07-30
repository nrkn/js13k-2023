# js13k-2023 Ranger Dawn

Ranger Dawn (JS13K 2023) is a sequel to Ranger Down, our entry to JS13K 2018

Or maybe a prequel, hence "Dawn" - not sure - will probably rename once theme is
announced and we write the story etc.

We are going to write a sequel to our previous entry, and do the ol' switcheroo.

We will show a fancy intro scene using our new gfx, but then static, an error
message, and the gfx revert to previous Ranger Down game - but with a new
cutscene etc - copy over the ideas from other doc - player sees old 
gfx for a short time until they get their first "upgrade" - surprise, it's not 
Ranger 2018 - now we can diverge into a new storyline based on this year's theme

We won't start story and gameplay until we get the theme, but we can set up the 
engine and etc, potentially even the RD18 segment for the intro switcheroo

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

- "generate a map with grass placed randomly, some trees"
  ok let's go make a map type then fill it with 75% grass and 25% trees
  we made a potato map with just grass and trees
  6606 used, 6706 left

- "draw map"
  ok we'll blit the map to the canvas, we will just offset from 0,0 for now
  6668 used, 6644 left

- "draw player"
  ok we now need to add our settings etc for the viewport so we can get 1. the 
  map is drawn such that there is a row and col in center, eg odd on vmin 
  (and vmax???) and 2. the player is drawn on that center tile
  6871 used, 6441 left

- put aside old dev log briefly to do a tidy up and refactor
  expected to blow the bytes out a bit, but for it to easier to work on, but 
  instead we saved a few bytes lol
  6867 used, 6445 left

- "player animates"
  ok, pretty crude like RD18, improve later
  6908 used, 6404 left

## 29/07/2023

- "player can move around with arrows or tap, trees and edge of map block"
  do tap later, just keys
  7086 used, 6226 left

- consolidate all assets into a single file, update code
  nb we lost alpha on sprites - but we kept a 1bpp mask in the sprite sheet
  so we just need to write some code
  4353 used, 8960 left

- "implement messages"
  we did it very basic but structured it so we can expand it later
  4560 used, 8753 left

- "implement day/night cycle"
  we were a bit light on detail last time - here's what we did:
  - added days, hours, minutes, and advance them on player action by 1min
  - added the current time to hud
  - added a css class to toggle "night" effect  
  4766 used, 8547 left

- "generate better map"
  with pleasure!  