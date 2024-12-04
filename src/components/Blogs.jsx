import React from "react"
import { TfiPlus } from "react-icons/tfi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";

function Blogs() {
  return (
    <div className="flex h-full mt-[75px]">
      <div className="basis-2/3 h-full flex flex-col border-r-1 border">
        <div className=" h-[65px] sticky top-[75px] flex flex-col justify-center items-center">
          <div className="flex gap-x-10 text-mainText font-semibold">
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
        <div className="h-ful flex justify-center">
          <div className="flex flex-col my-14">
            <div >
              <div className="h-80 w-[650px] bg-white border-[2px]  rounded-2xl flex flex-col">
                <img
                  className="w-11 rounded-full bg-white -mt-6 ml-6 border-2"
                  src="/src/assets/images/userAvatar.png"
                />
                <span className="ml-6">@username</span>
                <span className="ml-6 text-xs">Nov 15</span>

                <div className="mb-5 mt-2 mx-9 text-justify grow ">
                  <p className="overflow-y-auto space-y-3 scrollbar-thin h-44">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptate. Quisquam, voluptate. Quisquam,
                    voluptate. Lorem ipsum dolor sit amet consectetur Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit mollitia necessitatibus beatae alias dolorum
                    cum, tempore quam delectus aspernatur repellat vel. Nobis
                    quos voluptates saepe explicabo repellat rem ipsum impedit!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus quaerat fugiat, tempora ullam non odio nulla
                    nostrum quas corporis dolore ipsa rerum amet quisquam, culpa
                    iste exercitationem inventore cum blanditiis? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quisquam,
                    voluptate. Quisquam, voluptate. Quisquam, voluptate. Lorem
                    ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Reprehenderit mollitia
                    necessitatibus beatae alias dolorum cum, tempore quam
                    delectus aspernatur repellat vel. Nobis quos voluptates
                    saepe explicabo repellat rem ipsum impedit! Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Necessitatibus
                    quaerat fugiat, tempora ullam non odio nulla nostrum quas
                    corporis dolore ipsa rerum amet quisquam, culpa iste
                    exercitationem
                  </p>
                </div>
                <div className="h-16 flex items-center justify-between mb-5">
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
      </div>
      <div className="basis-1/3 h-full"></div>
    </div>
  );
}

export default Blogs
