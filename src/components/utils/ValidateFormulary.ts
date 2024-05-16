export interface useStateFormularyParameter {
  name: string;
  phone: string;
  motive: string;
  sms: string;
}


const ValidateFormulary = (form: object) => {
  let errorReturn: useStateFormularyParameter = {
    name: "",
    phone: "",
    motive: "",
    sms: "",
  };
  const { name,phone,motive,sms }: any = form;

  if (!name.trim()) {
    errorReturn.name = "el campo 'Nombre' es requerido";
  }
  if(!phone){
    errorReturn.phone = "el campo 'Telefono' es requerido";
  }
  if(motive === "Seleccionar motivo"){
    errorReturn.motive = "Debe seleccionar un motivo";
  }
  if(!sms){
    errorReturn.sms = "El campo 'mensaje' es requerido"
  }

  return errorReturn;
};

export default ValidateFormulary;
