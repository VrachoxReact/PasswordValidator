import PasswordValidator from "./components/PasswordValidator";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Password Validator
        </h1>
        <PasswordValidator />
        <p className="mt-6 text-center text-sm text-gray-600">
          Ensure your password is strong and secure.
        </p>
      </div>
    </div>
  );
}

export default App;
