export default class DateUrlapElem{
    constructor(szuloElem, obj, key){
        this.szuloElem = szuloElem;
        this.key = key;
        this.obj = obj;
        this.DateUrlapElem();
        this.inputElem=$(`#${this.key}`)

    }

    getValue(){

        return this.inputElem.val()
    }

    DateUrlapElem(obj, key){
        let txt ="";
            txt += `<div class="mb-3 mt-3">
                 <label for="${this.key}" class="form-label">${this.obj.megjelenes}</label>
                 <input type="${this.obj.tipus}" class="form-control" 
                 id="${this.key}"
                 placeholder="${this.obj.placeholder}"
                 pattern="${this.obj.pattern}"
                 value="${this.obj.value}"
                 name="${this.key}">
             </div>`
             this.szuloElem.append(txt);


    }




}