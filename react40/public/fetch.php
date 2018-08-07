<?php
header("content:text/html;charset=utf-8");
$str='[
    [{"p_id":"1","p_type":"node","child":["a","b","c"]},
     {"p_id":"2","p_type":"js"}],
    [{"p_id":"3","p_type":"node","child":["d","e","f"]},
     {"p_id":"4","p_type":"ss"}]
    ]';
echo $str;
?>