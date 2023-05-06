
<?php

        // Takes raw data from the request
        $json = file_get_contents('php://input');

        // Converts it into a PHP object
        $data = json_decode($json);

        $content = $data->content;
        $email = $data->email;
        $name = $data->name;


        //clean Content 
        $content =  str_replace("\n.", "\n..",$content);
        $content =  wordwrap($content, 70, "\r\n");

        $to = "nassim@elkhantour.com";
        $subject = "[Contact Form] ".$name." (".$email.")";
        $headers = array(
            'From' => $email,
            'Reply-To' => $to,
            'X-Mailer' => 'PHP/' . phpversion()
        );

        if($content && $email && $name){

            $mail =  mail( $to, $subject, $content, $headers);

            if($mail){ echo "success"; }
            else{ echo "error while sending mail"; }

        }else{
            echo "error: missing data";
        }

?>