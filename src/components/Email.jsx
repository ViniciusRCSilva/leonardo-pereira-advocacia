import { useState } from "react";
import { GoogleLogo, Files } from "phosphor-react";
import copy from "copy-to-clipboard";  
import { Alert, Snackbar } from "@mui/material";

export default function Email(){
    const [open, setOpen] = useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const email = 'email@email.com'



    const copyEmailToClipboard = () => {
       copy(email);

       setOpen(true);
    }

    return(
        <>
            <div className="flex flex-row items-center mt-2">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <GoogleLogo className="text-[#212a72FF] mr-2"/>
                        <span>E-Mail: {email}</span>

                        <Files 
                            weight="bold" 
                            className="bg-[#212a72FF] text-white p-1 rounded-md text-2xl ml-2 lg:cursor-pointer lg:hover:scale-105 transition-all"
                            onClick={copyEmailToClipboard}    
                        />
                    </div>
                </div>
            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} className="animate-bounce">
                    <span className="font-raleway">
                        E-mail copiado!
                    </span>
                </Alert>
            </Snackbar>
        </>
    )
}