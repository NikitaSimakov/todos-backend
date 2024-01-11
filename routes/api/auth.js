import express from "express";
import { ctrlWrapper } from "../../decorators/ctrlWrapper.js";
import { signIn, signUp, signOut, getCurrent } from "../../controllers/auth.js";
import { validateBody } from "../../middlewares/validateBody.js";
import {
  userSignInSchema,
  userSignUpSchema,
} from "../../schemas/users-schemas.js";
import { authenticate } from "../../middlewares/authenticate.js";

export const authRouter = express.Router();

authRouter.post("/signup", validateBody(userSignUpSchema), ctrlWrapper(signUp));
authRouter.post("/signin", validateBody(userSignInSchema), ctrlWrapper(signIn));
authRouter.post("/signout", authenticate, ctrlWrapper(signOut));
authRouter.post("/me", authenticate, ctrlWrapper(getCurrent));
