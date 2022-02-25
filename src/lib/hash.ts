import { SALT } from "@config/constants";
import { hashSync, compareSync } from "bcryptjs";

export const hash = async (value: string) => {
  const valueHashed = await hashSync(value, SALT);

  return valueHashed;
};

export const compareHash = async (
  value: string,
  hashedValue: string
): Promise<boolean> => {
  const valueCompared = await compareSync(value, hashedValue);

  return !!valueCompared;
};
