import type { ImageMetadata } from "astro";

import image_tool_01 from "~/assets/tool-01.png";
import image_tool_02 from "~/assets/tool-02.jpg";
import image_tool_03 from "~/assets/tool-03.png";
import image_tool_04 from "~/assets/tool-04.png";
import image_tool_05 from "~/assets/tool-05.png";
import image_tool_06 from "~/assets/tool-06.png";
import image_tool_07 from "~/assets/tool-07.png";
import image_tool_08 from "~/assets/tool-08.png";
import image_tool_09 from "~/assets/tool-09.png";

export type Tool = {
  tag: string;
  title: string;
  url: string;
  image: ImageMetadata;
};

export default [
  {
    tag: "01",
    title: "Bruno",
    url: "https://github.com/usebruno/bruno",
    image: image_tool_01,
  },
  {
    tag: "02",
    title: "Writers brew",
    url: "https://writersbrew.app",
    image: image_tool_02,
  },
  {
    tag: "03",
    title: "What-the-Diff",
    url: "https://whatthediff.ai/getting-started",
    image: image_tool_03,
  },
  {
    tag: "04",
    title: "React95",
    url: "https://github.com/react95-io/React95",
    image: image_tool_04,
  },
  {
    tag: "05",
    title: "Swimm",
    url: "https://swimm.io/",
    image: image_tool_05,
  },
  {
    tag: "06",
    title: "Code Snippets AI",
    url: "https://codesnippets.ai/",
    image: image_tool_06,
  },
  {
    tag: "07",
    title: "Bob",
    url: "https://github.com/benchkram/bob",
    image: image_tool_07,
  },
  {
    tag: "08",
    title: "Fig.io",
    url: "https://github.com/withfig/autocomplete",
    image: image_tool_08,
  },
  {
    tag: "09",
    title: "Neobrutalism components",
    url: "https://github.com/ekmas/neobrutalism-components",
    image: image_tool_09,
  },
] satisfies Array<Tool> as Array<Tool>;
