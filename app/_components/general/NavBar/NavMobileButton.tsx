"use client";

import { useUiStore } from "@/app/_store/menu.store";
import { LuMenu } from "react-icons/lu";

export const NavMobileButton = () => {
  const openMenu = useUiStore((state) => state.openSideMenu);
  return (
    <LuMenu
      size={30}
      className="mt-2 flex text-amber-50 xl:hidden"
      onClick={openMenu}
    />
  );
};
