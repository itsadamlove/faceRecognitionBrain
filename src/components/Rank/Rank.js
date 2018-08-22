import React from 'react'
import './Rank.css'

const Rank = ({name, entries}) => {
  return (
  <div>
    <div className='RankText'>
      {`${name}, your current entry count is...`}
    </div>
    <div className='RankText--large'>
      {entries}
    </div>
  </div>
  )
}

export default Rank;
