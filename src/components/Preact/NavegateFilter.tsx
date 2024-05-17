import { useEffect, useState } from "preact/hooks";
import { ListProyects } from "../../types/ListProyectsObjects";
import { objectOptionsFilters } from "../../types/Objects";
import { type ObjectProyect } from "../../types/ListProyectsObjects";

export default function NavegateFilter() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [filterArray, setFilterArray] = useState<ObjectProyect[]>([]);
  const [valueFilterNav, setValueFilterNav] = useState("TODOS");
  const [conditionAnimated, setConditionAnimated] = useState<boolean>(false);
  const [clicShow, setClicShow] = useState<number>(3);
  /* const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true); */

  const conditionBarMove =
    valueFilterNav === "TODOS"
      ? "left-0 w-[80px]"
      : valueFilterNav === "DESARROLLO WEB"
      ? " left-24 w-[160px]"
      : valueFilterNav === "DISEÑO UX/UI"
      ? " left-[270px] w-[130px]"
      : "";

  const handleClicFilter: any = (e: HTMLFormElement): void => {
    const { id }: any = e.target;
    setValueFilterNav(id);
    setConditionAnimated(false);
  };

  const handleClicSelect: any = (e: HTMLFormElement): void => {
    const { value }: any = e.target;
    setValueFilterNav(value);
    setConditionAnimated(false);
  };

  useEffect(() => {
    if (valueFilterNav === "TODOS") {
      setFilterArray(ListProyects);
    } else {
      setFilterArray(
        ListProyects.filter((item) => item.category === valueFilterNav)
      );
    }
    setConditionAnimated(true);
  }, [valueFilterNav]);

  /* useEffect(()=>{
    if(filterArray){
      setIsLoadingImage(false)
    }
  },[filterArray]) */

  return (
    <>
      <section className=" hidden sm:flex gap-x-10 relative border border-greenMain rounded-full w-fit mx-auto p-[15px]">
        <div
          className={`rounded-full absolute ${conditionBarMove} top-0 h-full transition-all duration-300 bg-gradient-to-r from-green-400 via-green-500 to-green-600 -z-10`}
        ></div>
        {objectOptionsFilters.map((item) => {
          return (
            <button
              key={item}
              className=" uppercase text-white rounded-full text-sm font-normal"
              onClick={handleClicFilter}
              id={item}
            >
              {item}
            </button>
          );
        })}
      </section>
      <select
        className="sm:hidden max-w-[300px] mx-auto px-4 py-3 border border-greenMain rounded-full bg-transparent text-white outline-none transition-all duration-300"
        onClick={handleClicSelect}
      >
        {objectOptionsFilters.map((item) => {
          return (
            <option value={item} className="bg-transparent text-black">
              {item}
            </option>
          );
        })}
      </select>
      <ul className="grid grid-cols-CardProyectsResponsive justify-items-center gap-5 sm:gap-10 animate-CardOpen w-full">
        {filterArray
          .map((item) => {
            return (
              <li
                class={` w-[300px] sm:w-[370px] h-[490px] ${
                  conditionAnimated ? "animate-fade-up" : ""
                } `}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={"proyecto {nombre de proyecto}"}
                    className="w-full h-[330px] object-cover"
                  />
                ) : (
                  <p>cargando...</p>
                )}
                {/* <img
                  src={item.image}
                  alt={"proyecto {nombre de proyecto}"}
                  className="w-full h-[330px] object-cover"
                /> */}

                <div className="text-white flex flex-col gap-y-2 pt-2">
                  <h1 className="uppercase text-greenMain text-2xl sm:text-4xl font-semibold tracking-widest">
                    {item.title}
                  </h1>
                  <p className="font-normal text-sm">{item.descrip}</p>
                  {/* <button
                    className="text-greenMain uppercase font-normal text-sm flex items-center gap-x-1 w-fit"
                    onClick={() => setIsOpenModal(!isOpenModal)}
                  >
                    <p className=" text-sm sm:text-base font-normal">
                      Mas detalles
                    </p>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_119_131)">
                        <path
                          d="M1 7H17M17 7L11 1M17 7L11 13"
                          stroke="#4AD66D"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_119_131">
                          <rect width="18" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button> */}
                  <a
                    className="text-greenMain uppercase font-normal text-sm flex items-center gap-x-1 w-fit"
                    href={item.href}
                    target="_blank"
                  >
                    <p className=" text-sm sm:text-base font-normal">
                      Mas detalles
                    </p>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_119_131)">
                        <path
                          d="M1 7H17M17 7L11 1M17 7L11 13"
                          stroke="#4AD66D"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_119_131">
                          <rect width="18" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </li>
            );
          })
          .slice(0, clicShow)}
      </ul>
      {filterArray.length > 3 && (
        <button
          className=" text-white font-normal bg-gradient-to-r hover:bg-gradient-to-l from-green-400 via-green-500 to-green-600 px-[20px] py-[15px] w-fit mx-auto uppercase rounded-full"
          onClick={
            clicShow <= 3
              ? () => setClicShow(filterArray.length)
              : () => setClicShow(3)
          }
        >
          {clicShow <= 3 ? "Mostrar Mas" : "Mostrar Menos"}
        </button>
      )}
      {/* Modal para cada item de proyectos*/}
      {isOpenModal && (
        <div className=" bg-black/75 fixed top-0 left-0 w-full h-[105vh] z-10 flex items-center justify-center animate-fade-up animate-duration-[500ms]">
          <section className="h-full max-h-[80vh] w-full max-w-[950px] bg-gradient-to-br from-green-800 via-green-600 to-green-500 text-white p-5 relative rounded-xl">
            <article className="">
              <button
                className="absolute right-5 top-3 cursor-pointer"
                onClick={() => setIsOpenModal(false)}
              >
                X
              </button>
              <h1>TEZA</h1>
              <h3>Problema</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                non ut ratione nisi laborum aspernatur beatae nemo quae maiores
                culpa dolor doloribus esse possimus, cumque animi quasi pariatur
                illum fugit?
              </p>
              <h3>Solucion</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                non ut ratione nisi laborum aspernatur beatae nemo quae maiores
                culpa dolor doloribus esse possimus, cumque animi quasi pariatur
                illum fugit?
              </p>
              <h3>Diseño</h3>
              <img src="" alt="imagen de mockucp de figma 1" />
              <img src="" alt="imagen de mockucp de figma 2" />
              <img src="" alt="imagen de mockucp de figma 3" />
              <h3>Desarrollo</h3>
              <p>tecnologias y metodos usados...</p>
            </article>
          </section>
        </div>
      )}
    </>
  );
}
