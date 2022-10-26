import React from "react";
import Dashboard from "../../../components/Dashboard/Dashboard";

const NewPost = () => {
  return (
    <div>
      <h1 className="flex justify-center text-black text-2xl title-font font-bold mb-2 ">
        NewPost
      </h1>
    </div>
  );
};

export default NewPost;

NewPost.getLayout = function NewPost(page) {
  return <Dashboard>{page}</Dashboard>;
};
