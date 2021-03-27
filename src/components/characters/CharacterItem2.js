import React from 'react'
// import axios from 'axios'

// const result =  axios(
//     `https://xdg5krknz9.execute-api.us-east-2.amazonaws.com/test/schools?requester=eelan`
// )

  
// console.log(result.data)





// console.log(result.data)

const CharacterItem = ({ item }) => {
  console.log(item);
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className={item.class}>
          
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