export type IconsId =
  | "add"
  | "blizzard"
  | "bookmark"
  | "chevron-left"
  | "chevron-right"
  | "close"
  | "dotted-line"
  | "drought"
  | "dust"
  | "edit"
  | "flood"
  | "hail"
  | "heat"
  | "home"
  | "info"
  | "new"
  | "plus"
  | "rainfall"
  | "search"
  | "smog"
  | "top"
  | "tornado"
  | "trending"
  | "upload"
  | "user"
  | "wildfire"
  | "x";

export type IconsKey =
  | "Add"
  | "Blizzard"
  | "Bookmark"
  | "ChevronLeft"
  | "ChevronRight"
  | "Close"
  | "DottedLine"
  | "Drought"
  | "Dust"
  | "Edit"
  | "Flood"
  | "Hail"
  | "Heat"
  | "Home"
  | "Info"
  | "New"
  | "Plus"
  | "Rainfall"
  | "Search"
  | "Smog"
  | "Top"
  | "Tornado"
  | "Trending"
  | "Upload"
  | "User"
  | "Wildfire"
  | "X";

export enum Icons {
  Add = "add",
  Blizzard = "blizzard",
  Bookmark = "bookmark",
  ChevronLeft = "chevron-left",
  ChevronRight = "chevron-right",
  Close = "close",
  DottedLine = "dotted-line",
  Drought = "drought",
  Dust = "dust",
  Edit = "edit",
  Flood = "flood",
  Hail = "hail",
  Heat = "heat",
  Home = "home",
  Info = "info",
  New = "new",
  Plus = "plus",
  Rainfall = "rainfall",
  Search = "search",
  Smog = "smog",
  Top = "top",
  Tornado = "tornado",
  Trending = "trending",
  Upload = "upload",
  User = "user",
  Wildfire = "wildfire",
  X = "x",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Add]: "61697",
  [Icons.Blizzard]: "61698",
  [Icons.Bookmark]: "61699",
  [Icons.ChevronLeft]: "61700",
  [Icons.ChevronRight]: "61701",
  [Icons.Close]: "61702",
  [Icons.DottedLine]: "61703",
  [Icons.Drought]: "61704",
  [Icons.Dust]: "61705",
  [Icons.Edit]: "61706",
  [Icons.Flood]: "61707",
  [Icons.Hail]: "61708",
  [Icons.Heat]: "61709",
  [Icons.Home]: "61710",
  [Icons.Info]: "61711",
  [Icons.New]: "61712",
  [Icons.Plus]: "61713",
  [Icons.Rainfall]: "61714",
  [Icons.Search]: "61715",
  [Icons.Smog]: "61716",
  [Icons.Top]: "61717",
  [Icons.Tornado]: "61718",
  [Icons.Trending]: "61719",
  [Icons.Upload]: "61720",
  [Icons.User]: "61721",
  [Icons.Wildfire]: "61722",
  [Icons.X]: "61723",
};
