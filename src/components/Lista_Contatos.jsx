import { useState } from "react";
import { Phone, GoogleLogo } from "phosphor-react";
import copy from "copy-to-clipboard";  
import { Alert, Snackbar } from "@mui/material";

export default function Lista_Contatos(){

    const [open, setOpen] = useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const contato = '(81) 9 9999-9999'

    const copyToClipboard = () => {
       copy(contato);

       setOpen(true);
    }

    return(
        <>
            <span 
                className="flex flex-row items-center mt-2 lg:hover:scale-105 transition-all lg:cursor-pointer"
                value="81 9999-9999"
                onClick={copyToClipboard}
            >
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <Phone className="text-[#212a72FF] mr-2"/>
                        <span>Telefone: {contato}</span>
                    </div>
                </div>
            </span>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} className="animate-bounce">
                    Número de telefone copiado!
                </Alert>
            </Snackbar>

            <a 
                className="flex flex-row items-center mt-2 lg:hover:scale-105 transition-all"
                href="mailto:" 
                target="_blank"
                rel="noreferrer"
            >
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <GoogleLogo className="text-[#212a72FF] mr-2"/>
                        <span>E-Mail: email@gmail.com</span>
                    </div>
                </div>
            </a>
        </>
    )
}