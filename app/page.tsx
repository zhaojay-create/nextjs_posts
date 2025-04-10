import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nobis
        blanditiis earum dolore odit dolorum quae incidunt cumque cupiditate
        facilis dignissimos corporis quidem sint alias asperiores quaerat
        magnam, doloremque ducimus?
      </p>
      <Link href={"/posts"}>post</Link>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nobis
      blanditiis earum dolore odit dolorum quae incidunt cumque cupiditate
      facilis dignissimos corporis quidem sint alias asperiores quaerat magnam,
      doloremque ducimus?
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nobis
        blanditiis earum dolore odit dolorum quae incidunt cumque cupiditate
        facilis dignissimos corporis quidem sint alias asperiores quaerat
        magnam, doloremque ducimus?
      </p>
    </div>
  );
}
