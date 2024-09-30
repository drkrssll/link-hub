import DisplayParticles from "./DisplayParticles";

export default function Home() {
  return (
    <>
      <DisplayParticles id="particles" />
      <div className="min-h-screen font-[family-name:var(--font-geist-mono)] grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 gap-16 relative z-10">
        <main className="border rounded-lg p-4 flex flex-col gap-8 row-start-2 items-center bg-black/75">
          <div className="text-lg flex gap-2 items-center flex-col">
            <ol className="p-2">
              <li>
                <a
                  href="https://github.com/drkrssll"
                  className="p-2 hover:underline"
                >
                  {"My Github ->"}
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/drkrssll"
                  className="p-2 hover:underline"
                >
                  {"My Instagram ->"}
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/drkrssll"
                  className="p-2 hover:underline"
                >
                  {"My X / Twitter ->"}
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/"
                  className="p-2 hover:underline"
                >
                  {"My LinkedIn ->"}
                </a>
              </li>
            </ol>
          </div>
        </main>
      </div>
    </>
  );
}
