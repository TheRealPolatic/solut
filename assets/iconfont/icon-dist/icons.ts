export type IconsId =
  | "blizzard"
  | "chevron"
  | "close"
  | "dotted"
  | "drought"
  | "dust"
  | "envelope"
  | "flood"
  | "hail"
  | "heat"
  | "location"
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
  | "Envelope"
  | "Flood"
  | "Hail"
  | "Heat"
  | "Location"
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
  Envelope = "envelope",
  Flood = "flood",
  Hail = "hail",
  Heat = "heat",
  Location = "location",
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
  [Icons.Envelope]: "61703",
  [Icons.Flood]: "61704",
  [Icons.Hail]: "61705",
  [Icons.Heat]: "61706",
  [Icons.Location]: "61707",
  [Icons.Plus]: "61708",
  [Icons.Rainfall]: "61709",
  [Icons.Smog]: "61710",
  [Icons.Tornado]: "61711",
  [Icons.Upload]: "61712",
  [Icons.Wildfire]: "61713",
  [Icons.X]: "61714",
};
