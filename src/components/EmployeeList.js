import Data from "../data"
import EmployeeListItem from "./EmployeeListItem"
import { Link } from "react-router-dom"

const employees = Data.map((ele, index) => {
  return (
    <Link to={`/employee/${index}`}>
      <EmployeeListItem key={index} {...ele} />
    </Link>
  )
});

export default function EmployeeList(props) {
  return (
    <div>
      <section className="lists">{employees}</section>
    </div>
  )
}
