export default class SorView {
  #obj = {};

  constructor(index, obj, szuloElem) {
    this.#obj = obj;

    this.index = index;
    this.szuloElem = szuloElem;
 
    this.sorElem = this.szuloElem.find("tr:last");
    //console.log(this.sorElem)
    this.artistIdElem = this.sorElem.find(".artist_id");
    this.titleElem = this.sorElem.find(".title");
    this.DateElem = this.sorElem.find(".date");
    this.priceElem = this.sorElem.find(".price");

    this.htmlOsszerak();

    //megfogjuk a törlés és mentés gombot
    this.torlesElem = this.szuloElem.find(".torles:last");
    this.mentesElem = this.sorElem.children("td").children(".mentes");
    //console.log(this.mentesElem)


    this.torlesElem.on("click", () => {
      this.trigger("sorTorles");
    });


    this.mentesElem.on("click", (event) => {
      
      //console.log(this.#obj);
      //console.log(this.sorElem[0]);
      let list2 =  [];
      let list1 = ['artist_id', 'title', 'date', 'price'];
      list2.push(
        this.artistIdElem[0].innerText,
        this.titleElem[0].innerText,
        this.DateElem[0].innerText,
        this.priceElem[0].innerText
      );

      this.#obj = toObject(list1, list2);
      this.trigger("sorMentes", this.#obj);

    });

    function toObject(list1, list2){
     const obj = {};
     list1.forEach( (element, index) => {obj[element] = list2[index]} )
     console.log(obj)
     return obj;
  
    }


  }


  trigger(e){
    //korábban this.index ,amig nincs api végpont
    const esemenyem = new CustomEvent(e, { detail: this.#obj });
    //console.log(esemenyem)
    window.dispatchEvent(esemenyem);
  }

  htmlOsszerak(){
    let txt = "<tr class='sorok'>";
    for (const key in this.#obj) {
      //console.log(key)
      txt += `<td contenteditable="true" class="${key}">${this.#obj[key]}</td>`;
    }

    txt += `<td><button class="torles"> Törlés 🗑 </button></td><td><button class="mentes"> Mentés ✅ </button></td>`;
    txt += "</tr>";
    //Törlés 🗑

    this.szuloElem.append(txt);
  }

}




