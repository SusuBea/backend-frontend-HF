<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;

    protected $primaryKey= 'artist_id';

    protected $fillable = [
        'title',
        'date',
        'price',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
