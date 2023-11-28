import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

function App() {
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <CatchingPokemon />
        </IconButton>

        <Typography>soleilApp</Typography>
        <Stack marginLeft={"auto"}>
          <TextField size="small" color="secondary" label="Search product" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default App;
