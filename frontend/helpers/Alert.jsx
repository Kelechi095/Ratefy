import { useSelector } from "react-redux"

const Alert = () => {
    const {alertText} = useSelector(state => state.auth)
  return (
    <p className="alert">{alertText}</p>
  )
}

export default Alert