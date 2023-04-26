import React, { useState } from 'react';
import { restaurantMockData } from '../../mockData/Mockdata';
import styles from './SearchBar.module.css'


/*
const vegItems=()=>{
    const vegItems=restaurantMockData.filter((ele)=>{
        if(ele.veg===true){
            return ele;
        }
    })
    return [vegItems];
}
const nonVegItems=()=>{
    const nonVegItems=restaurantMockData.filter((ele)=>{
        if(ele.veg===false){
            return ele;
        }
    });
    return [nonVegItems]
}
const fastDelivery=()=>{
    const checkFastDelivery=()=>{
        const fastDeliveryItems=restaurantMockData.filter((ele)=>{
            if(ele.isFastDelivery===true){
                return ele;
            }
        })
    }
}
*/ 

const SearchBar = () => {
    const [input,setInput]=useState('');
    const filterData=restaurantMockData.filter((ele)=>{
        if(input==='' ){
            return;
        }
        else{
            return ele?.dish?.includes(input);
        }
    });
    const changeHandler=(event)=>{
        setInput(event.target.value);
    }

  return (
    <div>
        <input className={styles['searchClass']}  type='text' onChange={changeHandler} placeholder='Enter dish name' />
    </div>
  )
}

export default SearchBar