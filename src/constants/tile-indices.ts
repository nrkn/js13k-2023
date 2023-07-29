// start tiles

export const T_BLOCKING_START = 0
export const T_BLOCKING_END = 8
export const T_BLOCKING_SIZE = T_BLOCKING_END - T_BLOCKING_START + 1

export const T_WALKABLE_START = 9
export const T_WALKABLE_END = 20
export const T_WALKABLE_SIZE = T_WALKABLE_END - T_WALKABLE_START + 1

export const T_BUMPABLE_START = 21
export const T_BUMPABLE_END = 37
export const T_BUMPABLE_SIZE = T_BUMPABLE_END - T_BUMPABLE_START + 1

export const T_HUD_START = 38
export const T_HUD_END = 44
export const T_HUD_SIZE = T_HUD_END - T_HUD_START + 1

// start blocking

// _0, _1 - anim suffixes
export const T_WATER_0 = 0
export const T_WATER_1 = 1

// four tree variants
export const T_TREE_START = 2
export const T_TREE_END = 5
export const T_TREE_SIZE = T_TREE_END - T_TREE_START + 1


// three mountain variants

export const T_MOUNTAIN_START = 6
export const T_MOUNTAIN_END = 8
export const T_MOUNTAIN_SIZE = T_MOUNTAIN_END - T_MOUNTAIN_START + 1

// end blocking

// start walkable

export const T_SAND_START = 9
export const T_SAND_END = 11
export const T_SAND_SIZE = T_SAND_END - T_SAND_START + 1

export const T_PATH = 12

// _START, _END, _SIZE - variants
export const T_GRASS_START = 13
export const T_GRASS_END = 20
export const T_GRASS_SIZE = T_GRASS_END - T_GRASS_START + 1

// end walkable


// start bumpable

export const T_HUT = 21
export const T_COMPUTER = 22
export const T_SYNTH = 23
export const T_BED = 24

// "connected" tiles
export const T_HUT_LEFT = 25
export const T_HUT_MID = 26
export const T_HUT_RIGHT = 27

// three ruin variants

export const T_RUIN_START = 28
export const T_RUIN_END = 30
export const T_RUIN_SIZE = T_RUIN_END - T_RUIN_START + 1


// sat anim, 2 frames
export const T_SATELLITE_0 = 31
export const T_SATELLITE_1 = 32

// portal anim, 2 frames
export const T_PORTAL_0 = 33
export const T_PORTAL_1 = 34

export const T_PORTAL_DISABLED = 35
export const T_PORTAL_DAY = 36

// bones
export const T_SKELETON = 37

// start hud 

export const T_ICON_APPLE = 38
export const T_ICON_HEART = 39
export const T_ICON_KEYCARD = 40
export const T_ICON_BACKUP = 41
export const T_ICON_CHIP = 42

// decorative
export const T_HALFTONE = 43
export const T_DARK = 44
export const T_LIGHT = 45

// end hud

// end tiles - that's all folks!
