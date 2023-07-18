import './App.css'
import CloudinaryProvider from "./CloudinaryProvider.tsx";

function App() {

    return (
        <>
            <h1>Welcome Cloudinary</h1>
            <CloudinaryProvider imageName={"unsplash_photo.jpg"}/>
        </>
    )
}

export default App
