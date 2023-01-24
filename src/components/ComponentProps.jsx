/**
 * React components are actually functions, so they can take in paremeters
 */
function ComponentProps(props) {
  // props is an object that gets passed to React components
  // If your curious about the shape of the props object
  console.log(props); // {title: "some string", number: 42}

  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default ComponentProps

function ExampleUseage() {
  return (
    <>
      <ComponentProps title="some string" number={42} />
      {/* Compare that to vanilla HTML properties */}
      <img src="" alt="" />
    </>
  )
}

// Alternate way use/accept props
function PropDestruct(props) {
  const {title, number} = props

  return (
    <div>
      <h1>{title}</h1>
      <p>{number}</p>
    </div>
  )
}

// 3rd alternative way to use/accept props
function InlineDestruc({
  title,
  number
}) {

  return (
    <div>
      <h1>{title}</h1>
      <p>{number}</p>
    </div>
  )
}