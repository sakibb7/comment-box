import { commentData } from "@/public/data";
import { BsReplyFill } from "react-icons/bs";
import { FaReply } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main className="  w-full flex justify-center items-center flex-col gap-6 py-20">
      {commentData.map(
        ({
          id,
          username,
          userImg,
          commentTime,
          comment,
          likeCount,
          isReply,
          reply,
        }) => (
          <div
            className="flex justify-start items-start gap-2 sm:gap-6 max-w-[800px] flex-col m-2"
            key={id}
          >
            <div className="flex justify-start items-start gap-2 sm:gap-6  bg-white rounded-xl p-3 sm:p-6 font-medium">
              <div className="flex flex-col gap-1 bg-slate-100 p-2  rounded-xl text-lg text-slate-400 font-semibold">
                <button className="">+</button>
                <p className="text-base text-blue-900">{likeCount}</p>
                <button className="">-</button>
              </div>
              <div className="">
                <div className="flex justify-between items-center pb-1 sm:pb-3 ">
                  <div className="flex justify-start items-center gap-4 max-[430px]:flex-col max-[430px]:items-start max-[430px]:gap-1">
                    <div className="flex justify-start items-center gap-2 sm:gap-4">
                      <Image
                        src={userImg}
                        alt=""
                        className=" rounded-full size-9"
                      />
                      <p>{username}</p>
                    </div>
                    <p className="text-slate-500">{commentTime}</p>
                  </div>
                  <button className=" text-blue-900 font-semibold flex justify-start items-center gap-2">
                    <FaReply size={16} /> Reply
                  </button>
                </div>
                <p className="text-slate-500 ">{comment}</p>
              </div>
            </div>
            {isReply && (
              <div className=" relative after:absolute after:top-0 after:bottom-0 after:left-2  sm:after:left-8 after:w-0.5 after:bg-slate-200 flex flex-col gap-6">
                {reply?.map(
                  ({
                    id,
                    username,
                    userImg,
                    commentTime,
                    comment,
                    likeCount,
                  }) => (
                    <div
                      className="flex justify-start items-start gap-2 sm:gap-6  bg-white rounded-xl p-3 sm:p-6 font-medium ml-6 sm:ml-16"
                      key={id}
                    >
                      <div className="flex flex-col gap-1 bg-slate-100 p-2  rounded-xl text-lg text-slate-400 font-semibold">
                        <button className="">+</button>
                        <p className="text-base text-blue-900">{likeCount}</p>
                        <button className="">-</button>
                      </div>
                      <div className="">
                        <div className="flex justify-between items-center pb-1 sm:pb-3 ">
                          <div className="flex justify-start items-center gap-4 max-[450px]:flex-col max-[450px]:items-start max-[450px]:gap-1">
                            <div className="flex justify-start items-center gap-2 sm:gap-4">
                              <Image
                                src={userImg}
                                alt=""
                                className=" rounded-full size-9"
                              />
                              <p>{username}</p>
                            </div>
                            <p className="text-slate-500">{commentTime}</p>
                          </div>
                          <button className=" text-blue-900 font-semibold flex justify-start items-center gap-2">
                            <FaReply size={16} /> Reply
                          </button>
                        </div>
                        <p className="text-slate-500 ">{comment}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        )
      )}
    </main>
  );
}
