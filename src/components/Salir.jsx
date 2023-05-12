const MyButton = () => {
    const handleCLick= () => {
        alert("Has hecho clickl")
    }
    return (
      <button onClick={handleCLick}>Click Me!</button>
    );
  }
export default MyButton