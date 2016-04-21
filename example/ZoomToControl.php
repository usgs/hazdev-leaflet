<?php

  if (!isset($TEMPLATE)) {
    $TITLE = 'Example for ZoomTo Control';
    $HEAD = '
      <link rel="stylesheet" href="hazdev-leaflet.css"/>
      <link rel="stylesheet" href="css/index.css"/>
      <link rel="stylesheet" href="hazdev-leaflet.css"/>
    ';
    $FOOT = '
      <script src="lib/leaflet-0.7.7/leaflet.js"></script>
      <script src="hazdev-leaflet.js"></script>
      <script src="ZoomToControl.js"></script>
    ';
  }
  include '_example.inc.php';

?>

<div class="map"></div>
