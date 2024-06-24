import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "displayName";

export const UserTitle = (record: TUser): string => {
  return record.displayName?.toString() || String(record.id);
};
