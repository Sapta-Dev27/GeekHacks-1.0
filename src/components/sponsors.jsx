import { HoverEffect } from "./ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <>
      <div>
        <h1 className="text-center text-5xl text-white font-bold mt-16 ">
          Our <span className="text-purple-600"> Sponsors</span>
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={sponsors} />
      </div>{" "}
    </>
  );
}
export const sponsors = [
  {
    title: "DoraHacks",
    image: "/assets/images/dorahacks.jpg",
    link: "https://stripe.com",
  },
  {
    title: "ETH India",
    image: "/assets/images/eth.png",
    link: "https://netflix.com",
  },
  {
    title: ".xyz",
    image: "/assets/images/xyz.png",
    link: "https://google.com",
  },
  {
    title: "JetBrains",
    image: "/assets/images/jetbrains.jpg",
    link: "https://meta.com",
  },
];
