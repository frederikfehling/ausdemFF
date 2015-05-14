<!DOCTYPE html>

<html lang="de">

  <head>

    <meta charset="utf-8">

    <title><?php echo $site->title() ?></title>

  </head>

  <body>

    <main class="main" role="main">

        <h1><?php echo $page->title()->html() ?></h1>

        <p><?php echo $page->text()->kirbytext() ?></p>

    </main>

  </body>

</html>