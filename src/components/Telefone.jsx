import { useState } from "react";
import { Phone, Files } from "phosphor-react";
import copy from "copy-to-clipboard";  
import { Alert, Snackbar } from "@mui/material";

export default function Telefone(){
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const copyNumberToClipboard = () => {
        copy(contato);

        setOpen(true);
    }

    const contato = '(81) 9 9999-9999'

    return(
        <> 
            <div className="flex flex-row items-center mt-2">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <Phone className="text-[#212a72FF] mr-2"/>
                        <span>Telefone: {contato}</span>

                        <Files 
                            weight="bold" 
                            className="bg-[#212a72FF] text-white p-1 rounded-md text-2xl ml-2 lg:cursor-pointer lg:hover:scale-105 transition-all"
                            onClick={copyNumberToClipboard}    
                        />
                    </div>
                </div>
            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} className="animate-bounce">
                    <span className="font-raleway">
                        Número de telefone copiado!
                    </span>
                </Alert>
            </Snackbar>        
        </>
    )
}