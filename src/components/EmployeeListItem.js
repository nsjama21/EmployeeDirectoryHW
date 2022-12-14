export default function EmployeeListItem({ name, title, img }) {
  return (
    <div className="employee-list-item">
      <h4 className="employee-name">{name}</h4>
      <p className="employee-title">{title}</p>
      <img src={img} className="list-img" alt={img} />
    </div>
  );
}
