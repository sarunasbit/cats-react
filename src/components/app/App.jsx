import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../loading/Loading';
import SelectOptions from '../selectOptions/SelectOptions';
import CarouselItem from '../carousel/CarouselItem';
import { useEffect, useState } from 'react';

const API_ENDPOINT = import.meta.env.VITE_CAT_API_KEY;
const breedUrl = 'https://api.thecatapi.com/v1/breeds'
const imgUrl = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=`
function App() {
  const [loading, setLoading] = useState(true)
  const [breeds, setBreeds] = useState([])
  const [catImages, setCatImages] = useState([])



  const fetchCats = async (url, callBack)=>{
    setLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      callBack(data)
    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchCats(breedUrl, setBreeds)
  },[])

  const handleSelect=(breedId)=>{
      if(breedId){
        setLoading(true)
        fetchCats(`${imgUrl}${breedId}&api_key=${API_ENDPOINT}`, setCatImages)
        console.log(catImages)
      }else{
        console.log("Soem kind of error")
      }
  }
  
  if(loading){
    return(
        <main>
            <Loading/>
        </main>
    )
  }



  console.log(breeds)
  return (
    <div className="container">
      <SelectOptions breeds={breeds} onSelect={handleSelect}/>
      <CarouselItem catImages={catImages}/>
    </div>
  )


}

export default App
