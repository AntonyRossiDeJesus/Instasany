import Image from "next/image";
import Link from "next/link";

import SearchIcon from "@/assets/icon-search.svg";
import UserIcon from "@/assets/icon-user.svg";
import LogoImg from "@/assets/logo.svg";

import { GridContainer } from "@/components/grid";

const arryMenu = [
  "Início",
  "Benefícios",
  "Para quem é o curso?",
  "Preços promocionais",
  "Sobre nós",
];

export function Header() {
  const activedStyled =
    "bg-green-actived text-opacity-100 text-white rounded-full";
  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center justify-center">
      <GridContainer className="flex items-center justify-between ">
        <Image className="w-[170px]" src={LogoImg} alt="logo" />

        <div className="flex items-center gap-20">
          <nav className="gap-2 hidden xl:flex">
            {arryMenu.map((item, index) => (
              <Link
                key={index}
                className={`px-3 py-1 text-white text-opacity-60 hover:text-opacity-100 transition-all ${
                  index === 0 ? activedStyled : ""
                }`}
                href={"#"}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button>
              <Image src={SearchIcon} alt="Icone de pesquisa" />
            </button>

            <button className="flex items-center gap-2 ">
              <Image src={UserIcon} alt="Icone de usuario" />

              <span className="text-white font-medium">Fazer login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
