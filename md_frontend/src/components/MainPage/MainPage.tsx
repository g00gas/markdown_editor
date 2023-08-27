import { Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import MarkdownEditor from "../MarkdownEditor/MarkdownEditor";
import { useContext } from "react";
import { MarkdownContext } from "../../context/MarkdownContext";

const MainPage = () => {
  const { updateStringsPayload, stringPayload } = useContext(MarkdownContext);
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Stack sx={{ height: "100vh", width: "50vw", overflow: "scroll" }}>
        <MarkdownEditor updateStringFn={updateStringsPayload} />
      </Stack>
      <Stack sx={{ height: "100vh", width: "50vw" }} />
    </Stack>
  );
};
export default MainPage;
