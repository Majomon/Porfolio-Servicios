import { useState } from "preact/hooks";
import { ListMenus } from "../../types/ListMenusObjects";

export default function ResponsiveNavbar() {
  const [isOpen,setIsOpen] = useState<boolean>(false);
  
  const handleClicIsOpen = ():void => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <section className="block min-[930px]:hidden" onClick={handleClicIsOpen}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.25 8.75H23.75C24.5 8.75 25 8.25 25 7.5C25 6.75 24.5 6.25 23.75 6.25H6.25C5.5 6.25 5 6.75 5 7.5C5 8.25 5.5 8.75 6.25 8.75ZM6.25 16.25H23.75C24.5 16.25 25 15.75 25 15C25 14.25 24.5 13.75 23.75 13.75H6.25C5.5 13.75 5 14.25 5 15C5 15.75 5.5 16.25 6.25 16.25ZM6.25 23.75H23.75C24.5 23.75 25 23.25 25 22.5C25 21.75 24.5 21.25 23.75 21.25H6.25C5.5 21.25 5 21.75 5 22.5C5 23.25 5.5 23.75 6.25 23.75Z"
            fill="#4AD66D"
          ></path>
        </svg>
      </section>
      <section className= {`block min-[930px]:hidden ${isOpen ? "flex left-0" : "-left-[150%]"} transition-all duration-300 bg-greenBackground w-[100vw] h-screen fixed z-10 top-0 flex items-center justify-center `}>
        <ul className="flex flex-col items-start gap-7 font-normal text-sm p-5 min-[360px]:p-0">
          {ListMenus.map((item) => {
            return (
              <a href={item.href} className=" font-semibold text-2xl" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            );
          })}
          {/* ver como hacerlo responsive*/}
          {/* <ButtonContact /> */}
        </ul>
      </section>
    </>
  );
}
