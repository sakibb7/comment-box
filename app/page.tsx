import { commentData } from "@/public/data";
import myImg from "@/public/images/people1.png";
import Image from "next/image";
import { FaReply } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PiPencilSimpleFill } from "react-icons/pi";

export default function Home() {
  return (
    <main className="  w-full flex justify-center items-center flex-col py-20">
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
            className="flex justify-start items-start gap-2 sm:gap-4 max-w-[800px] flex-col m-2"
            key={id}
          >
            <div className="flex justify-start items-start gap-2 sm:gap-4  bg-white rounded-xl p-3 sm:p-6 font-medium">
              <div className="flex flex-col gap-1 bg-slate-100 p-2  rounded-xl text-lg text-slate-400 font-semibold">
                <button className="">+</button>
                <p className="text-base text-blue-800">{likeCount}</p>
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
                  <button className=" text-blue-800 font-semibold flex justify-start items-center gap-2">
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
                    replyTo,
                    isMyReply,
                  }) => (
                    <div
                      className="flex justify-start items-start gap-2 sm:gap-6  bg-white rounded-xl p-3 sm:p-6 font-medium ml-6 sm:ml-16"
                      key={id}
                    >
                      <div className="flex flex-col gap-1 bg-slate-100 p-2  rounded-xl text-lg text-slate-400 font-semibold">
                        <button className="">+</button>
                        <p className="text-base text-blue-800">{likeCount}</p>
                        <button className="">-</button>
                      </div>
                      <div className="">
                        <div className="flex justify-between items-center pb-1 sm:pb-3 ">
                          <div className="flex justify-start items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-1">
                            <div className="flex justify-start items-center gap-2 sm:gap-4">
                              <Image
                                src={userImg}
                                alt=""
                                className=" rounded-full size-9"
                              />
                              <p>
                                {username}
                                {isMyReply && (
                                  <span className="bg-blue-800 text-white text-xs px-1 py-px rounded-sm mx-1">
                                    You
                                  </span>
                                )}
                              </p>
                            </div>
                            <p className="text-slate-500"> {commentTime}</p>
                          </div>
                          {isMyReply ? (
                            <div className="flex justify-end items-end gap-4 ">
                              <button className=" text-orange-600 font-semibold flex justify-start items-center gap-1">
                                <MdDelete size={16} />{" "}
                                <span className="max-[420px]:hidden">
                                  Delete
                                </span>
                              </button>
                              <button className=" text-blue-800 font-semibold flex justify-start items-center gap-1">
                                <PiPencilSimpleFill size={16} />{" "}
                                <span className="max-[420px]:hidden">Edit</span>
                              </button>
                            </div>
                          ) : (
                            <button className=" text-blue-800 font-semibold flex justify-start items-center gap-1">
                              <FaReply size={16} /> Reply
                            </button>
                          )}
                        </div>
                        <p className="text-slate-500 ">
                          {" "}
                          <span className="text-blue-800 font-semibold pr-1">
                            {replyTo}
                          </span>
                          {comment}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        )
      )}

      <div className="flex justify-between items-start bg-white rounded-xl p-3 sm:p-6 font-medium gap-4 w-full max-w-[800px] mt-2">
        <Image
          src={myImg}
          alt="profile image"
          className="rounded-full size-10"
        />

        <textarea
          placeholder="Add a comment..."
          className="p-3 min-h-24 border rounded-xl w-full"
        ></textarea>
        <button className=" uppercase bg-blue-700 text-white px-4 py-2 rounded-lg">
          send
        </button>
      </div>
    </main>
  );
}
