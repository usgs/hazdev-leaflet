<?php
if (!isset($TEMPLATE)) {
  $TITLE = 'Legend Control Example';
  $HEAD = '<link rel="stylesheet" href="hazdev-leaflet.css"/>' .
      '<link rel="stylesheet" href="css/index.css" />';
  $FOOT = '<script src="hazdev-leaflet.js"></script>' .
      '<script src="Legend.js"></script>';
}
include '_example.inc.php';
?>

<div class="map"></div>
