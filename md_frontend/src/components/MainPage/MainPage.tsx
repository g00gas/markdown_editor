import { Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import MarkdownEditor from "../MarkdownEditor/MarkdownEditor";

const MainPage = () => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Stack sx={{ height: "100vh", width: "50vw" }}>
        <MarkdownEditor />
      </Stack>
      <Stack sx={{ height: "100vh", width: "50vw" }}></Stack>
    </Stack>
  );
};
export default MainPage;
