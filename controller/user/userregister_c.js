const data = require("../../models/u_register");
const bcrypt = require('bcrypt') 

module.exports = {
  post: async (req, res) => {
    const { fullname , username , email , phone , password}=req.body;
    try {
      const userexist = await data.findOne({username , email})
      if(userexist){
        return res.status(400).json({ error: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new data({ fullname, username, email, phone, password: hashedPassword}); 
      await newUser.save()
      return res.status(201).json({ message: "User registration successfull" });

    } catch (error) {
      return res.status(500).json({ error: error.message });

    }
    // console.log(req.body);
    // const sign = await data.insertMany({
    //   fullname: req.body.fullname,
    //   username: req.body.username,
    //   email: req.body.email,
    //   phone: req.body.phone,
    //   password: req.body.password,
    
  }
}
