export type IconsId =
  | "add"
  | "blizzard"
  | "bookmark"
  | "chevron"
  | "close"
  | "drought"
  | "dust"
  | "flood"
  | "hail"
  | "heat"
  | "home"
  | "info"
  | "plus"
  | "rainfall"
  | "search"
  | "smog"
  | "tornado"
  | "upload"
  | "user"
  | "wildfire";

export type IconsKey =
  | "Add"
  | "Blizzard"
  | "Bookmark"
  | "Chevron"
  | "Close"
  | "Drought"
  | "Dust"
  | "Flood"
  | "Hail"
  | "Heat"
  | "Home"
  | "Info"
  | "Plus"
  | "Rainfall"
  | "Search"
  | "Smog"
  | "Tornado"
  | "Upload"
  | "User"
  | "Wildfire";

export enum Icons {
  Add = "add",
  Blizzard = "blizzard",
  Bookmark = "bookmark",
  Chevron = "chevron",
  Close = "close",
  Drought = "drought",
  Dust = "dust",
  Flood = "flood",
  Hail = "hail",
  Heat = "heat",
  Home = "home",
  Info = "info",
  Plus = "plus",
  Rainfall = "rainfall",
  Search = "search",
  Smog = "smog",
  Tornado = "tornado",
  Upload = "upload",
  User = "user",
  Wildfire = "wildfire",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Add]: "61697",
  [Icons.Blizzard]: "61698",
  [Icons.Bookmark]: "61699",
  [Icons.Chevron]: "61700",
  [Icons.Close]: "61701",
  [Icons.Drought]: "61702",
  [Icons.Dust]: "61703",
  [Icons.Flood]: "61704",
  [Icons.Hail]: "61705",
  [Icons.Heat]: "61706",
  [Icons.Home]: "61707",
  [Icons.Info]: "61708",
  [Icons.Plus]: "61709",
  [Icons.Rainfall]: "61710",
  [Icons.Search]: "61711",
  [Icons.Smog]: "61712",
  [Icons.Tornado]: "61713",
  [Icons.Upload]: "61714",
  [Icons.User]: "61715",
  [Icons.Wildfire]: "61716",
};
