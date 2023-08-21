import TextField from "@mui/material/TextField";
const MarkdownEditor = () => {
  return (
    <TextField
      fullWidth
      multiline
      onChange={(e) => {
        console.log(e.target.value);
      }}
      sx={{ height: "100vh" }}
      rows={70}
    />
  );
};

export default MarkdownEditor;
