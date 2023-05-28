
<?php

        // Takes raw data from the request
        $json = file_get_contents('php://input');

        // Converts it into a PHP object
        $data = json_decode($json);

        $content = $data->content;
        $from = $data->email;
        $name = $data->name;
        $to = "nassim@elkhantour.com";

        //clean Content 
        $content =  str_replace("\n.", "\n..",$content);
        $content =  wordwrap($content, 70, "\r\n");


        $encoding = "utf-8";
        $subject = "Incoming message from:". $name;

        $subject_preferences = array(
            "input-charset" => $encoding,
            "output-charset" => $encoding,
            "line-length" => 76,
            "line-break-chars" => "\r\n"
        );


        $headers = "From: ".$from." <".$from."> \r\n";
        $headers .= "Reply-To:".$to."\r\n";
        $headers .= "Return-Path:".$to."\r\n";
        $headers .= "MIME-Version: 1.0 \r\n";
        $headers .= "Content-Transfer-Encoding: 8bit \r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= "Date: ".date("r (T)")." \r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        $headers .= iconv_mime_encode("Subject", $subject, $subject_preferences);


        if($content && $from && $name){

            $mail =  mail( $to, $subject, $content, $headers);

            if($mail){ echo "success"; }
            else{ echo "error while sending mail"; }

        }else{
            echo "error: missing data";
        }

?>