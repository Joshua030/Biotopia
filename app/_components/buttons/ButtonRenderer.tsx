import { BlockButton } from "@/app/_types/directusTypes";
import { SoftButton } from "./ui/SoftButton";

export const ButtonRenderer = (button: BlockButton) => {
  switch (button?.variant) {
    case "soft":
      return <SoftButton {...button} key={button.id} />;
    default:
      console.log("UNKNOWN", button?.variant);
      return null;
  }
};
