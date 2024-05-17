import "@egjs/preact-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";
import { listObjectInterests } from "../../types/ListInterestsObjects";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { useState } from "preact/hooks";

export default function CarouselInterests() {
  const [imageCurrent, setImageCurrent] = useState(0);
  const dimList: number = listObjectInterests.length;

  const listPagination: number[] = [1, 2, 3, 4];

  const handleClicImageCurrent = (): void => {
    if (imageCurrent < dimList - 1) {
      setImageCurrent(imageCurrent + 1);
    } else {
      setImageCurrent(0);
    }
  };

  const handleClicImageCurrentPagination = (index: number): void => {
    if (imageCurrent < dimList) {
      setImageCurrent(index);
    } else {
      setImageCurrent(0);
    }
  };

  return (
    <section className={"w-6/12 flex flex-col gap-y-4 mx-auto"}>
      {listObjectInterests.map((item, index) => {
        return (
          <>
            {imageCurrent === index && (
              <div
                key={index}
                className={
                  " flex w-full items-center justify-between h-fit animate-fade-left "
                }
              >
                <section className="flex flex-col sm:flex-row items-center gap-x-5 sm:gap-x-7">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.svg,
                    }}
                    className=" p-5 bg-greenMain/10"
                  ></div>
                  <h2 className=" text-greenMain text-3xl font-semibold uppercase">
                    {item.name}
                  </h2>
                </section>
                <button
                  className="text-white pr-4"
                  onClick={handleClicImageCurrent}
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 29 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 9L17.5 15L11.5 21"
                      stroke="#4AD66D"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        );
      })}
      <article className=" mx-auto flex items-center gap-x-2">
        {listPagination.map((item, index) => {
          return (
            <button
              key={item}
              className={`w-[12px] h-[12px] border rounded-full border-greenMain transition-all duration-150 ${
                imageCurrent === index && "bg-greenMain"
              }`}
              onClick={() => handleClicImageCurrentPagination(index)}
            />
          );
        })}
      </article>
    </section>
  );
}
