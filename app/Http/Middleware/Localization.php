<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ( $request->hasHeader('locale')
         && in_array($request->header('locale'), ['en', 'es'])
         && !App::isLocale($request->header('locale'))
         ) {
            App::setlocale($request->header('locale'));
        }
        else if (session()->has('locale') && !App::isLocale(session()->get('locale'))) {
            App::setlocale(session()->get('locale'));
        }

        return $next($request);
    }
}
