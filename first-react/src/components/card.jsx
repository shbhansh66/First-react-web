import React from 'react'

const card = (props) => {
  return (
    <div className='cards'>
         <div>
            <h1>{props.status}</h1>
            <p>{props.rate}</p>
         </div>

         <div className='centre'>
            <img src={props.img} alt="image" />
            <h1>{props.name}</h1>
            <p>{props.role}</p>
            <p><span></span>{props.company}</p>
            <div>
                <ul>
                    <li>{props.skill[0]}</li>
                     <li>{props.skill[1]}</li>
                      <li>{props.skill[2]}</li>
                      <li className='p'>{props.skill[3]}</li>

                </ul>
            </div>

            <p className='description'>{props.desc}</p>
         </div>

         <div>
            <p>VIEW PROFILE</p>
         </div>
        
    </div>
  )
}

export default card
