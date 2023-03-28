import React, { useState } from "react";
import {
  Container,
  Flag,
  FlagSpan,
  Footer,
  Header,
  Logo,
  Tech,
  Technologies,
  TextContainer,
} from "./styles";

import logo from "./assets/logo.svg";
import Brazil from "./assets/brazil.svg";
import Spain from "./assets/spain.svg";
import EUA from "./assets/united-states.svg";

interface Paragraph {
  paragraph: string;
  sentences: string[];
}

interface LanguageType {
  titulo: string;
  icone: string;
  click: string;
}

function App() {
  const [title, setTitle] = useState(
    "Olá, meu nome é Anderson Lins e eu sou Desenvolvedor Front-end, Tecnologias que tenho experiência:"
  );
  const [Highlights, setHighlights] = useState<Array<string>>([
    "Anderson Lins",
    "Tecnologias que tenho experiência:",
  ]);

  const techs = [
    "JavaScript",
    "React",
    "Vue Js",
    "Tailwind CSS",
    "Styled Components",
    "Sass",
    "Node",
    "Typescript",
    "Angular",
    "Java",
  ];

  function ChangeLanguage(language: string) {
    setTitle("");
    setHighlights([]);

    if (language === "português") {
      setTitle(
        "Olá, meu nome é Anderson Lins e eu sou Desenvolvedor Front-end, Tecnologias que tenho experiência:"
      );
      setHighlights([
        "Anderson Lins",
        "Tecnologias que tenho experiência:",
      ]);
    }

    if (language === "inglês") {
      setTitle(
        "Hi, my name is Anderson Lins and I'm a Front-end Developer, Technologies I have experience with:"
      );
      setHighlights([
        "Anderson Lins",
        "Technologies I have experience with:",
      ]);
    }

    if (language === "espanhol") {
      setTitle(
        "Hola, mi nombre es Anderson Lins y soy un desarrollador front-end, tecnologías con las que tengo experiencia:"
      );
      setHighlights([
        "Anderson Lins",
        "tecnologías con las que tengo experiencia:",
      ]);
    }
  }

  function LanguageButton({ titulo, icone, click }: LanguageType) {
    return (
      <Flag onClick={() => ChangeLanguage(click)}>
        <img src={icone} alt={titulo} />
        <FlagSpan>{titulo}</FlagSpan>
      </Flag>
    );
  }

  function HighlightText({ paragraph, sentences }: Paragraph) {
    let HighlightedText = paragraph;

    for (const word of sentences) {
      HighlightedText = HighlightedText.replace(
        new RegExp(word, "gi"),
        "<strong>$&</strong>"
      );
    }

    return <p dangerouslySetInnerHTML={{ __html: HighlightedText }} />;
  }

  return (
    <Container>
      <Header>
        <Logo>
          <img src={logo} alt="StackX" />
        </Logo>
      </Header>

      <TextContainer>
        <HighlightText paragraph={title} sentences={Highlights} />
      </TextContainer>

      <Technologies>
        <ul>
          {techs.map((tech, i) => (
            <li key={i}>
              <Tech>{tech}</Tech>
            </li>
          ))}
        </ul>
      </Technologies>

      <Footer>
        <LanguageButton titulo="Português" icone={Brazil}  click="português" />
        <LanguageButton titulo="Inglês" icone={EUA}  click="inglês" />
        <LanguageButton titulo="espanhol" icone={Spain}  click="espanhol" />
      </Footer>
    </Container>
  );
}

export default App;