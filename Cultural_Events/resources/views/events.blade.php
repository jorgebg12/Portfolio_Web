@extends('layout')


@section('event')

    @foreach ($events as $event)

        <div class="event_card">

            <h1><a href="events/{{$event->id}}">{{$event->title}}</a></h1>

            <p>{{ "Fecha: " . $event->event_date}}</p>

            <img src={{asset($event->image_url)}} alt="Imagen relacionada con el evento">

        </div>
    @endforeach

@endsection