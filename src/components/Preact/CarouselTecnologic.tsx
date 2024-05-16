import Flicking from "@egjs/preact-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/preact-flicking/dist/flicking.css";
import { listObjectTecn } from "../../types/ListTecnologicsObjects";
import { useState } from "preact/hooks";

export default function CarouselTecnologic() {
  const [hover, setHover] = useState<number | undefined>();
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];

  return (
    <>
      <Flicking
        align="prev"
        horizontal={true}
        circular={true}
        defaultIndex={0}
        bound={false}
        plugins={plugins}
      >
        {listObjectTecn.map((item, index) => {
          return (
            <div
              key={item.name}
              className={` w-[205px] h-[180px] rounded-xl flex flex-col items-center justify-center gap-y-6 mx-2.5 ${
                hover === index ? "bg-greenMain/5 transition-all duration-200" : "bg-[#B8B8B8]/10"
              }`}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(undefined)}
            >
              <div dangerouslySetInnerHTML={{ __html: hover === index ? item.svgColor : item.svg }}></div>
              <h2 class={`text-xl font-bold ${ hover === index ? "text-greenMain transition-all duration-200" :"text-[#8C8C8C]"}`}>{item.name}</h2>
            </div>
          );
        })}
      </Flicking>
    </>
  );
}
