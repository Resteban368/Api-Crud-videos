@component('mail::message')

{{$text_body}}

@if(!isset($credenciales) && !isset($user))
    
        Atentamente, Dpt. Comercial MARGUISA
    
@endif

@if(isset($credenciales))
  
        Este es su email de acceso:
        {{$credenciales['email']}}
   
    
        Esta es su nueva contraseña de acceso:
        {{$credenciales['pass']}}
    
@endif

@if(isset($user))
   
        Nombre: {{$user->name}} {{$user->lastname}}
       
        @if($user->is_company == 0)
          
        NIF: {{$user->nif}}
            
        @endif
        @if($user->is_company == 1)
            
        CIF: {{$user->cif}}
          
        Persona de Contacto: {{$user->contact_name}}
            
        @endif
      
        Correo: {{$user->email}}
       
        Teléfono: {{$user->phone}}
       
        Dirección: {{$user->address}}
        
        Cod. postal: {$user->zip}}
        
        Ciudad: {{$user->city}}
        
        País: {{$user->country}}
       

@endif


<CENTER>
<img src="https://www.marguisa.com/public/img/css/portal/logo.png" style="width:30%" alt="App Logo">



</CENTER>
@endcomponent