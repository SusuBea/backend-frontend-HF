<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function index(){
        $artists = response()->json(Artist::all());
        return $artists;
    }

    public function show($id){
        $artist = response()->json(Artist::find($id));
        return $artist;
    }

    public function store(Request $request){
        $artist = new Artist();
        $artist->title = $request->title;
        $artist->date = $request->date;
        $artist->price = $request->price; 
        $artist->save();
    }

    public function update(Request $request, $id){
        $artist = Artist::find($id);
        $artist->title = $request->title;
        $artist->date = $request->date;
        $artist->price = $request->price;
        $artist->save();
    }

    public function destroy($id){
        $artist = Artist::find($id);       
         $artist->delete();
    }
}
