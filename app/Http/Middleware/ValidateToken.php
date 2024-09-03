<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\Sanctum;
use Laravel\Sanctum\PersonalAccessToken;
use App\Models\User;

class ValidateToken
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
        // Access the token from the query parameter
        $token = $request->query('token');
        $admin = User::where('token', $token)
            ->where('user_type', 'admin')
            ->first();

        if ($admin) {
            $request->admin = $admin;
            return $next($request);
        } else {
            return redirect()->route('access.denied');
        }
    }
}
