<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class InspectorMiddleware
{
    /**
     * Handle an incoming request.
     * Ensures the user is authenticated AND has the 'inspector' role.
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if user is authenticated
        if (!Auth::check()) {
            return redirect()->route('login')->withErrors([
                'email' => 'Please log in to access this page.',
            ]);
        }

        // Check if user has inspector role
        if (Auth::user()->role !== 'inspector') {
            return redirect()->route('notAuthorized');
        }

        return $next($request);
    }
}
