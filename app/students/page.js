// app/students/page.js
import Link from "next/link";
import StudentCard from "../Components/StudentCard";

const students = [
  { id: "1", name: "Cid Kagenou", yearSection: "BSIT-2D", course: "Information Technology" },
  { id: "2", name: "Kousei Arima", yearSection: "BSIT-2D", course: "Information Technology" },
  { id: "3", name: "Kusuo Saiki", yearSection: "BSIT-2D", course: "Information Technology" },
];

export default function StudentsPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Students Directory</h1>
      <div className="flex flex-col gap-3 max-w-md">
        {students.map((student) => (
          <Link key={student.id} href={`/students/${student.id}`}>
            <StudentCard
              name={student.name}
              yearSection={student.yearSection}
              course={student.course}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}