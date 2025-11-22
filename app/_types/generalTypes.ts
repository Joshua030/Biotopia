/***********Translation Types ************************/

import { SUPPORTED } from "../_constants/constants";

export type Supported = (typeof SUPPORTED)[number];

export type supportedLanguage = {
  code: Supported;
  name: string;
  flag: string;
};
