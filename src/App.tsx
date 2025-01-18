import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import NewFeature from "./components/NewFeature";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, SetAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => SetAlertVisibility(false)}>
          Hello <b>World</b>
        </Alert>
      )}

      <Button color="danger" onClick={() => SetAlertVisibility(true)}>
        My Button
      </Button>

      <NewFeature />

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
