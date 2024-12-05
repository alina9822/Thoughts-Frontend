import React from "react"
import { useState } from "react";
import { TfiPlus } from "react-icons/tfi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { IoCreateOutline } from "react-icons/io5";

function Blogs() {

  let blog = "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
                  Quisquam, voluptate. Quisquam, voluptate. Quisquam, voluptate.\
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit\
                  amet, consectetur adipisicing elit. Reprehenderit mollitia\
                  necessitatibus beatae alias dolorum cum, tempore quam delectus\
                  aspernatur repellat vel. Nobis quos voluptates saepe explicabo\
                  repellat rem ipsum impedit! Lorem ipsum, dolor sit amet\
                  consectetur adipisicing elit. Necessitatibus quaerat fugiat,\
                  tempora ullam non odio nulla nostrum quas corporis dolore ipsa\
                  rerum amet quisquam, culpa iste exercitationem inventore cum\
                  blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing\
                  elit. Quisquam, voluptate. Quisquam, voluptate. Quisquam,\
                  voluptate. Lorem ipsum dolor sit amet consectetur Lorem ipsum\
                  dolor sit amet, consectetur adipisicing elit. Reprehenderit\
                  mollitia necessitatibus beatae alias dolorum cum, tempore quam\
                  delectus aspernatur repellat vel. Nobis quos voluptates saepe\
                  explicabo repellat rem ipsum impedit! Lorem ipsum, dolor sit\
                  amet consectetur adipisicing elit. Necessitatibus quaerat\
                  fugiat, tempora ullam non odio nulla nostrum quas corporis\
                  dolore ipsa rerum amet quisquam, culpa iste exercitationem";

  const [createPost, setCreatePost] = useState(false);
             
 
  return (
    <div className="flex h-screen ">
      <div className="flex flex-col border-r basis-auto relative h-screen bg-[url('/src/assets/images/BG.png')] bg-cover bg-center">
        <div className=" h-[65px] sticky top-[75px] flex flex-col justify-center items-center bg-terminalBg">
          <div className="flex gap-x-10 text-navShade font-semibold ">
            <button>
              <TfiPlus />
            </button>
            <button className="h-14  px-4 ">For you</button>
            <button className="h-14  px-4 ">topic 1</button>
            <button className="h-14  px-4 ">topic 2</button>
            <button className="h-14  px-4 ">topic 3</button>
            <button className="h-14  px-4 ">topic 4</button>
          </div>
          <div class="h-[1.5px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        <div className=" flex justify-center overflow-y-auto no-scrollbar mt-16 bg-terminalBg bg-opacity-70 ">
          <div className="flex flex-col my-14 gap-y-20 mx-36 ">
            <div className=" w-[650px] bg-white bg-opacity-70 shadow-2xl hover:scale-110 duration-300 rounded-2xl flex flex-col">
              <img
                className="w-11 rounded-full bg-white -mt-6 ml-6 border-2"
                src="/src/assets/images/userAvatar.png"
              />
              <span className="ml-6">@username</span>
              <span className="ml-6 text-xs">Nov 15</span>

              <div className="mb-5 mt-2 mx-9 text-justify grow ">
                <p className="overflow-y-auto space-y-3 scrollbar-thin max-h-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptate. Quisquam, voluptate. Quisquam, voluptate.
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Reprehenderit mollitia
                  necessitatibus beatae alias dolorum cum, tempore quam delectus
                  aspernatur repellat vel. Nobis quos voluptates saepe explicabo
                  repellat rem ipsum impedit! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Necessitatibus quaerat fugiat,
                  tempora ullam non odio nulla nostrum quas corporis dolore ipsa
                  rerum amet quisquam, culpa iste exercitationem inventore cum
                  blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quisquam, voluptate. Quisquam, voluptate. Quisquam,
                  voluptate. Lorem ipsum dolor sit amet consectetur Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Reprehenderit
                  mollitia necessitatibus beatae alias dolorum cum, tempore quam
                  delectus aspernatur repellat vel. Nobis quos voluptates saepe
                  explicabo repellat rem ipsum impedit! Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Necessitatibus quaerat
                  fugiat, tempora ullam non odio nulla nostrum quas corporis
                  dolore ipsa rerum amet quisquam, culpa iste exercitationem
                </p>
              </div>
              <div className="h-16 flex items-center justify-between mb-3">
                <div className="flex ml-10 gap-x-6">
                  <div className="flex gap-x-1 items-center justify-between">
                    <AiOutlineLike className="size-5" />
                    <span>5K</span>
                  </div>
                  <div className="flex gap-x-1 items-center justify-between">
                    <FaRegComment className="size-4" />
                    <span>5K</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-6 mr-12">
                  <FaRegBookmark className="size-4" />
                  <SlOptions className="size-4" />
                </div>
              </div>
            </div>
            <div className=" w-[650px] bg-white bg-opacity-70 shadow-2xl hover:scale-110 duration-300 rounded-2xl flex flex-col">
              <img
                className="w-11 rounded-full bg-white -mt-6 ml-6 border-2"
                src="/src/assets/images/userAvatar.png"
              />
              <span className="ml-6">@username</span>
              <span className="ml-6 text-xs">Nov 15</span>

              <div className="mb-5 mt-2 mx-9 text-justify grow ">
                <p className="overflow-y-auto space-y-3 scrollbar-thin max-h-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptate. Quisquam, voluptate. Quisquam, voluptate.
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Reprehenderit mollitia
                  necessitatibus beatae alias dolorum cum, tempore quam delectus
                  aspernatur repellat vel. Nobis quos voluptates saepe explicabo
                  repellat rem ipsum impedit! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Necessitatibus quaerat fugiat,
                  tempora ullam non odio nulla nostrum quas corporis dolore ipsa
                  rerum amet quisquam, culpa iste exercitationem inventore cum
                  blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quisquam, voluptate. Quisquam, voluptate. Quisquam,
                  voluptate. Lorem ipsum dolor sit amet consectetur Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Reprehenderit
                  mollitia necessitatibus beatae alias dolorum cum, tempore quam
                  delectus aspernatur repellat vel. Nobis quos voluptates saepe
                  explicabo repellat rem ipsum impedit! Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Necessitatibus quaerat
                  fugiat, tempora ullam non odio nulla nostrum quas corporis
                  dolore ipsa rerum amet quisquam, culpa iste exercitationem
                </p>
              </div>
              <div className="h-16 flex items-center justify-between mb-3">
                <div className="flex ml-10 gap-x-6">
                  <div className="flex gap-x-1 items-center justify-between">
                    <AiOutlineLike className="size-5" />
                    <span>5K</span>
                  </div>
                  <div className="flex gap-x-1 items-center justify-between">
                    <FaRegComment className="size-4" />
                    <span>5K</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-6 mr-12">
                  <FaRegBookmark className="size-4" />
                  <SlOptions className="size-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col basis-auto h-full w-full bg-mainBg shadow-xl ">
        <div className=" h-[65px] sticky top-[75px] bg-mainBg ">
          <div className="h-14 flex justify-between items-center  font-semibold  mx-14">
            <button className="p-2" onClick={() => setCreatePost(false)}>
              Your Posts
            </button>
            <button
              className="flex justify-center items-center"
              onClick={() => setCreatePost(true)}
            >
              <IoCreateOutline className="size-5" />
              <spnan className="ml-1.5">Create Post</spnan>
            </button>
          </div>
          <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        <div
          className={` flex justify-center overflow-y-auto no-scrollbar mt-16  ${
            createPost && "hidden"
          }`}
        >
          <div className={`flex flex-col my-10 gap-y-14 `}>
            <div className="w-[430px]  border-b-2 flex flex-col">
              <div className="flex">
                <span className="ml-5">Feelings</span>
                <span className="ml-5">tag</span>
              </div>

              <span className="ml-5 text-xs mt-2">Nov 15</span>

              <div className="my-4 mx-6 text-justify grow ">
                <p className=" h-44 ">{blog.substring(0, 400) + "..."}</p>
              </div>
              <div className="flex items-center justify-between mb-4 mx-5">
                <button>Check comments</button>
              </div>
            </div>
            <div className="w-[430px]  border-b flex flex-col">
              <div className="flex">
                <span className="ml-5">Feelings</span>
                <span className="ml-5">tag</span>
              </div>

              <span className="ml-5 text-xs mt-2">Nov 15</span>

              <div className="my-4 mx-6 text-justify grow ">
                <p className="h-44">{blog.substring(0, 400) + "..."}</p>
              </div>
              <div className="flex items-center justify-between mb-4  mx-5">
                <button>Check comments</button>
              </div>
            </div>
            <div className="w-[430px]  border-b flex flex-col">
              <div className="flex">
                <span className="ml-5">Feelings</span>
                <span className="ml-5">tag</span>
              </div>

              <span className="ml-5 text-xs mt-2">Nov 15</span>

              <div className="my-4 mx-6 text-justify grow ">
                <p className=" h-44 ">{blog.substring(0, 400) + "..."}</p>
              </div>
              <div className="flex items-center justify-between mb-4  mx-5">
                <button>Check comments</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` mt-20 h-[530px] mx-7 rounded-2xl ${
            !createPost && "hidden"
          } `}
        >
          <form className="px-8 py-6 ">
            <div className="flex flex-col justify-center">
              <div className="mb-2">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Feeling
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3 bg-mainBg"
                  required
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="mb-2 ">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Tag
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3 bg-mainBg"
                  required
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <textarea
                className="h-[280px] outline-none focus:outline-none focus:ring-0 active:ring-0 scrollbar-thin bg-mainBg  border-b-2 border-gray-300 rounded-md p-2 mt-3"
                placeholder="Write your blog here"
              ></textarea>
              <div className="flex justify-center items-center">
                <button className="outline outline-1 outline-slate-300 shadow-md p-1 px-6 mt-5 rounded-md">
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Blogs
