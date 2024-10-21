import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className=" text-white px-7 py-2   bg-red-200">

      <nav className=" flex justify-between">
        <NavLink to={'add-form'}>Add Post</NavLink>
        <NavLink to={'Logo'}>Logo</NavLink>
      </nav>

    </div>
  )
}
export default Header