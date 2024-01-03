import { adatLeiro } from "../adatLeiro.js";
import NumberUrlapElem from "./NumberUrlapElem.js";
import TextUrlapElem from "./TextUrlapElem.js";
import DateUrlapElem from "./DateUrlapElem.js";


export default class UrlapView{
    #formAdat={};
    #inputElemObjektumokLista = [];

    constructor(szuloElem ){
        this.szuloElem=szuloElem
        szuloElem.append("<form>")
        this.formElem = szuloElem.find("form")
        this.htmlOsszerak()
        this.submitElem = this.formElem.find("#submit")
        this.titleElem = this.formElem.find("#title")
        this.dateElem = this.formElem.find("#date")
        this.priceElem = this.formElem.find("#price")

        this.submitElem.on("click", (event) => {
            event.preventDefault();
            
            this.#inputElemObjektumokLista.forEach(
                (elem) => {
                    this.#formAdat[elem.key]=elem.getValue();
                }
            )
            
            this.trigger("ujAdatHozzaAdasa")
            
           
        })




    }


    htmlOsszerak(){
       /*  végigmegyek az adatLeiro kulcain és létrehozom az egyes 
        beviteli mezőket        
        */

        let txt = "";
        for (const key in adatLeiro) {
           
            switch(adatLeiro[key].tipus){
                case "text": 
                this.#inputElemObjektumokLista.push(new TextUrlapElem(this.formElem, adatLeiro[key], key))
                   
                    break;
                case "number": 
                this.#inputElemObjektumokLista.push(new NumberUrlapElem(this.formElem, adatLeiro[key], key))
                    break;
                case "date": 
                this.#inputElemObjektumokLista.push(new DateUrlapElem(this.formElem, adatLeiro[key], key))
                    break;
                default:
                    break;
            }

        }

        txt += `<div class="mb-3 mt-3">
                    <input type="submit" id="submit" value="Küld">
                </div>`
        
        this.formElem.append(txt)

    }

    trigger(esemenyNev){
        const e = new CustomEvent(esemenyNev, {detail: this.#formAdat})
        window.dispatchEvent(e)
    }
}