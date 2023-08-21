import TextField from "@mui/material/TextField";
import { Marked } from "marked";
const marked = new Marked();
const MarkdownEditor = () => {
  return (
    <TextField
      fullWidth
      multiline
      onChange={(e) => {
        console.log("md string", e.target.value);
        console.log("md", marked.parse(e.target.value));
      }}
      sx={{ height: "100vh" }}
      rows={70}
    />
  );
};

export default MarkdownEditor;
