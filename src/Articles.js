import React from "react";
import { Article } from "./Article";

export const Articles = () => {
  const articles = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia, molestiae quas vel sint commodi",
      date: "27/01/23",
      author: "Sujay Bhagwat",
      image: "https://picsum.photos/600/400/?random",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia, molestiae quas vel sint commodi",
      date: "27/01/23",
      author: "Sujay Bhagwat",
      image: "https://picsum.photos/600/400/?random",
    },
    {
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia, molestiae quas vel sint commodi",
        date: "27/01/23",
        author: "Sujay Bhagwat",
        image: "https://picsum.photos/600/400/?random",
      },
      {
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia, molestiae quas vel sint commodi",
        date: "27/01/23",
        author: "Sujay Bhagwat",
        image: "https://picsum.photos/600/400/?random",
      },
      {
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia, molestiae quas vel sint commodi",
        date: "27/01/23",
        author: "Sujay Bhagwat",
        image: "https://picsum.photos/600/400/?random",
      },
      {
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia, molestiae quas vel sint commodi",
        date: "27/01/23",
        author: "Sujay Bhagwat",
        image: "https://picsum.photos/600/400/?random",
      },
  ];
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
<div className="flex space-x-2 justify-start">
  <h2 className="text-3xl font-medium leading-tight mb-3 text-white text-center  bg-red-400 px-5 py-3 rounded-lg ">
    Latest Articles
  </h2>
</div>
        

      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {articles.map((article) => (
            <Article article={article} />
            ))}
      </div>
    </div>
  );
};
