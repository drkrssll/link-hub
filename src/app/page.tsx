import Image from "next/image"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 lg:p-20 font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col gap-8 row-start-2 items-center lg:items-start">
        <Image className="dark" src="/logo.jpg" alt="logo" width={190} height={190} priority />
        <div className="text-lg flex gap-4 items-center flex-col lg:flex-row">
          <ol>
            <li><a href="https://github.com/drkrssll" className="p-2">{"My Github ->"}</a></li>
            <li><a href="https://instagram.com/drkrssll" className="p-2">{"My Instagram ->"}</a></li>
            <li><a href="https://x.com/drkrssll" className="p-2">{"My X / Twitter ->"}</a></li>
            <li><a href="https://linkedin.com/" className="p-2">{"My LinkedIn ->"}</a></li>
          </ol>
        </div>
      </main>
    </div>
  );
}
