import { Button } from "@/components/Button";

import startBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{ backgroundImage: `url(${startBg.src})` }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_30%,black,transparent)]"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          />

          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto text-center tracking-tighter font-medium">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-white/70 text-lg md:text-xl text-center px-4 mt-5 tracking-tight max-w-xs mx-auto">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
