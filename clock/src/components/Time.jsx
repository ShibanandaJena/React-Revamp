import React from 'react'

function Time() {
    const time = new Date()
    const day = String(time.getDay())
    const month =String(time.getMonth())
    const year = String(time.getFullYear())

    const date = day +"/"+month+"/"+year
    const act_date_time = time.toLocaleString()
  return (
    <div>
       <h3> This is the current time:{act_date_time}</h3>
       <br /><br /><br />
       <p>Please refresh to see the exact time</p>
    </div>
  )
}

export default Time