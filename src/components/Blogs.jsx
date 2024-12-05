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
             
 
  return (
    <div className="flex h-screen ">
      <div className="flex flex-col border-r basis-2/3 h-full ">
        <div className=" h-[65px] sticky top-[75px] flex flex-col justify-center items-center">
          <div className="flex gap-x-10 text-mainText font-semibold bg-white">
            <button>
              <TfiPlus />
            </button>
            <button className="h-14  px-4 ">For you</button>
            <button className="h-14  px-4 ">topic 1</button>
            <button className="h-14  px-4 ">topic 2</button>
            <button className="h-14  px-4 ">topic 3</button>
            <button className="h-14  px-4 ">topic 4</button>
          </div>
          <div class="h-[0.5px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        <div className=" flex justify-center overflow-y-auto no-scrollbar mt-20">
          <div className="flex flex-col my-14 gap-y-20  ">
            <div className=" w-[650px] bg-white border-[2px]  rounded-2xl flex flex-col">
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
            <div className=" w-[650px] bg-white border-[2px]  rounded-2xl flex flex-col">
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

      <div className="flex flex-col basis-1/3 h-full ">
        <div className=" h-[65px] sticky top-[75px] bg-white">
          <div className="h-14 flex justify-between items-center  font-semibold bg-white mx-8">
            <span className="p-2">Your Posts</span>

            <IoCreateOutline className="size-5" />
          </div>
          <div class="h-[0.5px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        <div className=" flex justify-center overflow-y-auto no-scrollbar mt-16">
          <div className="flex flex-col my-10 gap-y-14  ">
            <div className="w-[430px] bg-white border-b flex flex-col">
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
            <div className="w-[430px] bg-white border-b flex flex-col">
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
            <div className="w-[430px] bg-white border-b flex flex-col">
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
      </div>
    </div>
  );
}

export default Blogs
