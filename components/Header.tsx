import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <header className="flex justify-center items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex justify-center space-x-3">
        <Image
          alt="Text Trek"
          src="/vercelLogo.png"
          className="sm:w-8 sm:h-[27px] w-8 h-[28px]"
          width={32}
          height={28}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          TextTrek
        </h1>
      </Link>
    </header>
  );
}
