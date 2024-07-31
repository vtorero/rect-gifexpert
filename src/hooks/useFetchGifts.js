
import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifts';

export const useFetchGifts = (category) => {

    const [images,setImages] = useState([]);
    const [isLoading,setIsloading] = useState(true);

    const getImages = async() =>{
      const newImages = await getGifs(category);
      setImages(newImages)
      setIsloading(false);
    }


    useEffect(()=>{
        getImages();
    },[]);


    //retorna la data
    return{
        images,
        isLoading
    }
}
