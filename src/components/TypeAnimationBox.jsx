import AnimatedText from "./AnimatedText";
import { IoPlayOutline } from "react-icons/io5";

function TypeAnimationBox() {
  let text =
    "Hey there! Welcome to React Animation. This is a type and delete animation using React and Tailwind CSS. Feel free to customize and enhance it for your needs.";
  return (
    <center>
      <div className="demo md:w-[697px] rounded-xl relative md:left-[100px] w-[85%] md:top-0 top-[150px] md:bg-[linear-gradient(#7559ff,#5636f3)]">
        <video
          className="hero-video rounded-xl"
          src="https://resource.heygencdn.com/homepage/header_video_josh2.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute md:top-[28px] md:left-[35px] left-[10px] top-[135px]">
          <div className="bg-[rgba(0,0,0,.5)] w-[104px] h-[55px] flex items-center gap-2 justify-center z-50 cursor-pointer hover:bg-violet-500 rounded-xl">
            <IoPlayOutline className="text-white" />
            <p className=" text-white">Demo</p>
          </div>
        </div>
        <div className=" md:absolute md:z-50 md:top-[146px] md:left-[-160px] top-[-334px] left-[-89px] relative">
          <div className=" flex flex-col w-[240px]  ml-3 bg-white rounded-xl px-4 py-3 md:h-[250px] h-auto">
            <div className=" flex gap-2">
              <img
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf826fcbe9010b22000e_hero_avatar_1.webp"
                loading="lazy"
                alt=""
                className=" w-7 h-7 object-cover rounded-full bg-violet-500"
              />

              <img
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf82026f22092b01126f_hero_avatar_2.webp"
                loading="lazy"
                alt=""
                className=" w-7 h-7 object-cover"
              />

              <img
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf837db334699b6f542b_hero_avatar_3.webp"
                loading="lazy"
                alt=""
                className=" w-7 h-7 object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className=" text-violet-600 text-start">Script</div>
              <AnimatedText text={text} key={""} />
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default TypeAnimationBox;
