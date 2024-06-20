<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RegistrationMail extends Mailable
{
    use Queueable, SerializesModels;

	private $text_subject;
	private $text_body;
	private $credentials;
	private $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($text_subject = 'Solicitud aprobada', $text_body = '', $credentials = [], $user = '')
    {
        if ($credentials != []){
            $this->credentials = $credentials;
        }
        $this->text_subject = $text_subject;
        if(!empty($text_body)){
			$this->text_body = $text_body;
		}
        if(!empty($user)){
			$this->user = $user;
		}
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject($this->text_subject)->markdown('registrationmail',['text_body' => $this->text_body, 'credenciales' => $this->credentials, 'user' => $this->user]);
    }
}
