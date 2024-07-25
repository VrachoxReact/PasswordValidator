import { useState } from "react";

function PasswordValidator() {
  const [password, setPassword] = useState("");

  const isLengthValid = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const strength = [
    isLengthValid,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecialChar,
  ].filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your password"
        />
      </div>
      <div className="space-y-2">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={`h-2 w-full rounded-full ${
                strength >= level ? "bg-purple-500" : "bg-gray-200"
              }`}
            ></div>
          ))}
        </div>
        <p className="text-sm text-gray-600">
          Password strength:{" "}
          {["Very Weak", "Weak", "Medium", "Strong", "Very Strong"][
            strength - 1
          ] || "None"}
        </p>
      </div>
      <ul className="text-sm text-gray-600 space-y-1">
        <li className={isLengthValid ? "text-green-500" : ""}>
          At least 8 characters
        </li>
        <li className={hasUppercase ? "text-green-500" : ""}>
          At least one uppercase letter
        </li>
        <li className={hasLowercase ? "text-green-500" : ""}>
          At least one lowercase letter
        </li>
        <li className={hasNumber ? "text-green-500" : ""}>
          At least one number
        </li>
        <li className={hasSpecialChar ? "text-green-500" : ""}>
          At least one special character
        </li>
      </ul>
    </div>
  );
}

export default PasswordValidator;
