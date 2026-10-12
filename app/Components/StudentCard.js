
export default function StudentCard({ name, yearSection, course }) {
  return (
    <div className="border border-gray-200 p-4 rounded hover:border-blue-500 hover:shadow-sm">
      <h2 className="font-bold text-gray-900">{name}</h2>
      <p className="text-sm text-gray-500">{yearSection}</p>
      <p className="text-sm text-gray-500">{course}</p>
    </div>
  );
}