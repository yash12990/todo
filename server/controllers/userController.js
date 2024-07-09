const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michaeljohnson@example.com",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emilydavis@example.com",
  },
];

export const getUsers = (req, res) => res.send({ users, status: "success" });

export const addUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send(`User ${user.name} added successfully.`);
};

export const getUserById = (req, res) => {
  // const { id } = req.params; // req.params is used to retrieve information from URL. Id is a param here
  const userId = req.params.id; // Can also be used like this

  const selectedUser = users.find((user) => (user.id = userId));

  res.send(selectedUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const filteredUsers = users.filter((user) => user.id != id);

  res.send({
    users: filteredUsers,
    status: "success",
    message: "User deleted successfully!!!",
  });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const userToBeUpdated = users.find((user) => user.id == id);
  if (name) userToBeUpdated.name = name;
  if (email) userToBeUpdated.email = email;

  res.send({
    user: userToBeUpdated,
    status: "success",
    message: "User updated successfully!!!",
  });
};
