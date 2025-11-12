import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContex";

function MyProfile() {
  const { user, handleUpdateProfile } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    handleUpdateProfile(name);
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-600 text-lg font-medium">No user logged in.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg container mx-auto max-w-sm transition-all duration-300">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
          My Profile
        </h2>

        <div className="flex flex-col items-center mb-2">
          <img
            src={user?.photoURL || "https://i.ibb.co/2N76VJp/avatar.png"}
            alt="profile"
            className="w-24 h-24 rounded-full border-2 border-blue-300 "
          />
          <p className="text-lg font-medium text-gray-800">{user?.email}</p>
        </div>

        {isEditing ? (
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-md font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              {user?.displayName || "No name set"}
            </h3>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium"
            >
              Update Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
