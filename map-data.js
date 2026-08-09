/* ============================================================
   MAP DATA
   Everything in this file is what you edit day-to-day: the map
   image, your marker groups, individual markers, and borders/
   regions. fantasy-map.html (loaded after this file) only
   contains rendering logic and should rarely need touching.
   ============================================================ */

/* ------------------------------------------------------------
   1. MAP IMAGE
   Replace this with your own map's filename/path once ready.
   Any resolution works -- bounds are calculated automatically
   from the image's real pixel dimensions.
   ------------------------------------------------------------ */
const MAP_IMAGE_URL = "images/haron_topological.png";

/* ------------------------------------------------------------
   DEV TOOLS TOGGLE
   Set to false before sharing this page with actual users --
   the picker is a mapmaking aid, not something end users need.
   ------------------------------------------------------------ */
const ENABLE_COORDINATE_PICKER = true;

/* ------------------------------------------------------------
   2. GROUPS
   Defines marker categories: color, display label, and shape.
   Mirrors DataMaps' "groups" concept for an easy future migration.
   Supported shapes: "circle", "square", "diamond", "triangle", "star", "pin"
   ------------------------------------------------------------ */
const GROUPS = {
  capital: { label: "Capitals",   color: "#B4313D", shape: "star"        },
  city:    { label: "Cities",     color: "#FFB961", shape: "diamond"     },
  fort:    { label: "Fortifications", color: "#ED894E",  shape: "square" },
  town:    { label: "Towns",      color: "#FFEAAE",  shape: "circle"     },
  village: { label: "Villages",      color: "#FFFFFF",  shape: "triangle"},
  fort:    { label: "Fortifications", color: "#ED894E",  shape: "square" },
  dungeon: { label: "Dungeons",   color: "#6c3483", shape: "star"        },
  poi:     { label: "Points of Interest", color: "#1e8449", shape: "pin" }
};

/* ------------------------------------------------------------
   3. MARKERS
   x / y are plain percentages of image width/height (0-100),
   NOT pixels. This keeps them independent of image resolution,
   so swapping in a bigger/smaller map image never breaks marker
   placement, and the values are trivial to port to DataMaps'
   own coordinate system later.

   Each marker uses its group's shape by default. Add a `shape`
   field to any marker to override that for just this one point
   (e.g. flag a special landmark with a star instead of its
   group's usual icon).
   ------------------------------------------------------------ */
const MARKERS = [
  { id: "m1", x: 47.6, y: 21.7, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m2", x: 43, y: 24.6, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m3", x: 35.5, y: 22.6, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m4", x: 64.5, y: 23.1, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m5", x: 56.8, y: 24.1, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m6", x: 57.5, y: 32.2, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m7", x: 57.7, y: 39.1, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m8", x: 57.4, y: 43.7, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m9", x: 50.3, y: 37.7, group: "capital", name: "Petha Sill", description: "The imperial capital and seat of the House of Ëgret.", link: "" },
  { id: "m10", x: 47.1, y: 40, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m11", x: 41.5, y: 40.9, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m12", x: 36.1, y: 45.7, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m13", x: 30.8, y: 42.5, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m14", x: 29, y: 48.9, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m15", x: 41.4, y: 59.5, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m16", x: 54.9, y: 50.1, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m17", x: 59.3, y: 52.7, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m18", x: 54.6, y: 46, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m19", x: 72.6, y: 62.1, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m20", x: 74.6, y: 58.4, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m21", x: 73.7, y: 45.6, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m22", x: 71.9, y: 46.5, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m23", x: 52.1, y: 19.1, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m24", x: 42.4, y: 82, group: "capital", name: "Unnamed", description: "", link: "" },
  { id: "m25", x: 26.2, y: 45.8, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m26", x: 29.6, y: 42.8, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m27", x: 32.2, y: 32.6, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m28", x: 33.2, y: 41.7, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m29", x: 33.8, y: 45, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m30", x: 36.2, y: 42.5, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m31", x: 39.1, y: 36.8, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m32", x: 39.6, y: 22.6, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m33", x: 41.8, y: 21.4, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m34", x: 50.3, y: 53.4, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m35", x: 47.1, y: 43.9, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m36", x: 44.4, y: 35.6, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m37", x: 53.6, y: 50.1, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m38", x: 55.7, y: 46.1, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m39", x: 57.2, y: 48.6, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m40", x: 53.2, y: 40.4, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m41", x: 51.9, y: 36.7, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m42", x: 49.1, y: 36, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m43", x: 50.8, y: 28.7, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m44", x: 54.6, y: 36.4, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m45", x: 30.2, y: 6.7, group: "city", name: "Inoth", description: "Home to the Inoth School of Swordmasters.", link: "" },
  { id: "m46", x: 63.3, y: 19.9, group: "city", name: "Acklen", description: "", link: "" },
  { id: "m47", x: 65, y: 36.9, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m48", x: 68.8, y: 46.3, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m49", x: 71.8, y: 50.7, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m50", x: 70.2, y: 60.5, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m51", x: 56.9, y: 36.8, group: "city", name: "Unnamed", description: "", link: "" },
  { id: "m52", x: 59.7, y: 39.8, group: "city", name: "Unnamed", description: "", link: "" }
];

