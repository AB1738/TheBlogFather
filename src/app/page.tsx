import Image from "next/image";
import Link from "next/link";
import { FaPencil } from "react-icons/fa6";
import { RiUserCommunityFill } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaSlideshare } from "react-icons/fa";
import { LogIn, FoldHorizontal } from "lucide-react";

export default async function Home() {
  return (
    <main className="px-5 sm:px-0 sm:w-[85%] mx-auto min-h-screen ">
      <div className="flex flex-col gap-10 pt-10 pb-5 ">
        <div className="self-center ">
          <h1 className="text-xl sm:text-2xl text-center font-bold mb-3 text-purple-600 dark:text-purple-500 ">
            Your Blogging Journey Starts Here
          </h1>
          <p className=" text-sm text-center  font-semibold ">
            Your Platform, Your Voice
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 ">
          <div className="flex flex-col gap-2 self-center align">
            <h2 className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-500 text-center flex justify-center items-center gap-2 ">
              <FaSlideshare />
              Share Your Story
            </h2>
            <p className="text-sm text-center  font-semibold leading-7 ">
              Blogging has never been easier! With TheBlogFather, you can start
              your own blog in just a few clicks. No technical skills required.
              Simply sign up, write your first post, and you're ready to publish
            </p>
            <ul className="pb-5 sm:pb-0">
              <li className="text-xs sm:text-sm  font-semibold text-center flex flex-col gap-1.5">
                <span className="text-purple-600 dark:text-purple-500 font-bold text-md flex gap-2 items-center justify-center">
                  <FaPencil />
                  Write About Anything
                </span>
                <p className="leading-7">
                From personal stories to expert insights, your voice matters.
                </p>
              </li>
              <li className="text-xs sm:text-sm  font-semibold pt-2 text-center flex flex-col gap-1.5">
                <span className="text-purple-600 dark:text-purple-500 font-bold text-md flex justify-center gap-2 items-center">
                  <FaHandshakeSimple />
                  Simple & Intuitive
                </span>
                <p className="leading-7">
                Our easy-to-use interface makes it effortless to create and
                publish posts.
                </p>
              </li>
              <li className="text-xs sm:text-sm font-semibold pt-2 text-center flex flex-col gap-1.5">
                <span className="text-purple-600 dark:text-purple-500 font-bold text-md flex justify-center gap-2 items-center ">
                  <RiUserCommunityFill />
                  Engage With Others
                </span>
                <p className="leading-7">
                  Read, engage, and connect with fellow bloggers from around the
                  world. Share ideas, gain inspiration, and be part of a global
                  blogging community.
                </p>
              </li>
            </ul>
          </div>
          <Image
            height={1000}
            width={1000}
            className="w-full lg:w-[55%] rounded-3xl"
            alt={"Hero Image"}
            src={"/landing-img.jpg"}
          />
        </div>
        <div className="space-y-1 text-right ">
          <h2 className=" font-bold text-purple-600 dark:text-purple-500 text-lg sm:text-xl ">
            Write a Blog Nobody Can Refuse. Join TheBlogFather Today!
          </h2>
          <p className="pt-1 text-xs sm:text-sm font-semibold">
            Start writing, start sharing.
          </p>
          <p className="pt-1 text-xs sm:text-sm font-semibold leading-5">
            Become part of our blogging community and share your thoughts,
            stories, and creativity with the world.
          </p>
          <div className="flex gap-2 sm:gap-5 pt-5 justify-center">
            <Link
              href="/auth"
              className="bg-purple-600 text-white  flex justify-center align-center text-sm sm:text-md px-3 py-3 sm:px-5 sm:py-2 shadow-md hover:scale-103 hover:bg-purple-600/85 transition-transform rounded font-bold "
            >
              <div className="flex gap-2 align-center justify-center">
                Join Today!
                <LogIn size={16} className="h-full" />
              </div>
            </Link>
            <Link
              href="/posts"
              className="bg-black text-white dark:bg-white dark:text-black flex justify-center align-center text-sm sm:text-md px-3 py-3 sm:px-5 sm:py-2 shadow-md hover:scale-103 hover:bg-black/85 transition-transform rounded font-bold"
            >
              <div className="flex gap-2 align-center justify-center">
                View Blogs
                <FoldHorizontal size={16} className="h-full" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
