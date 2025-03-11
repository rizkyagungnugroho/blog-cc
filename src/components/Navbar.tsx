import Image from "next/image";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="container m-auto">
      <div className="flex items-center justify-between py-4">
        <Image src="/logo.png" alt="Logo" width={187} height={40} />

        <div className="text-semibold  cursor-pointer items-center gap-4 hidden md:flex">
          <p>
            <Link href="/">HomePage</Link>
            </p>
         
          <p>
            <Link href="/category">Categori</Link>
          </p>
          <p>
          <Link href="/about">About</Link>
          </p> 
        </div>
       
        <Button variant="outline" className="hidden text-purple-500 hover:text-gray500  md:block">
          Contact Me
        </Button>

        <DropdownMenu>
          {/* jadi tampilan desktop dibuat block kalo mau di tampilan mobile md:hidden */}
          <DropdownMenuTrigger className="block md:hidden ">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
            <Link href="/">Home</Link>
              </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/category">Category</Link>
              </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link href="/about">About</Link>
            </DropdownMenuItem>

            <DropdownMenuItem>Testimonials</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
