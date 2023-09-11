import { Skeleton } from "./skeleton";

export default function PostSkeleton() {
  return (
    <div className="mt-5 grid grid-flow-row-dense h-40">
      <div className="grid grid-cols-12">
        <Skeleton className=" ml-1 mt-2 self-start w-12 h-12 col-span-2 rounded-full" />
        <div className=" grid col-span-9 ">
          <Skeleton className="md:w-12 sm:w-8  sm:ml-5  md:h-3 sm:h-2" />
          <Skeleton className="md:w-12 sm:w-8 sm:ml-5 md:h-3 sm:h-2" />
        </div>
        <div className="flex">
          <Skeleton className="w-2 h-2 rounded-full" />
          <Skeleton className="w-2 h-2 rounded-full" />
          <Skeleton className="w-2 h-2 rounded-full" />
        </div>
      </div>
      <div className="grid-rows-2 place-self-center">
        <Skeleton className=" md:w-[400px] sm:w-[200px] h-2 mb-2" />
        <Skeleton className=" md:w-[400px] sm:w-[200px] h-2 mb-2" />
      </div>
    </div>
  );
}
