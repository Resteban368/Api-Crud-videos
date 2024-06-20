<?php
return array(

    /*
	|--------------------------------------------------------------------------
	| Default FTP Connection Name
	|--------------------------------------------------------------------------
	|
	| Here you may specify which of the FTP connections below you wish
	| to use as your default connection for all ftp work.
	|
	*/

    'default' => 'connection1',

    /*
    |--------------------------------------------------------------------------
    | FTP Connections
    |--------------------------------------------------------------------------
    |
    | Here are each of the FTP connections setup for your application.
    |
    */

    'connections' => array(
        'connection1' => array(
            'host'   => 'ftp.3dboosterstudio.com',
            'port'  => 21,
            'username' => 'example@3dboosterstudio.com',
            'password'   => 'pS$Y7,aRSdfb',
            'passive'   => false,
            'secure' => false
        ),
    ),
);