import type { User } from "../payload-types"; 

import { checkRole } from "../collections/Users/checkRole";
import type { AccessArgs } from "payload";

type isAdmin = (args: any) => boolean

export const admins: isAdmin = ({req: {user}}) => {
  return checkRole(['admin'], user)
}
