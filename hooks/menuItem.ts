
 const menuItem = (path:string) => {
  const english = {
    home: "Home",
    synonym: "Synonym",
    translate: "Translate",
    contact: "Contact",
    blog: "Blog",
    language: {
      french: "French",
      english: "English",
      spanish: "Spanish",
      portuguese: "Portuguese",
      chinese: "Chinese",
      russian: "Russian",
      german: "German",
      arabic: "Arabic",
    },
    page:'english',
  };
  const german = {
    home: "Startseite",
    synonym: "Synonym",
    translate: "Übersetzen",
    contact: "Kontakt",
    blog: "Blog",
    language: {
      french: "Französisch",
      english: "Englisch",
      spanish: "Spanisch",
      portuguese: "Portugiesen",
      chinese: "Chinesisch",
      russian: "Russisch",
      german: "Deutsch",
      arabic: "Arabisch",
    },
    page:'german',

  };

  const french = {
    home: "Acceuil",
    synonym: "Synonyme",
    translate: "Traduction",
    contact: "Contact",
    blog: "Blog",
    language: {
      french: "Français",
      english: "Anglais",
      spanish: "Espagnol",
      portuguese: "Portugais",
      chinese: "Chinois",
      russian: "Russe",
      german: "Allemand",
      arabic: "Arabe",
    },
    page:'french',

  };
  const portuguese = {
    home: "Inicial",
    synonym: "Sinônimo",
    translate: "Tradução",
    contact: "Contato",
    blog: "Blog",
    language: {
      french: "Francês",
      english: "Inglês",
      spanish: "Espanhol",
      portuguese: "Português",
      chinese: "Chinês",
      russian: "Russo",
      german: "Alemão",
      arabic: "Árabe",
    },
    page:'portuguese',
  };
  if (path === "english" || path === "" ||'privacy' ) return english;
  if (path === "german") return german;
  if (path === "french") return french;
  if (path === "portuguese") return portuguese;
};

export default menuItem;