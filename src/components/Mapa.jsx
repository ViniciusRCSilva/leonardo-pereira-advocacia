import { useState } from "react";
import { Files, MapPin } from "phosphor-react";
import copy from "copy-to-clipboard";  
import { Alert, Snackbar } from "@mui/material";

export default function Mapa(){
    const [open, setOpen] = useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const endereco = 'Rua tal, PE, 12345-678'

    const copyToClipboard = () => {
       copy(endereco);

       setOpen(true);
    }


    return(
        <div className="flex flex-col lg:justify-between items-center lg:items-start lg:mt-0 mt-10">
            <div className="flex flex-col items-center lg:items-start">
                <span className="text-[#212a72FF] text-md lg:text-lg font-bold">SAIBA ONDE NOS ENCONTRAR</span>

                <div className="flex flex-row items-center mt-2">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center">
                            <MapPin weight="fill" className="text-[#212a72FF] mr-2"/>
                            <span>Endereço: {endereco}</span>

                            <Files 
                                weight="bold" 
                                className="bg-[#212a72FF] text-white p-1 rounded-md text-2xl ml-2 lg:cursor-pointer lg:hover:scale-105 transition-all"
                                onClick={copyToClipboard}    
                            />
                        </div>
                    </div>
                </div>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} className="animate-bounce">
                        <span className="font-raleway">
                            Endereço copiado!
                        </span>
                    </Alert>
                </Snackbar>
            </div>
        
            {/* Mapa para Mobile */}
            <div className="flex lg:hidden border-4 border-[#212a72FF] rounded-md mt-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15797.160604879926!2d-34.91757025!3d-8.1734964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1661457244569!5m2!1spt-BR!2sbr" 
                    width="340" 
                    height="300" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>   
            </div>

            {/* Mapa para Desktop */}
            <div className="hidden lg:flex border-4 border-[#212a72FF] rounded-md mt-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15797.160604879926!2d-34.91757025!3d-8.1734964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1661457244569!5m2!1spt-BR!2sbr" 
                    width="450" 
                    height="330" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>    
            </div>
        </div>
    )
}