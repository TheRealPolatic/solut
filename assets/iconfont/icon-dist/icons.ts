export type IconsId =
  | "blizzard"
  | "chevron"
  | "close"
  | "dotted"
  | "drought"
  | "dust"
  | "flood"
  | "hail"
  | "heat"
  | "plus"
  | "rainfall"
  | "smog"
  | "tornado"
  | "upload"
  | "wildfire"
  | "x";

export type IconsKey =
  | "Blizzard"
  | "Chevron"
  | "Close"
  | "Dotted"
  | "Drought"
  | "Dust"
  | "Flood"
  | "Hail"
  | "Heat"
  | "Plus"
  | "Rainfall"
  | "Smog"
  | "Tornado"
  | "Upload"
  | "Wildfire"
  | "X";

export enum Icons {
  Blizzard = "blizzard",
  Chevron = "chevron",
  Close = "close",
  Dotted = "dotted",
  Drought = "drought",
  Dust = "dust",
  Flood = "flood",
  Hail = "hail",
  Heat = "heat",
  Plus = "plus",
  Rainfall = "rainfall",
  Smog = "smog",
  Tornado = "tornado",
  Upload = "upload",
  Wildfire = "wildfire",
  X = "x",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Blizzard]: "61697",
  [Icons.Chevron]: "61698",
  [Icons.Close]: "61699",
  [Icons.Dotted]: "61700",
  [Icons.Drought]: "61701",
  [Icons.Dust]: "61702",
  [Icons.Flood]: "61703",
  [Icons.Hail]: "61704",
  [Icons.Heat]: "61705",
  [Icons.Plus]: "61706",
  [Icons.Rainfall]: "61707",
  [Icons.Smog]: "61708",
  [Icons.Tornado]: "61709",
  [Icons.Upload]: "61710",
  [Icons.Wildfire]: "61711",
  [Icons.X]: "61712",
};
