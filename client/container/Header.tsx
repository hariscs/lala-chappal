import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const navLinks = ["home", "premade", "about", "gallery", "contact"];

export const Header = () => {
  const { asPath } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function isActiveRoute(route: any) {
    const cleanPath = asPath.split("#")[0].split("?")[0];
    if (route === "/home" && asPath === "/") {
      return true;
    }
    return cleanPath.startsWith(route);
  }

  const showAccurateLink = (link: string) =>
    link === "home" ? "/" : `/${link}`;

  return (
    <header className="flex px-6 md:px-20 py-5 border-b items-center justify-between ">
      {/* logo */}
      <Link href="/">
        <Image
          src="/lala.png"
          alt="Lala Chappal"
          width={100}
          height={100}
          priority
          className="w-auto h-16"
        />
      </Link>
      {/* nav links */}
      <nav className="hidden md:block">
        <ul className="flex gap-16">
          {navLinks.map((link, i) => (
            <li key={link}>
              <Link
                href={`${showAccurateLink(link)}`}
                className={`${
                  isActiveRoute(`/${link}`) && "text-primary"
                } py-3.5 hover:text-primary text-[#333] capitalize inline-block text-xl`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* cart only visible on larger screens*/}
      <Link href="/cart" className="hidden md:block py-3.5">
        <Image src="/cart.svg" priority alt="cart" width={27} height={27} />
      </Link>
      {/* mobile menu */}
      <div
        className="md:hidden py-3.5 cursor-pointer z-12"
        onClick={() => setIsMobileMenuOpen((open) => !open)}
      >
        {isMobileMenuOpen ? (
          <X size={32} />
        ) : (
          <Image src="/menu.svg" width={32} height={21} alt="mobile menu" />
        )}
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-20 right-0 left-0 bg-white shadow-md rounded-md z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* mobile menu links */}
          <ul className="flex flex-col gap-4 py-4 px-6">
            {navLinks.map((link, i) => (
              <li key={link}>
                <Link
                  href={`${showAccurateLink(link)}`}
                  className={`${
                    isActiveRoute(`/${link}`) && "text-primary"
                  } py-3.5 hover:text-primary text-[#333] capitalize inline-block text-xl`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};
