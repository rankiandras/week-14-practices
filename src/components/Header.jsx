import React from 'react'

function Header({to}) {
    //ha a 3. sorban a Header argumentuma (props), akkor az 5. sorban a return-nél a Header után {props.to} kell!! a jelenlegi megoldás DESTRUCTURING!!!
    /* return <div>Header {to}</div> */
  return React.createElement('div', null, `Header ${to}`)
}

export default Header