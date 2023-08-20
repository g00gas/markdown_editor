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
    />
  );
};

export default MarkdownEditor;
