/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/Button";

import startBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="h-[492px] flex items-center"
      style={{ backgroundImage: `url(${startBg.src})` }}
    >
      <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/30 top-1/2 left-1/2"></div>
      <div className="container">
        <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  );
};
