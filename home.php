<?php $pageTitle = "Home"; ?>
<!DOCTYPE html>
<html lang="en">
<?php include 'head.php'; ?>

<body>
    <?php include 'header.php'; ?>    

    <!-- INTRODUCTION -->
    <section class="jumbotron text-center mb-0">
        <div class="container">
            <h1 class="page-title display-4">Welcome to My Blog</h1>
            <p class="lead text-muted">
                Thoughts, tutorials, and stories — all in one place.
            </p>
            <p>
                <a href="posts.php" class="btn btn-primary my-2">Read Posts</a>
                <a href="about.php" class="btn btn-secondary my-2">About Me</a>
            </p>
        </div>
    </section>


    <!---- RECENT POSTS -->
    <main class="container mt-5">
        <h2 class="mb-4">Recent Posts</h2>


        <div class="row">
        <div class="col-md-4">
        <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">First Blog Post</h5>
            <p class="card-text">Why I started this blog and what it’s about.</p>
            <a href="post1.php" class="btn btn-sm btn-outline-primary">Read More</a>
        </div>
        </div>
        </div>


        <div class="col-md-4">
        <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">Learning Web Development</h5>
            <p class="card-text">Lessons learned while building projects from scratch.</p>
            <a href="post2.php" class="btn btn-sm btn-outline-primary">Read More</a>
        </div>
        </div>
        </div>


        <div class="col-md-4">
        <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">Tools I Use</h5>
            <p class="card-text">My favorite tools for coding and writing.</p>
            <a href="post3.php" class="btn btn-sm btn-outline-primary">Read More</a>
        </div>
        </div>
        </div>
        </div>
    </main>

    <?php include "footer.php"?>
</body>


</html>

