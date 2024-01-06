import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";


export default class  Controller{
    constructor(){
        this.dataService=new DataService();
        //modell példányosítása, aszinkrom módon éri el az adatokat

        this.dataService.getData("api/artists", this.megjelenit)
        //ez egy callback függvény()


        //feliratkozunk az ablaknak a sortörlés eseméynére
        $(window).on("sorTorles",  (e) => {
            //console.log(e.detail)
            this.dataService.deleteData("api/artists", e.detail.artist_id, this.hibaCallback, this.frissit)
        })



        $(window).on("ujAdatHozzaAdasa", (e)=>{
           this.dataService.postData(e.detail,"api/artists", ()=>this.megjelenit, this.frissit )
        })



        $(window).on("sorMentes", (e)=>{
             this.dataService.putData("api/artists", e.detail.artist_id, e.detail,this.hibaCallback, this.frissit)
         })
        
    }



    frissit(){
        location.reload();

    }

    hibaCallback(err){
        console.log(err)
        //példányosítás, a viewban van az eredeti olsztály


    }

    megjelenit(list){
        //példányosítjuk a view-t Táblázatot
        //console.log(list)
        $(".adatok").html("<table class='table table-striped'><thead></thead><tbody></tbody></table>")
        new TablaView(list, $("table"))
        

    }
}