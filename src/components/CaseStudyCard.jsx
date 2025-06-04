export default function CaseStudyCard({ title, client, summary }) {
  return (
    <div className="border rounded-2xl p-4 shadow">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      {client && <div className="text-xs text-gray-500 mb-2">Client: {client}</div>}
      <p className="text-sm text-gray-600">{summary}</p>
    </div>
  );
}
