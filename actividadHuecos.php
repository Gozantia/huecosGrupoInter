<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    die();
}


require_once 'db.class.php';
DB::$host = 'localhost';
DB::$user = 'interlla_grupo_i';
DB::$password = 'Problem4321';
DB::$dbName = 'interlla_grupo_inter';


function testpre($msg)
{
    echo "<pre style='background: #fefefe; color: black; padding: 1em; border: solid 1px #cccc'>";
    print_r($msg);
    echo "</pre>";
}

// //Include the wp-load.php file
// include('wp-load.php');
// //As this is external file, we aren't using the WP theme here. So setting this as false
// define('WP_USE_THEMES', false);
// //Optional, adding the WP blog header which will include the wordpress head in the file
// require('wp-blog-header.php');

$response = new stdClass();
if (isset($_REQUEST["save1"])) {
    $vars = $_POST;


    DB::insert('_huecos', [
        'nombre' => utf8_decode($_POST["nombre"]),
        'correo' => utf8_decode($_POST["correo"]),
        'celular' => utf8_decode($_POST["celular"]),
        'ingresado' => DB::sqleval("NOW()") // NOW() is evaluated by MySQL
    ]);
    $id = DB::insertId();

    $filename = $_FILES['file']['name'];
    $extension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
    $location = "fotos/" . $id . "." . $extension;
    $imageFileType = pathinfo($location, PATHINFO_EXTENSION);
    $imageFileType = strtolower($imageFileType);


    $valid_extensions = array("jpg", "jpeg", "png");

    /* Check file extension */
    if (in_array(strtolower($imageFileType), $valid_extensions)) {
        /* Upload file */
        if (move_uploaded_file($_FILES['file']['tmp_name'], $location)) {
            $response->location = $location;
            DB::update('_huecos', [
                'foto' => $location
            ], 'id=%s', $id);
        }
    }

    $response->info = $_POST;
    $response->file = $_FILES;
    $response->status = $id;

    header('Content-Type: application/json');
    echo json_encode($response);
}
if (isset($_REQUEST["save2"])) {
    DB::update('_huecos', [
        'ciudad' => utf8_decode($_POST["ciudad"]),
        'punto' => utf8_decode($_POST["punto"]),
        'fecha' => utf8_decode($_POST["fecha"])
    ], 'id=%s', $_POST["id"]);

    $counter = DB::affectedRows();
    $response->status = $counter;
    header('Content-Type: application/json');
    echo json_encode($response);
}
