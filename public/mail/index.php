
<?php

    if(isset($_POST("content")) && isset($_POST("email")) && isset($_POST("name"))){

        $content = $_POST("content");
        $email = $_POST("email");
        $name = $_POST("name");

        $mailAdress = "nassim@elkhantour.com";
        $subject = "[Contact Form] ".$name." (".$email.")";
        echo $subject;
        echo $content;

    }

?>