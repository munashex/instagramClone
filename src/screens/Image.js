import React from 'react'
import {storage} from '../configs/firebase'
import {ref, listAll, getDownloadURL} from '@firebase/storage'
import '../styles/UserImage/images.css'


function Image() {

  const [imageList, setImageList] = React.useState([])
  
  let imageRef = ref(storage, "images/")


  React.useEffect(() => {
    listAll(imageRef) 
    .then(res => {
     res.items.forEach((item) => {
       getDownloadURL(item).then((url) => {
         setImageList((prev) => [...prev, url])
       })
     })
    })
   }, [imageRef])


   


  return (
    <div className='userImagesContainer'>
     
     {
        imageList.map((url, id) => {
          return (
            <div className='imageContainer'>

            <div key={id} className="returnedImages">
            <img src={url} alt="user" className="userImages"/>
           
            </div>

            </div>
          )
        })
      }
      
    </div>
  )
}

export default Image