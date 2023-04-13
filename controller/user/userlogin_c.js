const data = require("../../models/u_register");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

module.exports = {
  post: async (req, res) => {
    const { username, password } = req.body;
    const user = await data.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "incorrect username or password" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "incorrect username or password" });
    }
    
    const token = jwt.sign({ id: user._id }, 'and-the-world-will-never-know', { expiresIn: '1h' });

    res.cookie("user",token,{httpOnly:true})

    return res.status(200).json({ message: "User login successfull" });
  },
};
