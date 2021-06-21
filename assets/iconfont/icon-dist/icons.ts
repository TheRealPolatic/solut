export type IconsId =
  | "add"
  | "blizzard"
  | "bookmark-filled"
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
  | "BookmarkFilled"
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
  BookmarkFilled = "bookmark-filled",
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
  [Icons.BookmarkFilled]: "61699",
  [Icons.Bookmark]: "61700",
  [Icons.ChevronLeft]: "61701",
  [Icons.ChevronRight]: "61702",
  [Icons.Close]: "61703",
  [Icons.DottedLine]: "61704",
  [Icons.Drought]: "61705",
  [Icons.Dust]: "61706",
  [Icons.Edit]: "61707",
  [Icons.Envelope]: "61708",
  [Icons.EyeOff]: "61709",
  [Icons.Eye]: "61710",
  [Icons.Flood]: "61711",
  [Icons.Hail]: "61712",
  [Icons.Heat]: "61713",
  [Icons.Home]: "61714",
  [Icons.Info]: "61715",
  [Icons.Location]: "61716",
  [Icons.New]: "61717",
  [Icons.Plus]: "61718",
  [Icons.Rainfall]: "61719",
  [Icons.Search]: "61720",
  [Icons.Smog]: "61721",
  [Icons.Top]: "61722",
  [Icons.Tornado]: "61723",
  [Icons.Trending]: "61724",
  [Icons.Upload]: "61725",
  [Icons.User]: "61726",
  [Icons.Wildfire]: "61727",
};
