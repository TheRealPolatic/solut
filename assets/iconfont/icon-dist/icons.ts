export type IconsId =
  | "add"
  | "blizzard"
  | "bookmark"
  | "chevron-left"
  | "chevron-right"
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
  | "ChevronLeft"
  | "ChevronRight"
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
  ChevronLeft = "chevron-left",
  ChevronRight = "chevron-right",
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
  [Icons.ChevronLeft]: "61700",
  [Icons.ChevronRight]: "61701",
  [Icons.Close]: "61702",
  [Icons.Drought]: "61703",
  [Icons.Dust]: "61704",
  [Icons.Flood]: "61705",
  [Icons.Hail]: "61706",
  [Icons.Heat]: "61707",
  [Icons.Home]: "61708",
  [Icons.Info]: "61709",
  [Icons.Plus]: "61710",
  [Icons.Rainfall]: "61711",
  [Icons.Search]: "61712",
  [Icons.Smog]: "61713",
  [Icons.Tornado]: "61714",
  [Icons.Upload]: "61715",
  [Icons.User]: "61716",
  [Icons.Wildfire]: "61717",
};
