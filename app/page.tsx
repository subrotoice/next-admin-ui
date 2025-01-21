import Image from "next/image";
import TopBox from "./components/TopBox";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-4 auto-rows-[minmax(18rem,_auto)] gap-4">
        <div className="p-6 rounded border border-soft-bg">
          <TopBox />
        </div>
        <div className="p-6 rounded border border-soft-bg">box2</div>
        <div className="p-6 rounded border border-soft-bg">box3</div>
        <div className="p-6 rounded border border-soft-bg">box4</div>
        <div className="p-6 rounded border border-soft-bg">box5</div>
        <div className="p-6 rounded border border-soft-bg">box6</div>
        <div className="p-6 rounded border border-soft-bg">box7</div>
        <div className="p-6 rounded border border-soft-bg">box8</div>
        <div className="p-6 rounded border border-soft-bg">box9</div>
      </div>
    </>
  );
}
