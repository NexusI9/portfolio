<?php
    if(isset($_GET['n'])){ echo base64_decode($_GET['n']); }
    else{ echo ''; }
?>