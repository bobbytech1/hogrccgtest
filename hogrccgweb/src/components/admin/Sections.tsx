type SectionContent = {
    [key: string]: string; // Object with string keys and string values
  };
  
  type SectionProps = {
    title: string;
    data: SectionContent;
    sectionKey: string;
    onChange: (key: string, value: string) => void;
  };
  
  const Section: React.FC<SectionProps> = ({ title, data, onChange }) => (
    <div className="border-t pt-4">
      <h2 className="text-xl font-semibold text-blue-700">{title}</h2>
      <div className="space-y-4 mt-2">
        {Object.keys(data).map((key) => (
          key.includes("paragraph") ? (
            <textarea
              key={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={data[key] || ""}
              onChange={(e) => onChange(key, e.target.value)}
              className="w-full p-2 border rounded-md"
              rows={4} // Adjust the number of rows as needed
            />
          ) : (
            <input
              key={key}
              type="text"
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={data[key] || ""}
              onChange={(e) => onChange(key, e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          )
        ))}
      </div>
    </div>
  );
  
  export default Section;
  