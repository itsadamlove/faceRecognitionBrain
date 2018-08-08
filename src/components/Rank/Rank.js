import React from 'react'
import './Rank.css'

const Rank = () => {
  return (
  <div>
    <div className='RankText'>
      {`Adam, your current rank is...`}
    </div>
    <div className='RankText--large'>
      {`#5`}
    </div>
  </div>
  )
}

export default Rank;
