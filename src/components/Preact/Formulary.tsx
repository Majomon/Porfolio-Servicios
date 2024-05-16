import { useRef, useState } from "preact/hooks";
import emailjs from "@emailjs/browser";
import NotifyFormulary from "./NotifyFormulary";
import ValidateFormulary from "../utils/ValidateFormulary";
import { type useStateFormularyParameter } from "../utils/ValidateFormulary";

export interface useStateFormulary {
  name: string;
  phone: number | undefined;
  motive: string;
  sms: string;
}

export default function Formulary() {
  const [state, setState] = useState<useStateFormulary>({
    name: "",
    phone: undefined,
    motive: "Seleccionar motivo",
    sms: "",
  });
  const [isActiveNotify, setIsActiveNotify] = useState<boolean>(false);
  const [statusEmail, setStatusEmail] = useState<boolean>(true);
  const [isError, setIsError] = useState<useStateFormularyParameter>({
    name: "",
    phone: "",
    motive: "",
    sms: "",
  });
  const formContact: any = useRef<HTMLFormElement | null>(null);

  const handleChangeFormulary: any = (e: HTMLFormElement) => {
    const { name, value }: any = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleBlur: any = (e: HTMLFormElement) => {
    setIsError(ValidateFormulary(state));
  };

  const handleSubmit: any = (e: HTMLFormElement) => {
    e.preventDefault();
    emailjs
      .sendForm("service_j5qh5jk", "template_pr092xj", formContact.current, {
        publicKey: "zfPTWOYTE4U47kWMa",
      })
      .then(
        (response) => {
          if (response.status === 200) {
            setIsActiveNotify(true);
            setState({
              name: "",
              phone: undefined,
              motive: "Seleccionar motivo",
              sms: "",
            });
          } else {
            console.log("error", response);
            setStatusEmail(false);
          }
        },
        (error) => {
          console.log(formContact.current);
          console.log("FAILED...", error);
          setStatusEmail(false);
        }
      );
    setTimeout(() => {
      setIsActiveNotify(false);
      setStatusEmail(true);
    }, 4000);
  };

  return (
    <form
      className="flex flex-col gap-y-3 h-full justify-center w-full max-w-[500px] m-auto"
      onSubmit={handleSubmit}
      name={"formulary"}
      ref={formContact}
    >
      <input
        className=" bg-transparent border-b border-greenMain px-2 py-3 text-white outline-none"
        type="text"
        placeholder={"Nombre"}
        value={state.name}
        onChange={handleChangeFormulary}
        name={"name"}
        id={"name"}
        required
        onBlur={handleBlur}
      />
      {isError.name && <p className="text-red-600 text-sm">{isError.name}</p>}
      <input
        className=" bg-transparent border-b border-greenMain px-2 py-3 text-white outline-none"
        type="number"
        placeholder={"Telefono"}
        value={state.phone}
        onChange={handleChangeFormulary}
        name={"phone"}
        id={"phone"}
        required
        onBlur={handleBlur}
      />
      {isError.phone && <p className="text-red-600 text-sm">{isError.phone}</p>}
      <select
        className=" bg-greenMain/5 rounded-xl px-2 py-3 text-white outline-none"
        name="motive"
        placeholder={"Motivo de consulta"}
        value={state.motive}
        onChange={handleChangeFormulary}
        id={"motive"}
        required
        onBlur={handleBlur}
      >
        <option className="text-black" value="Seleccionar motivo" selected>
          Seleccionar motivo
        </option>
        <option className="text-black" value="Desarrollo Web">
          Desarrollo Web
        </option>
        <option className="text-black" value="Diseño Web">
          Diseño Web
        </option>
      </select>
      {isError.motive && isError.motive !== "Seleccionar motivo" && (
        <p className="text-red-600 text-sm">{isError.motive}</p>
      )}
      <textarea
        name="sms"
        className=" bg-transparent border-b border-greenMain px-2 py-3 text-white outline-none"
        placeholder={"Mensajes"}
        value={state.sms}
        onChange={handleChangeFormulary}
        id={"sms"}
        required
        onBlur={handleBlur}
      ></textarea>
      {isError.sms && <p className="text-red-600 text-sm">{isError.sms}</p>}
      {!state.name ||
      !state.phone ||
      !state.sms ||
      state.motive === "Seleccionar motivo" ? (
        <button
          type="submit"
          className="uppercase rounded-full bg-gray-600 text-gray-400 w-fit py-[15px] px-[20px] mx-auto"
          disabled
        >
          Enviar
        </button>
      ) : (
        <button
          type="submit"
          className="uppercase rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white w-fit py-[15px] px-[20px] mx-auto"
        >
          Enviar
        </button>
      )}
      {isActiveNotify && (
        <NotifyFormulary
          isActiveNotify={isActiveNotify}
          statusEmail={statusEmail}
        />
      )}
    </form>
  );
}
