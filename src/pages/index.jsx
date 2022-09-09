import Header from "../components/Header";
import Empresa_apresentacao from "../components/Empresa_apresentacao";
import Perfil_apresentacao from "../components/Perfil_apresentacao";
import Area_de_atuacao from "../components/Area_de_atuacao";
import Perguntas_frequentes from "../components/Perguntas_frequentes";
import Contatos from "../components/Contatos";
import White_WhatsApp_Button from "../components/White_WhatsApp_Button";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="flex w-full justify-center items-center align-middle">
          {/* Conteúdo Geral */}
          <div className="flex flex-col w-full lg:w-[75%] bg-white pt-20 items-center">

            {/* Imagem de fundo desktop */}
            <div className="absolute z-0 w-full lg:w-[75%] h-24 lg:h-40 bg-banner bg-no-repeat bg-cover"></div>

            {/* Corpo da página */}
            <div className="w-full z-10 pb-10">
              {/* Apresentação Empresa */}
              <div className="">
                <Empresa_apresentacao/>
              </div>

              {/* Apresentação Perfil */}
              <div className="bg-gradient-to-r from-[#141e30] to-[#243b55] shadow-2xl mt-12 px-10 pt-2 pb-6 text-white">
                <Perfil_apresentacao/>
                <White_WhatsApp_Button/>
              </div>

              {/* Áreas de atuação */}
              <div className="mt-12 px-10 p-2">
                <Area_de_atuacao/>
              </div>

              {/* Perguntas frequentes */}
              <div className="bg-gradient-to-r from-[#243b55] to-[#141e30] shadow-2xl mt-12 px-10 p-2 text-white">
                <Perguntas_frequentes/>
              </div>

              {/* Contatos */}
              <div className="mt-12 px-10 p-2">
                <Contatos/>
              </div>
            </div>
          </div>
      </div>    
    </>
  )
}
