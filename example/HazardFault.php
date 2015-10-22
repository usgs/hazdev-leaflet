<?php
if (!isset($TEMPLATE)) {
  $TITLE = 'HazardFault Layer Example';
  $HEAD = '<link rel="stylesheet" href="hazdev-leaflet.css"/>' .
      '<link rel="stylesheet" href="css/index.css" />';
  $FOOT = '<script src="hazdev-leaflet.js"></script>' .
      '<script src="HazardFault.js"></script>';
}
include '_example.inc.php';
?>

<div class="map"></div>
