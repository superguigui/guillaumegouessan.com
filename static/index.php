<?php
  include_once 'php/vendor/vdaguenet/one-page-seo/BotDetector.php';

  $detector = new BotDetector();
  $detector->setServerOS($detector::LINUX);
  if($detector->isBot()) {
    $detector->displayStaticContent();
  }

  include('./index.html')
?>