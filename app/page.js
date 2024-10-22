"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import Link from "next/link";
import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { AiOutlineFire } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { LuCoffee } from "react-icons/lu";
import { PiMedalThin } from "react-icons/pi";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Developer", "Designer", "Photographer"],
    loop: {},
  });
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <main className=" px-10 md:px-20 lg:px-40 bg-neutral-100 dark:bg-neutral-900 ">
        <section className="  min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between gap-1.5">
            <h1 className="text-xl font-burtons dark:text-white ">
              Baatour Jawher
            </h1>
            <div className="flex gap-11 mx-5">
              <Link
                className="text-xl font-burtons dark:text-white "
                href="about"
              >
                About
              </Link>
              <Link
                className="text-xl font-burtons dark:text-white "
                href="contact"
              >
                Contact Us
              </Link>
            </div>

            <ul className="flex items-center pb-3 ">
              <li>
                {!darkMode ? (
                  <button onClick={toggleDarkMode}>
                    <BsFillMoonStarsFill className="cursor-pointer text-2xl dark:md:hover:bg-white np" />
                  </button>
                ) : (
                  <button onClick={toggleDarkMode}>
                    <CiLight className="cursor-pointer text-2xl dark:bg-white" />
                  </button>
                )}
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-6 "
                  href=""
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10  ">
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-30 overflow-hidden md:h-96 md:w-96 ">
              <Image src={deved} alt="" layout="fill" objectFit="cover" />
            </div>
            <br></br>
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl ">
              Baatour Jawher
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-gray-700 dark:text-white font-semibold	">
              {text}
              <Cursor />
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Freelancer providing services for programming and design content
              needs. Join me down below and lets get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500 ">
            <Link href="" className="hover:bg-sky-500">
              <AiFillTwitterCircle />
            </Link>
            <Link
              href="https://www.linkedin.com/in/baatour-jaouhar-3692531b8/"
              className="hover:bg-blue-700"
            >
              <AiFillLinkedin />
            </Link>
            <Link
              href="https://www.linkedin.com/in/baatour-jaouhar-3692531b8/"
              className="hover:bg-red-700"
            >
              <AiFillYoutube />
            </Link>
          </div>
        </section>
        {/* Section 2*/}
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <section>
          <div>
            <h1 className="text-3xl py-2 font-medium md:text-4xl ml-6 dark:text-white">
              About Me
            </h1>
            <br></br>
            <br></br>

            <div className="md:flex items-center gap-3">
              <div className="relative ml-10 mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-30 overflow-hidden md:h-56 md:w-56	min-w-40">
                <Image src={deved} alt="" layout="fill" objectFit="cover" />
              </div>
              <div className="mx-auto ml-3 right-9 shadow-lg p-10 md:columns-2 ">
                <h2 className=" rounded  dark:text-white pr-9 text-justify">
                  Since the beginning of my journey as a freel Developer, Ive
                  done remote work for agencies consulted for startups and
                  collaborated with talanted people to create digital products.
                </h2>

                <div className="">
                  <h3 className="font-semibold dark:text-white ">
                    Developement
                  </h3>
                </div>
                <div className="bg-slate-300 h-1 rounded full">
                  <div className="bg-slate-500 w-[90%] h-full"></div>
                </div>
                <h4 className="dark:text-white font-semibold text-right">
                  90%
                </h4>

                <h3 className="font-semibold m-1 dark:text-white"> Design </h3>
                <div className="bg-slate-300 h-1 rounded full ">
                  <div className="bg-slate-500 w-[80%] h-full"></div>
                </div>
                <h4 className="dark:text-white text-right font-semibold">
                  80%
                </h4>
              </div>

              <br></br>
              <div className="">
                <button class=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded inline-flex items-center ml-3.5">
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download CV</span>
                </button>
              </div>
            </div>
            <br></br>
            <br></br>

            <div className="grid gap-5  grid-cols-4 space-x-5	pl-2">
              <div className="">
                <AiOutlineFire className="dark:bg-white" />
                <h4 className=" dark:text-white font-bold">32</h4>
                <h4 className=" dark:text-white font-semibold ">
                  Projects Completed
                </h4>
              </div>

              <div className="">
                <PiMedalThin className="dark:bg-white" />
                <h4 className=" dark:text-white font-bold">7</h4>
                <h4 className=" dark:text-white font-semibold">Rewards </h4>
              </div>

              <div className="pl-2">
                <LuCoffee className="dark:bg-white" />
                <h4 className=" dark:text-white font-bold">121</h4>
                <h4 className=" dark:text-white font-semibold">
                  Cup Of Coffee
                </h4>
              </div>

              <div className="pl-3">
                <SlPeople className="dark:bg-white" />
                <h4 className=" dark:text-white font-bold">15</h4>
                <h4 className=" dark:text-white font-semibold">
                  Satisfied Clients
                </h4>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3*/}
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-medium">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freel Developer, Ive done
              remote work for agencies consulted for startups and collaborated
              with talanted people to create digital products for both business
              and consumer use.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center right-9 shadow-lg p-10 rounded-xl my-10 ">
              <div className="inline-flex	">
                <Image src={design} alt="/" width={100} height={100} />
              </div>

              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-white">
                Design tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>

            <div className="text-center right-9 shadow-lg p-10 rounded-xl my-10 ">
              <div className="inline-flex	">
                <Image src={code} alt="/" width={100} height={100} />
              </div>

              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-white">
                Design tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>

            <div className="text-center right-9 shadow-lg p-10 rounded-xl my-10 ">
              <div className="inline-flex	">
                <Image src={consulting} alt="/" width={100} height={100} />
              </div>

              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-white">
                Design tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>
          </div>
        </section>
        <br></br>
        <br></br>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio </h3>
            <br></br>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white ">
              Since the beginning of my journey as a freel Developer, Ive done
              remote work for agencies consulted for startups and collaborated
              with talanted people to create digital products for both business
              and consumer use.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web1}
                alt="/"
                className="rounded-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web2}
                alt="/"
                className="rounded-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web6}
                alt="/"
                className="rounded-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web4}
                alt="/"
                className="rounded-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web3}
                alt="/"
                className="rounded-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web5}
                alt="/"
                className="rounded-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
