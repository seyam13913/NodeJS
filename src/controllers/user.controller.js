exports.registerUserController = (req, res) => {
  try {
    const { name, email, password, dob } = req.body;
    const user = {
      name,
      email,
      password,
      dob,
    };

    return res.status(201).json({
      message: "user created successfully",
      user,
    });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
};

exports.registerUserLogin = (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === "seyam@gmail.com" && password === "1234") {
      return res.status(200).json({
        message: "user login successfully",
      });
    } else {
      return res.status(401).json({
        message: "user login failed",
      });
    }
  } catch (err) {
    return res.status(500).json({ message: "something went wrong", err });
  }
};
