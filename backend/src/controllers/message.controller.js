export const getUsersForSidebar = (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({})
  } catch (error) {}
};
