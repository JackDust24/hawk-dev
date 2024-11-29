export default function Home() {
  return (
    <div className="h-4/6 overflow-y-hidden">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] sm:min-h-[calc(100vh-130px)] p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="sm:text-[6rem] text-[4rem] text-center">
          <span className="font-thin">Hawk</span>
          <span className="font-extrabold">Dev</span>
        </h1>
      </div>
    </div>
  );
}
