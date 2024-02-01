import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-orange-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mg-5">
            <Link
              to="/"
              className=" self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 rounded-lg text-white">
                Comite
              </span>
              Budnik
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.budnik.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Budnik
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Siguenos" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.budnik.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://www.budnik.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Legal</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Budnik - Ti"
            year={new Date().getFullYear()}
          />
          <div className=" flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
