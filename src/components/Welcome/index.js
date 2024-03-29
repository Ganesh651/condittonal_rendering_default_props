import './index.css'

const Welcome = props => {
  const {name, greeting} = props

  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

// Default props
Welcome.defaultProps = {
  name: 'Ganesh',
  greeting: 'Hello',
}

export default Welcome
