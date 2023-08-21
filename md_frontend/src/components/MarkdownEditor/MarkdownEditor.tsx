import TextField from "@mui/material/TextField";
import { Marked } from "marked";
const marked = new Marked();
const MarkdownEditor = ({ updateStringFn }) => {
  return (
    <TextField
      fullWidth
      multiline
      onChange={(e) => {
        updateStringFn(marked.parse(e.target.value));
      }}
      sx={{ height: "100%" }}
      rows={70}
    />
  );
};

export default MarkdownEditor;
