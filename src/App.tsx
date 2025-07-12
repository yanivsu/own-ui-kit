import "./theme/index.scss";
import { Button } from "./components/Buttons";
import { CheckIcon, CloseIcon } from "./Icons";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Regular Buttons: </h1>
      <Button>Primary Button</Button>
      <br />
      <Button variant="outlined">Outlined Button</Button>
      <br />
      <Button variant="text">Text Button</Button>
      <br />
      <Button disabled={true}>Disabled Button</Button>
      <br />
      <h1>Button With Icon:</h1>
      <Button iconRight={<CheckIcon />}>Right Icon</Button>
      <br />
      <Button iconLeft={<CloseIcon />}>Left Icon</Button>
      <br />
      <Button
        iconRight={<CheckIcon />}
        iconLeft={<CloseIcon />}
        variant={"outlined"}
      >
        Both Icons
      </Button>
    </div>
  );
}

export default App;
