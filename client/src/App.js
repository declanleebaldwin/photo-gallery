import { useCollection } from "./services/FirebaseService"
function App() {
  const photos = useCollection({ collectionName: "photos" })
  return (
    <div className="grid">

    </div>
  );
}

export default App;
