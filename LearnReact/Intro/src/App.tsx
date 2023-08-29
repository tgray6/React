import "./App.css";
import { Alert } from "./Alert";

export default function App() {
  return (
    <div className="App">
      <Alert
        type="warning"
        heading="Success! Heading Prop"
        closable={true}
        onClose={() => console.log("X Button Clicked")}
      >
        <p>Everything is really good! Note: I am child prop</p>
      </Alert>
    </div>
  );
}
