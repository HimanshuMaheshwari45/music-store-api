import { APIError } from "../utils/api";

export async function IsAdminUser(req, res, next) {
  if (req.user && req.user.isAdmin) {
    next();
    return;
  } else {
    new APIError(res, {}, "User is not admin").json();
  }
}
