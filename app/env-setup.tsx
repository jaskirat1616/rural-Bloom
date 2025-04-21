export default function EnvSetup() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Environment Setup for RuraBloom</h1>

      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Prerequisites</h2>
          <p>Before running the RuraBloom application, make sure you have the following installed:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Node.js (version 16 or higher)</li>
            <li>npm or yarn</li>
            <li>Git</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Setting Up Mapbox</h2>
          <p>
            The application uses Mapbox for the interactive job map. Follow these steps to set up your Mapbox access
            token:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <p>
                Create a Mapbox account at{" "}
                <a href="https://www.mapbox.com/signup" className="text-green-600 hover:underline">
                  https://www.mapbox.com/signup
                </a>
              </p>
            </li>
            <li>
              <p>Once logged in, navigate to your account page and create a new access token</p>
            </li>
            <li>
              <p>
                Create a <code>.env.local</code> file in the root of your project with the following content:
              </p>
              <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                <code>NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token_here</code>
              </pre>
            </li>
          </ol>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Installation</h2>
          <p>Follow these steps to install and run the application:</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <p>Clone the repository:</p>
              <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                <code>git clone https://github.com/yourusername/rurabloom.git</code>
              </pre>
            </li>
            <li>
              <p>Navigate to the project directory:</p>
              <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                <code>cd rurabloom</code>
              </pre>
            </li>
            <li>
              <p>Install dependencies:</p>
              <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                <code>npm install</code>
              </pre>
              <p>or if you use yarn:</p>
              <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                <code>yarn install</code>
              </pre>
            </li>
            <li>
              <p>Start the development server:</p>
              <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                <code>npm run dev</code>
              </pre>
              <p>or with yarn:</p>
              <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                <code>yarn dev</code>
              </pre>
            </li>
            <li>
              <p>
                Open your browser and navigate to <code>http://localhost:3000</code>
              </p>
            </li>
          </ol>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Troubleshooting</h2>
          <p>If you encounter any issues:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Make sure all dependencies are installed correctly</li>
            <li>Verify that your Mapbox token is valid and has the correct permissions</li>
            <li>
              Check that the <code>.env.local</code> file is in the root directory of your project
            </li>
            <li>Ensure you're using a compatible Node.js version</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

