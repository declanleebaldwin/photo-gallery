import { useCollection } from "./services/FirebaseService"
function App() {
  const photos = useCollection({ collectionName: "photos" })
  if (!photos || !photos.length) return <></>

  return (
    <div className="grid grid-cols-gallery content-start gap-x-6 ">
      <div className="">
        {photos.filter((_photo, i) => i % 3 === 0).map((photo, i) => {
          return <div key={photo.id} className="mb-6"><img className="h-full" src={photo.imageUrl} alt={photo.title} /></div>
        })}
      </div>
      <div className="">
        {photos.filter((_photo, i) => i % 3 === 1).map((photo, i) => {
          return <div key={photo.id} className="mb-6"><img className="h-full" src={photo.imageUrl} alt={photo.title} /></div>
        })}
      </div>
      <div className="">
        {photos.filter((_photo, i) => i % 3 === 2).map((photo, i) => {
          return <div key={photo.id} className="mb-6"><img className="h-full" src={photo.imageUrl} alt={photo.title} /></div>
        })}
      </div>

    </div>
  );
}

export default App;
