import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Row(props) {
  const [RowImage, setRowImage] = useState([])

  const Image_path = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    async function data() {
      let result = await axios.get('https://api.themoviedb.org/3/' + props.vikash)
      // console.log(result.data.results)
      setRowImage(result.data.results)

    }
    data()
  }, [])


  return (
    <div className='Row'>
      <h1>{props.heading}</h1>
      <div className={(props.big === true)?'flex_Row big' : 'flex_Row'}>
        {
          RowImage.map((Image, index) => {
            return (
              <div className='flex_Image' key={index}>
                <img src={Image_path + Image.poster_path} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Row