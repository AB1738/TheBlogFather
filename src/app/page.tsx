import Image from "next/image";
import Link from "next/link";

export default async function Home() {


  return (
    <main className="px-10 sm:px-0 sm:w-[85%] mx-auto min-h-screen ">
      <div className="flex flex-col gap-10 pt-10 pb-5 ">
        <div className="self-center ">
      <h1 className="text-xl sm:text-2xl text-center font-bold mb-3 text-purple-600 dark:text-purple-500 ">Your Blogging Journey Starts Here</h1>
      <p className=" text-sm text-center  font-semibold">Your Platform, Your Voice</p>
      </div>
        <div className="flex flex-col lg:flex-row gap-2 ">
          <div className="flex flex-col gap-2 self-center align">
            <h2 className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-500 text-center ">Share Your Story</h2>
            <p className="text-sm text-center  font-semibold leading-7 ">Blogging has never been easier! With TheBlogFather, you can start your own blog in just a few clicks. No technical skills required. Simply sign up, write your first post, and you're ready to publish</p>
            <ul className="pb-5 sm:pb-0">
              <li className="text-sm font-light text-center"><span className="text-purple-600 dark:text-purple-500 font-bold text-md">Write About Anything</span>: From personal stories to expert insights, your voice matters.</li>
              <li className="text-sm font-light pt-2 text-center"><span className="text-purple-600 dark:text-purple-500 font-bold text-md">Simple & Intuitive</span>: Our easy-to-use interface makes it effortless to create and publish posts.</li>
              <li className="text-sm font-light pt-2 text-center"><span className="text-purple-600 dark:text-purple-500 font-bold text-md">Engage With Others</span>: Read, comment, and interact with fellow bloggers from all over the world.</li>
            </ul>
          </div>
        <Image
      height={1000}
      width={1000}
      className="w-full lg:w-[55%]"
      alt={'Hero Image'}
      src={'https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
      />
        </div>
        <div className="space-y-1 text-right ">
        <h2 className=" font-bold text-purple-600 dark:text-purple-500 text-lg sm:text-xl ">Write a Blog Nobody Can Refuse. Join TheBlogFather Today!</h2>
        <p className="pt-1 text-xs sm:text-sm font-semibold">Start writing, start sharing.</p>
        <p className="pt-1 text-xs sm:text-sm font-semibold leading-5">Become part of our blogging community and share your thoughts, stories, and creativity with the world.</p>
        <div className="flex gap-5 pt-5 justify-center">
          <Link href='/auth' className="bg-purple-500 text-white  flex justify-center align-center text-sm sm:text-md px-3 py-3 sm:px-5 sm:py-2 shadow-md hover:scale-103 transition-transform rounded font-bold">Join Today!</Link>
          <Link href='/posts' className="bg-black text-white dark:bg-white dark:text-black flex justify-center align-center text-sm sm:text-md px-3 py-3 sm:px-5 sm:py-2 shadow-md hover:scale-103 transition-transform rounded font-bold"> View Posts</Link>
        </div>
        </div>
      </div>

    </main>
  );
}

// Welcome to TheBlogFather
// Your Platform, Your Voice
// TheBlogFather is where your ideas take center stage. Whether you're passionate about technology, lifestyle, travel, or anything in between, this is your space to share, create, and connect with a global community of writers and readers.

// Share Your Story
// Blogging has never been easier! With TheBlogFather, you can start your own blog in just a few clicks. No technical skills required. Simply sign up, write your first post, and you're ready to publish!

// Write About Anything: From personal stories to expert insights, your voice matters.

// Simple & Intuitive: Our easy-to-use interface makes it effortless to create and publish posts.

// Engage With Others: Read, comment, and interact with fellow bloggers from all over the world.

// Why Join TheBlogFather?
// Free & Open: Create your blog for free and start writing today. No hidden fees or paywalls.

// Community-Focused: Engage with a welcoming community that shares your passion for writing.

// Customizable & Flexible: Make your blog truly yours with customizable themes and a range of post formats.

// Mobile-Friendly: Post, read, and comment on-the-go with our mobile-friendly platform.

// Ready to Start Your Blogging Journey?
// Sign up now and become part of TheBlogFather, where every idea finds its place. Whether you're a hobbyist, a professional writer, or just looking to share your thoughts, we’ve got the perfect space for you.