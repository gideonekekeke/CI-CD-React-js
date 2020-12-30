import React, { useState } from 'react'


const quote = [
 {
   proverb : "it is not of him that willet nor of him that runnet but of GOD that showeth Mercy",
   author : "Gideon"

 },

 {
   proverb : "let God be truth and all men liars",
   author : "Bolaji"

 }





]

function Quoteholder() {
  const [counter, setCounter] = useState(1)
  return (
    <>
    <center>
    <div>

  
    </div>
    <div>
      <div>total quotes</div>
      <br/>
    {quote.length}
    </div>

    </center>
    <hr/>
    <section style = {{cursor : 'pointer'}}
    onClick={()=>{
      setCounter(counter +1)
    }}
    >
        <h3>{quote[counter% quote.length].proverb}</h3>
        <p style = {{display : 'flex', justifyContent : 'flex-end', marginTop : '60px'}}>...{quote[counter % quote.length].author}</p>
    </section>
    </>
  )
}

export default Quoteholder
