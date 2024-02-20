<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function showOneEvent(string $id){

        $event=Event::findOrFail($id);
        return new EventResource($event);
     }
    public function showPageEvents(string $page){
        
        $allEvents = Event::all();
        
        if($page <0 || ($allEvents->count()/10)<$page){
            $events=$allEvents->take(10);
        }else{
            $events=$allEvents->skip(($page-1)*10)->take(10);
        }

        return EventResource::collection($events);
    }
}
