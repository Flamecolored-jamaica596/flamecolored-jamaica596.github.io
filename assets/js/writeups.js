async function loadProjects() {

    try {

        const response = await fetch("assets/data/posts.json");

        if (!response.ok) {
            throw new Error("Unable to load posts.json");
        }


        const posts = await response.json();


        const projects = posts.filter(post =>
            post.type === "writeup"
        );


        projects.forEach(project => {


            const card = createPostCard(project);


            switch(project.category) {


                case "ctf":

                    document.getElementById(
                        "minecraft-projects"
                    ).innerHTML += card;

                    break;



                case "bug-bounty":

                    document.getElementById(
                        "unity-projects"
                    ).innerHTML += card;

                    break;

            }

        });


    } catch(err) {

        console.error(err);

    }

}


document.addEventListener(
    "DOMContentLoaded",
    loadProjects
);
