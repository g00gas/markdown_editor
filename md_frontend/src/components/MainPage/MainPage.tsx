import { Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import MarkdownEditor from "../MarkdownEditor/MarkdownEditor";
import { useMarkdown } from "../../context/MarkdownContext";

const MainPage = () => {
  const { updateStringsPayload, stringPayload } = useMarkdown();
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Stack sx={{ height: "100vh", width: "50vw", overflow: "scroll", }}>
        <MarkdownEditor updateStringFn={updateStringsPayload} />
      </Stack>
      <Stack sx={{ height: "100vh", width: "50vw", overflow: "scroll", padding: "0.5rem", paddingBottom: 0 }}
        dangerouslySetInnerHTML={{ __html: stringPayload.mdString }}
      />
    </Stack>
  );
};
export default MainPage;
