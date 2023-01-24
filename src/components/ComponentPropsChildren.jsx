/**
 * React components are actually functions, so they can take in paremeters
 */
function ComponentPropsChildren(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

function ExampleUseage() {
  return (
    <>
      <ComponentPropsChildren>
        <h1>Hi</h1>
        <p>All these elemente will be wrapped</p>
      </ComponentPropsChildren>
      {/* Compare that to vanilla HTML properties */}
      <div>
        <h1>Title</h1>
      </div>
    </>
  )
}