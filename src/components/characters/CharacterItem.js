import React from 'react'

const CharacterItem = ({ item }) => {
  console.log(item);
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={{ item.img }} alt=''  />
        </div>
        <div className={item.schoolRating}>
          
          <h3>{item.schoolName}</h3>
          <ul>
            <li>
              <strong></strong> 
            </li>
            <li>
              <strong>Number of cases:</strong> {item.cases}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            {/* <li>
              <strong>Status again:</strong> {item.img}
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
