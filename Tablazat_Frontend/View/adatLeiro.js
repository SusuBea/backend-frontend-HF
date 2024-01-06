export const adatLeiro= {
sorszam:{
  megjelenes: "No."
},

title: { 
    megjelenes: "Title",
    tipus: "text",
    placeholder: "Cím",
    pattern: "[A-Z][a-z]{3}",
    value: "Title",
    szoveg: "Legalább 3 betű, a címnek nagybetűvel kell kezdődnie!",
    required: true
  },

    date: { 
      megjelenes: "Date",
      tipus: "date",
      placeholder: "Dátum",
      pattern: "",
      value: "2023-01-01",
      szoveg: "",
      required: true,
    },

      price: { 
        megjelenes: "Price",
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
  