export const adatLeiro= {
sorszam:{
  megjelenes: "Sorsz."
},

title: { 
    megjelenes: "Cím",
    tipus: "text",
    placeholder: "Cím",
    pattern: "[A-Z][a-z]{3}",
    value: "Cím",
    szoveg: "Legalább 3 betű, a címnek nagybetűvel kell kezdődnie!",
    required: true
  },

    date: { 
      megjelenes: "Dátum",
      tipus: "date",
      placeholder: "Dátum",
      pattern: "",
      value: "2023-01-01",
      szoveg: "",
      required: true,
    },

      price: { 
        megjelenes: "Ár",
        tipus: "number",
        placeholder: "Ár",
        pattern: {min: "500", max: "10000" },
        value: "1000",
        szoveg: "500 és 10.000 közötti számokat adhat meg!",
        required: true,
      },
      
      torles: { 
        megjelenes: "Törlés",

      },
      
      mentes: { 
        megjelenes: "Mentés",

      },
      
  };
  