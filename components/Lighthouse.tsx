import React from 'react'

const Lighthouse = () => {
  return (
    <div>
      <h3>Skills(2)</h3>
      <h4>Performance and Accessibility</h4>
      <div className='flex flex-col justify-evenly'>
        <img
          src='lighthouses/light1.png' className='w-20 h-20 rounded-lg'
          alt=''></img>
        <img
          src='lighthouses/light2.png'  className='w-20 h-20 rounded-lg'
          alt=''></img>
        <img
          src='lighthouses/light3.png'  className='w-20 h-20 rounded-lg'
          alt=''></img>
      </div>
      <div>
        <ul>
          <li>Tree Shaking, for example in Angular, ng build --optimization</li>
          <li>lazy loading module</li>
          <li>
            Solve the over and under-fetching probloms of RESTapi using GraphQL
            or refactoring existing API
          </li>
          <li> Custom webpack configuration adding compression plugin</li>
          <li> Preload big images. Specify the width and height of images</li>

          <li>Write semantically correct HTML</li>
          <li>Provide sufficient color contrast</li>
          <li>
            Manual accessibility testing: navigate the whole website using
            keyboard. Avoid keyboard traps
          </li>
          <li>Test and ensure 3rd party compnent met website accessibility</li>
        </ul>
      </div>
      <div>Keep learning, keep evolving! </div>
    </div>
  )
}

export default Lighthouse
