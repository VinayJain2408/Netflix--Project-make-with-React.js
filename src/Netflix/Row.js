import React ,{ useState} from 'react'

function Row() {
    const [RowImage,setRowImage] = useState([])

    const Image_path = 'https://image.tmdb.org/t/p/original'
    

  return (
    <div className='Row'>
    <h3>Netflix Original</h3>
    {
      RowImage.map((Image)=>{
        return(
          <img src={Image.Image_path + Image} />
        )
      })
    }
    </div>
  )
}

export default Row