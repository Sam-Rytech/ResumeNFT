export default function ResumeDisplay({ metadata }: { metadata: any }) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{metadata.name}</h2>
      <p className="mb-2 text-gray-600">{metadata.description}</p>
      <ul className="list-disc pl-4">
        {metadata.attributes.map((attr: any, index: number) => (
          <li key={index}>
            <strong>{attr.trait_type}: </strong>
            {attr.value}
          </li>
        ))}
      </ul>
    </div>
  )
}
