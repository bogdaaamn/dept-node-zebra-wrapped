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
  url: string;
  image: ImageMetadata;
};

export default [
  {
    tag: "01",
    title: "How to be a -10x Engineer",
    author: "Taylor Town",
    image: image_article_01,
    url: "https://taylor.town/-10x",
  },
  {
    tag: "02",
    title: "Deep Cloning Objects in JavaScript, the Modern Way",
    author: "Steve Sewell",
    image: image_article_02,
    url: "https://www.builder.io/blog/structured-clone",
  },
  {
    tag: "03",
    title: "What is a Vector Database & How Does it Work?",
    author: "Roie Schwaber-Cohen",
    image: image_article_03,
    url: "https://www.pinecone.io/learn/vector-database/",
  },
  {
    tag: "04",
    title: "How to monitor a Node.js application",
    author: "Danny Ramos",
    image: image_article_04,
    url: "https://newrelic.com/blog/best-practices/nodejs-application-monitoring",
  },
  {
    tag: "05",
    title: "Are clouds having their on-prem moment?",
    author: "Ben Popper",
    image: image_article_05,
    url: "https://stackoverflow.blog/2023/02/20/are-companies-shifting-away-from-public-clouds/",
  },
  {
    tag: "06",
    title: "How Discord Stores Trillions of Messages",
    author: "Bo Ingram",
    image: image_article_06,
    url: "https://discord.com/blog/how-discord-stores-trillions-of-messages",
  },
  {
    tag: "07",
    title: "The Safest Way To Hide Your API Keys When Using React",
    author: "Jessica Joseph",
    image: image_article_07,
    url: "https://www.smashingmagazine.com/2023/05/safest-way-hide-api-keys-react/",
  },
  {
    tag: "08",
    title: "Running Promises In Parallel: A Visual Guide",
    author: "Jules Blom",
    image: image_article_08,
    url: "https://julesblom.com/writing/running-promises-in-parallel",
  },
  {
    tag: "09",
    title: "Community in a Downturn",
    author: "Erin Mikail Staples",
    image: image_article_09,
    url: "https://www.erinmikailstaples.com/community-in-a-downturn/",
  },
] satisfies Array<Article> as Array<Article>;
