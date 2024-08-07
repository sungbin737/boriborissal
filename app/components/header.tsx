import Image from "next/image";

export default function Header() {
  const w = 100;
  return (
    <div className="flex gap-[100px] sticky">
      <div>
        <Image
          src="/bori.png"
          width={w}
          height={w}
          alt="fail"
          className=" rotate-[340deg]"
        />
      </div>
      <div>
        <Image
          src="/bori.png"
          width={w}
          height={w}
          alt="fail"
          className=" rotate-[20deg]"
        />
      </div>
      <div>
        <Image src="/ssal.png" width={w} height={w} alt="fail" />
      </div>
    </div>
  );
}
