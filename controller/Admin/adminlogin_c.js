const own = require("../../models/ownerschema");
const bcrypt = require("bcrypt");
const landing = require("../../router/landing_route");
const data = require("../../models/adminModel");

module.exports = {
  get: (req, res) => {
    res.send("admin login page");
  },

  // Function to add a new admin
  addAdmin: async (req, res) => {
    const { username, password, email } = req.body;

    try {
      // Check if the admin already exists
      const adminExists = await data.findOne({ username, email });
      if (adminExists) {
        return res.status(401).json({ error: "Admin already exists" });
      }

      // Hash the admin password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new admin object and save it to the database
      const newAdmin = new data({ username, password: hashedPassword, email });
      // await newAdmin.save();

      return res.status(200).json({ message: "Admin created successfully" });
    } catch (err) {
      return res.status(200).json({ error: err.message });
    }
  },

  // post: (req, res) => {
  //   try {
  //     const admin = {
  //       name: "Admin",
  //       email: "admin@gmail.com",
  //       password: "admin777",
  //     };
  //     console.log(JSON.stringify(admin));
  //     if (JSON.stringify(admin) === JSON.stringify(req.body)) {
  //       res.send("Welcome Admin!!!");
  //     } else {
  //       res.send("incorrect details");
  //     }
  //   } catch (error) {
  //     console.log("Incorrect details");
  //   }
  // },
  post: async (req, res) => {
    const { username, password } = req.body;
    const admin = await data.findOne({ username });
    if (!admin) {
      return res.status(401).json({ error: "invalid username or password" });
    }
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    return res.status(200).json({ message: "Admin logged in successfully" });
  },

// ----- owner creation-----


ownerget: (req,res)=>{
res.send("owner creation")
},
  ownerpost: async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password);

    const hashedPassword = await bcrypt.hash(password, 10);

    const theatreOwner = new own({ email, password: hashedPassword });
    await theatreOwner.save();

    res.status(201).send({
      message: "Theatre owner created successfully",
    });
  },
};

  
  



// module.exports = adminController;
