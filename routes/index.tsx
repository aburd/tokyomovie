import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="test px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/bng.png"
          width="500"
          height="500"
          alt="homina homina!"
        />
        <h1 class="text-4xl font-bold">kinsey scale</h1>
        <p class="my-4">
          gay spectrum checker
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
}
