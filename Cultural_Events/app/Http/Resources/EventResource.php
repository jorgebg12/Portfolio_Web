<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'event_date'=>$this->event_date,
            'location'=>$this->when($request->is('api/evento/*'),$this->location),
            'description'=>$this->when($request->is('api/evento/*'),$this->description),
            'image_url'=>$this->when($request->is('api/evento/*'),$this->image_url),
            'autor'=>$this->when($request->is('api/evento/*'),$this->autor)
        ];
    }
}
