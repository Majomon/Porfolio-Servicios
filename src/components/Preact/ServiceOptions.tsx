import type { JSX } from "preact/jsx-runtime";
import { objectServices } from "../../types/Objects";
import { useState } from "preact/hooks";

export default function ServiceOptions(): JSX.Element {
  const [hoverValue, setHoverValue] = useState(0);

  const conditionBarHover: string =
    hoverValue === 1
      ? "top-0"
      : hoverValue === 2
      ? " top-[120px]"
      : hoverValue === 3
      ? "top-[240px]"
      : "";

  return (
    <article className="w-full h-fit relative">
      <div
        className={`absolute w-full transition-all duration-300 ${conditionBarHover} h-[120px] bg-gradient-to-r from-green-400 via-green-500 to-green-800 -z-10`}
      ></div>
      {objectServices.map((item) => {
        return (
          <div
            key={item.id}
            class="w-full h-[120px] text-white border-b border-[#4AD66D]/30 flex items-center justify-between py-[40px] px-[20px] cursor-pointer relative gap-x-2"
            onMouseEnter={(): void => setHoverValue(item.id)}
          >
            <section class="flex gap-x-4 items-center font-semibold w-fit ">
              <h2
                class={`text-xl sm:text-2xl transition-all duration-700 ${
                  item.id === hoverValue
                    ? "text-white"
                    : "bg-gradient-to-r from-green-400 via-green-500 to-green-800"
                } inline-block text-transparent bg-clip-text`}
              >
                0{item.id}
              </h2>
              <h1 class="text-xl sm:text-2xl">{item.name}</h1>
            </section>
            <p class="text-sm font-normal w-4/5 max-w-[600px] hidden sm:block ">
              {item.descrip}
            </p>
            <div dangerouslySetInnerHTML={{ __html: item.svg }} />
          </div>
        );
      })}
    </article>
  );
}
