
import Link from "next/link";

const students = [
  { id: "1", name: "Cid Kagenou", yearSection: "BSIT-2D", course: "Information Technology" },
  { id: "2", name: "Kousei Arima", yearSection: "BSIT-2D", course: "Information Technology" },
  { id: "3", name: "Kusuo Saiki", yearSection: "BSIT-2D", course: "Information Technology" },
];

export default async function StudentProfile({ params }) {
  const { id } = await params;
  const student = students.find((s) => s.id === id);

  return (
    <div>
      <Link href="/students" className="text-blue-600 hover:underline text-sm font-semibold mb-4 inline-block">
        ← Back to Directory
      </Link>

      <div className="border border-gray-200 p-6 rounded max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {student ? student.name : "Student Profile"}
        </h1>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Year & Section:</strong> {student ? student.yearSection : "N/A"}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Course:</strong> {student ? student.course : "N/A"}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Student ID:</strong> {id}
        </p>
      </div>
    </div>
  );
}