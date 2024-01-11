import bcrypt from "bcrypt";
import { HttpError } from "../helpers/HttpError.js";
import { User } from "../models/users.js";
import jwtSign from "../helpers/JwtSign.js";

export const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) throw HttpError(409, "email already in use");
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
  });
  const token = jwtSign(newUser._id);
  await User.findOneAndUpdate({ _id: newUser._id }, { token });
  res.status(201).json({
    token,
    name: newUser.name,
    email: newUser.email,
    id: newUser._id,
  });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, "invalid email or password");
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) throw HttpError(401, "invalid email or password");
  const token = jwtSign(user._id);
  await User.findOneAndUpdate({ _id: user._id }, { token });
  res.json({
    token,
    user: { email: user.email, id: user._id },
  });
};

export const signOut = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(_id, { token: null });
  if (!user) throw HttpError(401);
  res.json({ message: "Signout success" }).status(204).end();
};
