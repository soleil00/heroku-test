import { CatchingPokemon } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <CatchingPokemon />
        </IconButton>

        <Typography>soleilApp</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default App;
