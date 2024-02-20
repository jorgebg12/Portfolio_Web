@extends('layout')


@section('event')

        <div class="event_card full">

            <h1>{{$event->title}}</h1>

            <p>{{ "Fecha: " . $event->event_date}}</p>

            <p>{{ "Ubicación: " . $event->location}}</p>

            <p>{{ $event->description}}</p>

            <img src={{asset($event->image_url)}} alt="Imagen relacionada con el evento">

            <p>{{ $event->autor}}</p>
            
        </div>

@endsection