import React from "react";

const commentData = [
  {
    name: "Dilip Sharma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Dilip Sharma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Dilip Sharma",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Dilip Sharma",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Dilip Sharma",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Dilip Sharma",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Dilip Sharma",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                  {
                    name: "Dilip Sharma",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [
                      {
                        name: "Dilip Sharma",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Dilip Sharma",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Dilip Sharma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Dilip Sharma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="my-[0.5rem] flex items-center">
      <img
        className="w-[3rem]"
        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        alt=""
      />
      <div className="mt-4">
        <p className="font-bold text-[16px]">{name}</p>
        <p className="text-gray-700 text-[14px]">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment key={index} data={comment} />
      <div className="ml-8 pl-1 border-l-2 border-l-gray-800">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="my-[0.5rem]  p-2 ">
      <h1 className="font-bold text-xl">Comments</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
