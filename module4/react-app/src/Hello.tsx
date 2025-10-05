

function Hello() {
  const name = "John";

  if (!name) {
    return <h1>Hello World!</h1>
  }
  return <h1>Hello {name}!</h1>
}

export default Hello;