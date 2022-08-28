import Header from "../components/Header";
import Empresa_apresentacao from "../components/Empresa_apresentacao";
import Perfil_apresentacao from "../components/Perfil_apresentacao";
import Area_de_atuacao from "../components/Area_de_atuacao";
import Perguntas_frequentes from "../components/Perguntas_frequentes";
import Contatos from "../components/Contatos";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="flex w-full justify-center items-center align-middle">
          {/* Conteúdo Geral */}
          <div className="flex flex-col w-full md:w-[75%] bg-white pt-20 items-center">

            {/* Imagem de fundo */}
            <div className="absolute z-0 w-full md:w-[75%] h-40 items-center justify-center bg-[#4f4f4f]"></div>

            {/* Corpo da página */}
            <div className="md:w-[100%] z-10 pb-10">
              {/* Apresentação Empresa */}
              <div className="">
                <Empresa_apresentacao/>
              </div>

              {/* Apresentação Perfil */}
              <div className="box-decoration-clone bg-gradient-to-r from-[#141e30] to-[#243b55] shadow-2xl mt-12 pl-10 pr-10 p-2 text-white">
                <Perfil_apresentacao/>
              </div>

              {/* Áreas de atuação */}
              <div className="mt-12 pl-10 pr-10 p-2">
                <Area_de_atuacao/>
              </div>

              {/* Perguntas frequentes */}
              <div className="box-decoration-clone bg-gradient-to-r from-[#243b55] to-[#141e30] shadow-2xl mt-12 pl-10 pr-10 p-2 text-white">
                <Perguntas_frequentes/>
              </div>

              {/* Contatos */}
              <div className="mt-12 pl-10 pr-10 p-2">
                <Contatos/>
              </div>
            </div>
          </div>
      </div>    
    </>
  )
}
