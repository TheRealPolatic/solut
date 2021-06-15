export type IconsId =
  | "add"
  | "blizzard"
  | "bookmark"
  | "chevron-left"
  | "chevron-right"
  | "close"
  | "drought"
  | "dust"
  | "envelope"
  | "flood"
  | "hail"
  | "heat"
  | "home"
  | "info"
  | "location"
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
  | "Envelope"
  | "Flood"
  | "Hail"
  | "Heat"
  | "Home"
  | "Info"
  | "Location"
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
  Envelope = "envelope",
  Flood = "flood",
  Hail = "hail",
  Heat = "heat",
  Home = "home",
  Info = "info",
  Location = "location",
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
  [Icons.Envelope]: "61705",
  [Icons.Flood]: "61706",
  [Icons.Hail]: "61707",
  [Icons.Heat]: "61708",
  [Icons.Home]: "61709",
  [Icons.Info]: "61710",
  [Icons.Location]: "61711",
  [Icons.Plus]: "61712",
  [Icons.Rainfall]: "61713",
  [Icons.Search]: "61714",
  [Icons.Smog]: "61715",
  [Icons.Tornado]: "61716",
  [Icons.Upload]: "61717",
  [Icons.User]: "61718",
  [Icons.Wildfire]: "61719",
};
