
const SkillsSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800 bg-white">
      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages Column */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Languages</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                TypeScript
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                Python
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                SQL
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                MQL
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                Rust
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                Go
              </li>
            </ul>
          </div>

          {/* Frameworks Column */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Frameworks</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                Next.js
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                React
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                Node.js
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                FastAPI
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                Django
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                React Native
              </li>
            </ul>
          </div>

          {/* Platforms Column */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Platforms & Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                Docker
              </li>
              <li className="flex items-center">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                Git
              </li>
              <li className="flex items-center">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                AWS Cloud
              </li>
              <li className="flex items-center">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                MySQL
              </li>
              <li className="flex items-center">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">•</span>
                MongoDB Compass
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;