/* ------------------------------------------------------------
   4. BORDERS
   Region/territory outlines. Points use the same x/y percentage
   system as MARKERS, so you can gather them with the coordinate
   picker just like marker positions.

   - closed: true  -> a filled region (polygon), e.g. a kingdom's territory
   - closed: false -> an open line (polyline), e.g. a road or river
   - dashArray: e.g. "6,4" for a dashed line, or null for solid

   EXCLAVES / MULTI-PART SHAPES: `points` can also be an array of
   separate point-arrays instead of one flat list, letting a single
   named region be made of disconnected pieces that still share one
   color/popup/hover behavior. Example:

     points: [
       [ { x: 15, y: 30 }, { x: 42, y: 22 }, { x: 40, y: 60 } ],  // main body
       [ { x: 70, y: 10 }, { x: 78, y: 10 }, { x: 78, y: 18 } ]   // exclave
     ]
   ------------------------------------------------------------ */
const BORDERS = [
  {
    id: "b1",
    name: "Esment",
    description: "TBD",
    link: "",
    color: "#8a2f2f",
    closed: true,
    weight: 2,
    dashArray: "6,4",
    fillOpacity: 0.07,
    points: [
      [ { x: 63.3, y: 12.6 }, { x: 63.3, y: 13.1 }, { x: 63.6, y: 13.4 }, { x: 63.9, y: 13.8 }, { x: 64.3, y: 14.1 }, { x: 64.6, y: 13.2 }, { x: 64.9, y: 13.2 }, { x: 65.1, y: 13.7 }, { x: 65.1, y: 14.1 }, { x: 64.7, y: 14.8 }, { x: 64.8, y: 15.5 }, { x: 64.6, y: 16 }, { x: 64.8, y: 16.5 }, { x: 65.5, y: 17.2 }, { x: 65.4, y: 18 }, { x: 66, y: 18.3 }, { x: 66.5, y: 19.1 }, { x: 66.5, y: 20.6 }, { x: 66.9, y: 21.7 }, { x: 67.1, y: 22.6 }, { x: 67.2, y: 23.2 }, { x: 67.3, y: 24.3 }, { x: 67, y: 25.1 }, { x: 66.3, y: 24.2 }, { x: 66.1, y: 24.2 }, { x: 65.4, y: 24.7 }, { x: 64.6, y: 24.5 }, { x: 63.8, y: 23.9 }, { x: 63.2, y: 23.8 }, { x: 62.7, y: 24 }, { x: 62.4, y: 23.9 }, { x: 62.3, y: 23.5 }, { x: 62.2, y: 23 }, { x: 62.1, y: 22.6 }, { x: 62.1, y: 22.3 }, { x: 62.2, y: 22 }, { x: 62.4, y: 21.5 }, { x: 62.6, y: 21 }, { x: 62.6, y: 20.4 }, { x: 62.4, y: 20.2 }, { x: 62, y: 20.2 }, { x: 61.7, y: 20.1 }, { x: 61.5, y: 19.9 }, { x: 61.2, y: 19.5 }, { x: 61.1, y: 19.2 }, { x: 61.1, y: 18.8 }, { x: 60.9, y: 18.7 }, { x: 60.6, y: 18.7 }, { x: 60.4, y: 19 }, { x: 60.3, y: 19.2 }, { x: 60, y: 19.5 }, { x: 59.7, y: 19.5 }, { x: 59.4, y: 19.8 }, { x: 59, y: 19.9 }, { x: 58.9, y: 20.4 }, { x: 58.8, y: 20.8 }, { x: 58.5, y: 21 }, { x: 58.2, y: 21.4 }, { x: 57.8, y: 21.4 }, { x: 57.5, y: 21.6 }, { x: 57.1, y: 22 }, { x: 56.7, y: 22.1 }, { x: 56.5, y: 22.1 }, { x: 56.3, y: 21.7 }, { x: 56.1, y: 21.2 }, { x: 56.1, y: 20.6 }, { x: 55.9, y: 20.4 }, { x: 55.7, y: 20.3 }, { x: 55.5, y: 19.9 }, { x: 55.3, y: 19.7 }, { x: 55.1, y: 19.8 }, { x: 54.4, y: 19 }, { x: 54.5, y: 18.7 }, { x: 54.8, y: 18.7 }, { x: 55, y: 18.6 }, { x: 55.1, y: 18.2 }, { x: 55.1, y: 17.8 }, { x: 55.2, y: 16.8 }, { x: 55.3, y: 16.1 }, { x: 55.6, y: 16.2 }, { x: 55.6, y: 17.1 }, { x: 55.8, y: 17.7 }, { x: 55.8, y: 18.3 }, { x: 56, y: 18.1 }, { x: 56.2, y: 17.8 }, { x: 56.4, y: 17.7 }, { x: 56.7, y: 17 }, { x: 56.9, y: 16.9 }, { x: 57.2, y: 17.3 }, { x: 57.3, y: 16.6 }, { x: 57.5, y: 16.1 }, { x: 57.9, y: 15.4 }, { x: 58.1, y: 14.8 }, { x: 58.6, y: 14.7 }, { x: 58.8, y: 14.9 }, { x: 59.3, y: 14.7 }, { x: 59.3, y: 14.1 }, { x: 59.1, y: 13.6 }, { x: 59.2, y: 13.2 }, { x: 59.7, y: 13.2 }, { x: 60.2, y: 13.3 }, { x: 60.6, y: 13.2 }, { x: 60.9, y: 13.4 }, { x: 61.2, y: 13.4 }, { x: 61.6, y: 14.2 }, { x: 62.1, y: 14.8 }, { x: 62.2, y: 15.2 }, { x: 62.5, y: 15.1 }, { x: 62.6, y: 14.4 }, { x: 62.3, y: 14 }, { x: 62.4, y: 13.3 }, { x: 62.3, y: 12.8 }, { x: 62.2, y: 11.9 }, { x: 62.3, y: 11.3 }, { x: 62.6, y: 11.3 }, { x: 62.9, y: 11.3 }, { x: 62.9, y: 11.7 } ]
    ]
  }
];
