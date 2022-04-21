import React, { useEffect, useState } from 'react'

function ButtonWithHooks() {
    const [key1, setKey1] = useState('This is the default state of a function component')
    const [key2, setKey2] = useState(0);
    const [countries, setCountries] = useState([]);

    
    
    useEffect(
      () => {
        console.log('render');
        fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
          .then(countriesData => setCountries(countriesData))
        
      },
      []
    )

    return (
      <div>
          <button onClick={() => setKey1('This button has been clicked')}>{key1}</button>
          <button onClick={() => setKey2(1)}>{key2}</button>
          <div className='countries'>
            {countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
          </div>
      </div>
      
    )
}

export default ButtonWithHooks