import { Checklist } from "./Checklist/Checklist";

function App() {
  return (
    <div>
      <Checklist
        data={[
          {
            id: 1,
            name: "Tyler",
            role: "Peasant",
          },
          {
            id: 2,
            name: "Jean",
            role: "Queen",
          },
        ]}
        id="id"
        primary="name"
        secondary="role"
      />
    </div>
  );
}

export default App;
