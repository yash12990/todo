import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import AddUserModal from "../AddUserModal";

function UsersList() {
  const [userData, setUserData] = useState([]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleDeleteClick = async (user) => {
    try {
      const id = user._id;
      console.log(id);
      const res = await axios.delete(
        `http://localhost:5010/users/delete-user/${id}`
      );

      if (res.status === 200) {
        console.log("User deleted successfully");
      }
    } catch (error) {
      console.log("Error in deleting the user", error);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5010/users").then((res) => {
      setUserData(res.data.data);
      //   console.log(res.data.data);
    });
  }, []);
  return (
    <div className="w-full flex flex-col items-center gap-y-4">
      <h1 className="text-2xl font-bold text-white p-2 px-8 rounded-xl bg-black">
        Users List
      </h1>
      <button
        onClick={() => setShowAddModal(!showAddModal)}
        className="p-2 bg-blue-500 rounded-md text-white"
      >
        Add
      </button>
      <Table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="text-center">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created At
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Operations
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userData.map((user) => (
            <tr key={user.email} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap capitalize">
                {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(user.createdAt).toLocaleString()}
              </td>
              <td className="flex justify-evenly">
                <button
                  onClick={() => setShowEditModal(true)}
                  className="p-2 bg-yellow-500 rounded-md text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(user)}
                  className="p-2 bg-red-500 rounded-md text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddUserModal showModal={showAddModal} />
    </div>
  );
}

export default UsersList;
