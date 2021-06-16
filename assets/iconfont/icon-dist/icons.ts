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
  | "envelope"
  | "eye-off"
  | "eye"
  | "flood"
  | "hail"
  | "heat"
  | "home"
  | "info"
  | "location"
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
  | "wildfire";

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
  | "Envelope"
  | "EyeOff"
  | "Eye"
  | "Flood"
  | "Hail"
  | "Heat"
  | "Home"
  | "Info"
  | "Location"
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
  | "Wildfire";

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
  Envelope = "envelope",
  EyeOff = "eye-off",
  Eye = "eye",
  Flood = "flood",
  Hail = "hail",
  Heat = "heat",
  Home = "home",
  Info = "info",
  Location = "location",
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
  [Icons.Envelope]: "61707",
  [Icons.EyeOff]: "61708",
  [Icons.Eye]: "61709",
  [Icons.Flood]: "61710",
  [Icons.Hail]: "61711",
  [Icons.Heat]: "61712",
  [Icons.Home]: "61713",
  [Icons.Info]: "61714",
  [Icons.Location]: "61715",
  [Icons.New]: "61716",
  [Icons.Plus]: "61717",
  [Icons.Rainfall]: "61718",
  [Icons.Search]: "61719",
  [Icons.Smog]: "61720",
  [Icons.Top]: "61721",
  [Icons.Tornado]: "61722",
  [Icons.Trending]: "61723",
  [Icons.Upload]: "61724",
  [Icons.User]: "61725",
  [Icons.Wildfire]: "61726",
};
