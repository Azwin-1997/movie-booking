const data = require("../../models/ownerschema");
const bcrypt = require("bcrypt");
const admin = require('../../controller/Admin/adminlogin_c')

module.exports = {
  get: (req, res) => {
    res.send("here is owner login page");
  },

  post: async(req,res)=>{
    const {email,password}= req.body;

    const owner = await data.findOne({email})
    if(!owner) {
      return res.status(401).json({error:"incorrect email or password"})
    }
    const match = await bcrypt.compare(password,owner.password)
    if(!match){
      return res.status(401).json({error:"incorrect email or password"})
    }
    return res.status(200).json({message:"owner login successfull"})
  }
  
  // post: async (req, res) => {
  //   const { email, password } = req.body;

  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   const theatreOwner = new data({ email, password: hashedPassword });
  //   // await theatreOwner.save();

  //   res.status(201).send({
  //     message: "Theatre owner created successfully",
  //   });
  // },
};

  //  -----add movie details-----

  