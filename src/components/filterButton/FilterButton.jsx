import React from 'react';
import styles from './FilterButton.module.css'

const FilterButton = ({buttonLabel,onClick}) => {
 
  return (
    <button className={styles['buttonClass']} onClick={onClick}>
    {buttonLabel}
    </button>
  )
}

export default FilterButton