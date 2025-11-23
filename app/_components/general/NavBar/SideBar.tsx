"use client";
import { useUiStore } from "@/app/_store/menu.store";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import * as menuApi from "@/app/_actions/menu.actions";
import { Navigation } from "@/app/_types/directusTypes";
import { MobileNavigationItem } from "./MobileNavigationItem";

export const SideBar = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeMenu = useUiStore((state) => state.closeSideMenu);
  const [mobileMenuItems, setMobileMenuItems] = useState<Navigation | null>(
    null,
  );

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const menuItems = await menuApi.getMenuItems();
        setMobileMenuItems(menuItems);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    getMenuItems();
  }, []);

  return (
    <div className="relative z-60">
      {/** Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 z-10 h-screen w-screen bg-black opacity-30"></div>
      )}

      {/** Blur */}
      {isSideMenuOpen && (
        <div
          className="fade-in fixed top-0 left-0 z-10 h-screen w-screen backdrop-blur-sm backdrop-filter"
          onClick={closeMenu}
        ></div>
      )}

      {/** Sidemenu */}
      <nav
        className={clsx(
          "fixed top-0 right-0 z-20 h-screen w-[80vw] transform rounded-bl-4xl bg-white p-5 shadow-2xl transition-all duration-300",
          "flex flex-col space-y-8 overflow-y-auto pt-30",
          {
            "translate-x-full": !isSideMenuOpen,
          },
        )}
      >
        <IoCloseOutline
          size={40}
          className="text-mineral-900 absolute top-10 right-6 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/** Menu */}
        {mobileMenuItems?.items.map((item) => (
          <MobileNavigationItem key={item.id} item={item} />
        ))}
      </nav>
    </div>
  );
};
