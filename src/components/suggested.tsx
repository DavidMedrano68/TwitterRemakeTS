export default function SuggestedAccount({ imgSRC }) {
  return (
    <div className=" grid grid-cols-8">
      <img
        className="place-self-center col-span-2 rounded-full w-10 h-10"
        src={imgSRC}
      ></img>
      <div className="grid col-span-3 grid-rows-2">
        <div id="Username">David M</div>
        <div id="handle" className="text-xs">
          @davidM8989
        </div>
      </div>

      <button className="text-black place-self-center p-1 bg-[#eff3f4] col-span-3 rounded-xl">
        Follow
      </button>
    </div>
  );
}
