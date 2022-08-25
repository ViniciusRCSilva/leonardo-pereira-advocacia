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
          <div className="flex flex-col w-full md:w-[80%] bg-white pt-20 items-center p-2">

            {/* Imagem de fundo */}
            <div className="absolute z-0 w-full md:w-[80%] h-40 items-center justify-center bg-[#4f4f4f]"></div>

            {/* Corpo da página */}
            <div className="md:w-[80%] z-10">
              {/* Apresentação Empresa */}
              <Empresa_apresentacao/>

              {/* Apresentação Perfil */}
              <Perfil_apresentacao/>

              {/* Áreas de atuação */}
              <Area_de_atuacao/>

              {/* Perguntas frequentes */}
              <Perguntas_frequentes/>

              {/* Contatos */}
              <Contatos/>
            </div>
          </div>
      </div>    
    </>
  )
}
