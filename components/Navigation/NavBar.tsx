"use client";
import { eagle } from "@/app/fonts";
import { navLinks, shopLinks } from "@/constants/navLinks";
import Link from "next/link";
import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FiChevronDown } from "react-icons/fi";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-[10000] bg-white shadow-lg shadow-gray-500">
      <div className="px-6 py-4">
        <div className="md:hidden flex items-center justify-between">
          <div className={`${eagle.className} text-2xl font-bold`}>Shopin</div>
          <button className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center gap-2">
            <BsCart4 className="text-2xl" />
            <span className="text-lg font-medium">Cart</span>
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 text-2xl"
          >
            {mobileOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>

        <div className="hidden md:flex items-center justify-between">
          <div className={`${eagle.className} text-2xl font-bold`}>Shopin</div>
          <div className="flex items-center">
            {navLinks.map((link) => {
              if (link.title === "Shop") {
                return (
                  <div
                    key={link.id}
                    className="relative px-4 flex items-center"
                  >
                    <Link
                      href={link.url}
                      className="text-xl font-medium hover:border-b-2 hover:border-b-gray-700"
                    >
                      Shop
                    </Link>
                    <button
                      aria-label="Toggle shop dropdown"
                      onClick={() => setShopOpen((v) => !v)}
                      className="ml-1 p-1"
                    >
                      <FiChevronDown className="text-xl" />
                    </button>
                    {shopOpen && (
                      <div className="absolute left-[50%] translate-x-[-50%] top-full mt-8 w-70 bg-white border border-gray-200 rounded-md shadow-lg py-2 animate-[fadeDown_0.22s_ease-out]">
                        {shopLinks.map((s) => (
                          <Link
                            href={s.url}
                            key={s.id}
                            className="block px-10 py-2 text-base hover:bg-gray-50"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link href={link.url} key={link.id} className="px-4">
                  <p className="text-xl font-medium hover:border-b-2 hover:border-b-gray-700">
                    {link.title}
                  </p>
                </Link>
              );
            })}
          </div>
          <button className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center gap-2">
            <BsCart4 className="text-2xl" />
            <span className="text-lg font-medium">Cart</span>
          </button>
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 h-full w-4/5 bg-white shadow-lg transition-transform duration-300 z-50 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => {
            if (link.title === "Shop") {
              return (
                <div key={link.id} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.url}
                      className="text-xl font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      Shop
                    </Link>
                    <button
                      aria-label="Toggle shop dropdown"
                      onClick={() => setMobileShopOpen((v) => !v)}
                      className="p-1"
                    >
                      <FiChevronDown className="text-xl" />
                    </button>
                  </div>
                  {mobileShopOpen && (
                    <div className="mt-2 pl-4 flex flex-col animate-[fadeDown_0.22s_ease-out]">
                      {shopLinks.map((s) => (
                        <Link
                          href={s.url}
                          key={s.id}
                          className="py-2 text-base"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-xl font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
    </div>
  );
};

export default NavBar;
