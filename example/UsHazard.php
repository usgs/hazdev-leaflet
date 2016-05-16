<?php
if (!isset($TEMPLATE)) {
  $TITLE = 'US Hazard Layer Example';
  $HEAD = '<link rel="stylesheet" href="hazdev-leaflet.css"/>' .
      '<link rel="stylesheet" href="css/index.css" />';
  $FOOT = '<script src="hazdev-leaflet.js"></script>' .
      '<script src="USHazard.js"></script>';
}
include '_example.inc.php';
?>

<div class="map"></div>
