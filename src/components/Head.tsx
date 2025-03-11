import { Button } from "./ui/button";

import Link from "next/link";
const Jumbotron = () => {
  return (
    <section
      className="bg-[url(https://images.unsplash.com/photo-1611174335308-3590dc8a470f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]
    //  p-16 px-4 py-50"
    >
      {" "}
      {/*py(padding atas bawah)*/}
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {" "}
          {/*membuat 2 grid colom */}
          {/*KOLOM1*/}
          <div className="flex items-center">
            {" "}
            {/*membuat ke tengah*/}
            <div className="space-y-8">
              {/*Y itu adalah atas bawah*/}

              <p className="motion-preset-confetti text-5xl font-semibold text-[#D6D6D6]">
                <span className="text-[#ffffff]">
                  Review Gadget <br />
                </span>
                {""}
              </p>

              <Link href="https://www.instagram.com/rzkyagngngroho_">
                <Button className="bg-[#5E3BEE] mt-6">Read More</Button>
              </Link>
            </div>
          </div>
          {/*KOLOM2!*/}
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
