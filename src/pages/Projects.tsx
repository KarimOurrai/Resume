const Projects = () => {
  return (
    <div className="min-h-screen bg-[#1a1e23] pt-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
            <h3 className="text-2xl text-white mb-4">Arabic-Poetry.net</h3>
            <p className="text-gray-400 mb-4">
              A platform for Arabic poetry enthusiasts to discover, share, and discuss poetry.
            </p>
            <div className="flex gap-2">
              <span className="text-sm text-pink-500 bg-pink-500/10 px-3 py-1 rounded-full">React</span>
              <span className="text-sm text-pink-500 bg-pink-500/10 px-3 py-1 rounded-full">Node.js</span>
              <span className="text-sm text-pink-500 bg-pink-500/10 px-3 py-1 rounded-full">MongoDB</span>
            </div>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </div>
  );
};

export default Projects; 