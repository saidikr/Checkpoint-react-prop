import photo from './assets/what_is_image_Processing.avif'
import './App.css'
import { ProfileComponent } from './profile/ProfileComponent'

function App() {
const handleName=(FullName)=>{
  alert(`my name is ${FullName}`);
}

  return (
    <div className="App">
      <ProfileComponent  fullName={"IKROUBERKANE Said"} bio={"biobio"} profession={"my proffession is info"} handleName={handleName} >
        <img src={photo} className="card-img-top" alt="MyPhoto" />
        </ProfileComponent>
    </div>
  )
}

export default App
