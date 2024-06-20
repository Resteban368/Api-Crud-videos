<!doctype html >
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        @page {
            margin: 0cm 0cm;
        }
        .content {
            margin: 1cm 1cm;
        }

        /*@font-face {*/
        /*    font-family: 'montserratbold';*/
        /*    font-weight: normal;*/
        /*    font-style: normal;*/
        /*    font-variant: normal;*/
        /*    src: url("http://127.0.0.1:8000/fonts/montserrat-bolditalic-webfont.woff");*/
        /*}*/

        .footer .page-number:after {
            content: counter(page);
        }

        td, th {
            vertical-align: middle;
        }

        body {
            font-family: Poppins, Helvetica, sans-serif;
            font-size: 14px;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
        }

        #grad1 {
            height: 15px;
            background-color: #0066FF; /* For browsers that do not support gradients */
            background-image: linear-gradient(to right, #0066FF, #002060);
        }

        .last { page-break-after: always; }
        .last:last-child { page-break-after: auto; }
    </style>
    @yield('style')
    <link rel="stylesheet" href="{{public_path('css/bootstrap.min.css')}}">

    <title>{{env('APP_NAME')}}|Booking Request</title>

</head>
<body>
<div class="row" style="margin-bottom: 50px">
    <div class="last">
        <div class="row">
            <div class="col-12 content">
                <header>
                    <div class="header row" style="top: 0; font-size: 15px;">
                        <div style="float: left ; margin-left: -0.6cm">
                            <img
                                src="media/logos/Marguisa_negro.png"
                                alt="logo"
                                width="100%"
                                height="70"
                            />
                        </div>
                        <div style="float: right; margin-top: 30px; margin-right:-1cm; color: white; border-bottom: 2px solid #0066FF;">
                            ----------
                        </div>
                        <div style="float: right; margin-top: 30px; border-bottom: 2px solid #0066FF;">
                            {{env('APP_NAME')}} | {{date('Y')}}
                        </div>
                    </div>
                </header>
            </div>

            <div id="grad1" style="margin-top: 110px; height: 15px; border: none;"></div>

            {{--<div style="text-align: center">
                    @if(isset($title))
                        <p style="font-weight: bold; font-size: 25px;">{{$title}}</p>
                    @endif
            </div>--}}
        </div>
        @yield('user_and_booking')
        <div class="row">
            <div class="col-12">
                <footer>
                    <div class="footer text-center text-black" style="position: absolute ;float: right; bottom: 10px; right: 10px; font-size: 12px;">
                        <small class="text-black">
                            Solicitud generada por {{env('APP_NAME')}} el {{date('d/m/Y h:i A ')}}
                        </small>
                        <div class="text-black" style="text-align: right; margin-top: 10px; margin-right: 10px; color:#0066FF">
                            Página <span class="page-number" style="color: black"> </span> | 2
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
    <div>
        <div class="row">
            <div class="col-12 content">
                <header>
                    <div class="header row" style="top: 0; font-size: 15px;">
                        <div style="float: left ; margin-left: -0.6cm">
                            <img
                                src="media/logos/Marguisa_negro.png"
                                alt="logo"
                                width="100%"
                                height="70"
                            />
                        </div>
                        <div style="float: right; margin-top: 30px; margin-right:-1cm; color: white; border-bottom: 2px solid #0066FF;">
                            ----------
                        </div>
                        <div style="float: right; margin-top: 30px; border-bottom: 2px solid #0066FF;">
                            {{env('APP_NAME')}} | {{date('Y')}}
                        </div>
                    </div>
                </header>
            </div>

            <div id="grad1" style="margin-top: 110px; height: 15px; border: none;"></div>

            {{--<div style="text-align: center">
                    @if(isset($title))
                        <p style="font-weight: bold; font-size: 25px;">{{$title}}</p>
                    @endif
            </div>--}}
        </div>
        @yield('quotations')
        <div class="row">
            <div class="col-12">
                <footer>
                    <div class="footer text-center text-black" style="position: absolute ;float: right; bottom: 10px; right: 10px; font-size: 12px;">
                        <small class="text-black">
                            Solicitud generada por {{env('APP_NAME')}} el {{date('d/m/Y h:i A ')}}
                        </small>
                        <div class="text-black" style="text-align: right; margin-top: 10px; margin-right: 10px; color: #0066FF">
                            Página <span class="page-number" style="color: black"> </span> | 2
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</div>



@yield('scripts')
</body>
</html>
