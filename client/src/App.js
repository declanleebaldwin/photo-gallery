import { useCollection } from "./services/FirebaseService"
function App() {
  const photos = useCollection({ collectionName: "photos" })
  return (
    <h1>Photo Gallery</h1>
  );
}

export default App;
