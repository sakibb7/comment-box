import { v4 as uuidv4 } from "uuid";
import people1 from "@/public/images/people1.png";
import people2 from "@/public/images/people2.png";
import people3 from "@/public/images/people3.png";

export const commentData = [
  {
    id: uuidv4(),
    username: "amyrobson",
    userImg: people1,
    commentTime: "1 month ago",
    comment:
      "The new auto-sync feature in this software is a game-changer! It seamlessly updates all my devices with the latest information, saving me heaps of time and ensuring I'm always working with the most current data. ",
    likeCount: "12",
    isReply: false,
  },
  {
    id: uuidv4(),
    username: "maxblagun",
    userImg: people2,
    commentTime: "2 weeks ago",
    comment:
      "I absolutely love the customizable interface feature of this product! Being able to arrange and prioritize the tools and functions according to my workflow has significantly boosted my productivity.",
    likeCount: "5",
    isReply: true,
    reply: [
      {
        id: uuidv4(),
        username: "ramsemiron",
        userImg: people1,
        commentTime: "1 week ago",
        comment:
          "The built-in collaboration feature of this product is fantastic! It streamlines communication and project management within our team, allowing us to work together seamlessly regardless of our physical locations. ",
        likeCount: "4",
        replyTo: "@maxblagun",
      },
      {
        id: uuidv4(),
        username: "juliussomo",
        userImg: people3,
        commentTime: "2 days ago",
        comment:
          "The multi-language support feature of this product is a lifesaver for our global team! With users spread across different regions, having the ability to switch between languages effortlessly ensures clear communication and understanding for everyone.",
        likeCount: "2",
        replyTo: "@ramsemiron",
        isMyReply: true,
      },
    ],
  },
];
