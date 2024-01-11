import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const { SECRET_KEY } = process.env;

const jwtSign = (userId) => {
  const payload = {
    id: userId,
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });
};

export default jwtSign;
