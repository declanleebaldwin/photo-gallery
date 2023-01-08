import { useCollection } from "./services/FirebaseService"
function App() {
  const photos = useCollection({ collectionName: "photos" })
  if (!photos || !photos.length) return <></>

  const PhotoCard = ({ id, imageUrl, title }) => {
    return <div key={id} className="mb-6"><img className="h-full w-full" src={imageUrl} alt={title} /></div>
  }

  return (
    <div className="grid grid-cols-gallery content-start gap-x-6 m-6">
      <div>
        {photos.filter((_photo, i) => i % 3 === 0).map((photo) => {
          return <PhotoCard {...photo} />
        })}
      </div>
      <div>
        {photos.filter((_photo, i) => i % 3 === 1).map((photo, i) => {
          return <PhotoCard {...photo} />
        })}
      </div>
      <div>
        {photos.filter((_photo, i) => i % 3 === 2).map((photo, i) => {
          return <PhotoCard {...photo} />
        })}
      </div>

    </div>
  );
}

export default App;
