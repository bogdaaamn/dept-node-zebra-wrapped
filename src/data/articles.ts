import type { ImageMetadata } from "astro";

import image_article_01 from "~/assets/article-01.png";
import image_article_02 from "~/assets/article-02.jpeg";
import image_article_03 from "~/assets/article-03.png";
import image_article_04 from "~/assets/article-04.png";
import image_article_05 from "~/assets/article-05.jpg";
import image_article_06 from "~/assets/article-06.png";
import image_article_07 from "~/assets/article-07.jpg";
import image_article_08 from "~/assets/article-08.png";
import image_article_09 from "~/assets/article-09.png";

export type Article = {
  tag: string;
  title: string;
  author: string;
  image: ImageMetadata;
};

export default [
  {
    tag: "01",
    title: "How to be a -10x Engineer",
    author: "Taylor Town",
    image: image_article_01,
  },
  {
    tag: "02",
    title: "Deep Cloning Objects in JavaScript",
    author: "Steve Sewell",
    image: image_article_02,
  },
  {
    tag: "03",
    title: "What is a Vector Database & How Does it Work?",
    author: "Roie Schwaber-Cohen",
    image: image_article_03,
  },
  {
    tag: "04",
    title: "How to monitor a Node.js application",
    author: "Danny Ramos",
    image: image_article_04,
  },
  {
    tag: "05",
    title: "Are clouds having their on-prem moment?",
    author: "Ben Popper",
    image: image_article_05,
  },
  {
    tag: "06",
    title: "How Discord Stores Trillions of Messages",
    author: "Bo Ingram",
    image: image_article_06,
  },
  {
    tag: "07",
    title: "The Safest Way To Hide Your API Keys When Using React",
    author: "Jessica Joseph",
    image: image_article_07,
  },
  {
    tag: "08",
    title: "Running Promises In Parallel: A Visual Guide",
    author: "Jules Blom",
    image: image_article_08,
  },
  {
    tag: "09",
    title: "Community in a Downturn",
    author: "Erin Mikail Staples",
    image: image_article_09,
  },
] satisfies Array<Article> as Array<Article>;
