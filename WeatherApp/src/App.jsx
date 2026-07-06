import React from 'react'
import Weather from './components/Weather'

const App = () => {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  return (
    <div className='app'>
        <Weather/>
      
    </div>
  )
}

export default App
