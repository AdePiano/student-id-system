import { useEffect, useState } from "react";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎓 Student Dashboard</h2>

      {students.map((s) => (
        <div key={s.id} style={{ marginBottom: "10px" }}>
          <h3>{s.first_name} {s.last_name}</h3>
          <p>ID: {s.student_id}</p>
          <p>Dept: {s.department}</p>
          <p>Year: {s.year_level}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
