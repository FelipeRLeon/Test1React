export const ContadorApp = ({ value }) => {  
    
    function handleClick(){
    value +=1
    console.log(value)
    }

  return (
    <>
        <h1>Contador: </h1>
        <p>{ value }</p>
        <button onClick = { handleClick}>
            Soy boton
        </button>
    </>
    
  )
}
