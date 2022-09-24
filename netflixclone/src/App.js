import React, { useEffect } from 'react';
import Tmdb from './Tmdb.js';

export default () => {

  useEffect(()=>{
    const loadAll = async () => {
      // Pegandoi a lista TOTAL
      let list = await Tmdb.getHomelist();
      console.log(list);
    }
    loadAll();
  }, []);

  return (
    <div>
      Olá mundo!
    </div>
  );
}