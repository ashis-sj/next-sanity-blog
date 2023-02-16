import { Post } from "@/types/post";
import Image from "next/image";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./SanityContextProvider";

const Card: React.FC<Post> = (post) => {
  const builder = imageUrlBuilder(client);
  return (
    <div style={{ width: "400px" }}>
      <Image
        src={builder.image(post.mainImage.asset._ref).url()}
        alt={post.title}
        height={400}
        width={400}
      />
      <h2>{post.title}</h2>
      <p>{post.body[0].children[0].text}</p>
    </div>
  );
};

export default Card;
