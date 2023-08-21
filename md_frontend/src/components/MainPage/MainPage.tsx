import { Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import MarkdownEditor from "../MarkdownEditor/MarkdownEditor";
import { useMarkdown } from "../../hooks/useMarkdown";

const { stringPayload, updateStringsPayload } = useMarkdown();
const MainPage = () => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Stack sx={{ height: "100vh", width: "50vw", overflow: "scroll" }}>
        <MarkdownEditor updateStringFn={updateStringsPayload} />
      </Stack>
      <Stack sx={{ height: "100vh", width: "50vw" }}>
        {stringPayload.mdString}
      </Stack>
    </Stack>
  );
};
export default MainPage;
