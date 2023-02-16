import Card from "@/components/Card";
import { client } from "@/components/SanityContextProvider";
import { Post } from "@/types/post";
import { NextPage } from "next";
import React from "react";

type Props = {
  posts: Post[];
};

const posts: NextPage<Props> = ({ posts }) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {posts.map((post, index) => {
        return <Card key={index} {...post} />;
      })}
    </div>
  );
};

export default posts;

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      posts,
    },
  };
}
