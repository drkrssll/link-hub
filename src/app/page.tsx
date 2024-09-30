import DisplayParticles from "./DisplayParticles";

export default function Home() {
  return (
    <>
      <DisplayParticles id="particles" />
      <div className="min-h-screen font-[family-name:var(--font-geist-mono)] grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 gap-16 relative z-10">
        <main
          className="
            border-2
            p-4
            flex flex-col
            gap-8
            row-start-2
            items-center
            bg-black/75
            [border-image-source:linear-gradient(180deg,_#ffffff,_#222222)]
            [border-image-slice:1]
          "
        >
          <div className="flex gap-2 items-center flex-col w-56">
            <p
              style={{ fontSize: "36px" }}
              className="flex align-middle justify-items-center pl-5 pr-5 pt-5 text-lg"
            >
              drkrssll
            </p>
            <p
              style={{ fontSize: "20px" }}
              className="flex align-middle justify-items-center text-lg"
            >
              Web Developer
            </p>
            <ol className="p-5 w-full columns-1 space-y-2">
              <li>
                <a
                  href="https://derekrussell.pro/"
                  className="border-2 block w-full p-2 rounded hover:underline text-center"
                  target="_blank"
                >
                  {"Portfolio ->"}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/drkrssll"
                  className="border-2 block w-full p-2 rounded hover:underline text-center"
                  target="_blank"
                >
                  {"Github ->"}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/derek-russell-69ab67272/"
                  className="border-2 block w-full p-2 rounded hover:underline text-center"
                  target="_blank"
                >
                  {"LinkedIn ->"}
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/drkrssll"
                  className="border-2 block w-full p-2 rounded hover:underline text-center"
                  target="_blank"
                >
                  {"Instagram ->"}
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/drkrssll"
                  className="border-2 block w-full p-2 rounded hover:underline text-center"
                  target="_blank"
                >
                  {"X / Twitter ->"}
                </a>
              </li>
            </ol>
          </div>
        </main>
      </div>
    </>
  );
}

