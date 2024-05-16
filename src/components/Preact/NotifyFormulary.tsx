export default function NotifyFormulary({isActiveNotify ,statusEmail}:any) {
    console.log(statusEmail)
    return(
        <div className={`${isActiveNotify ? "animate-fade-down " : "animate-fade-up " } ${statusEmail ? "bg-gradient-to-r from-green-400 via-green-500 to-green-600" : "bg-red-400"}  p-4 border fixed right-0 top-2 text-white  border-none`}>
            {statusEmail ? "Mensaje enviado :)" : "Mensaje no enviado :("}
        </div>
    )
}