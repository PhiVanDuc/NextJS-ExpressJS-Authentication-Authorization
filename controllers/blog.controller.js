module.exports = {
    getBlogs: async (req, res) => {
        try {
            const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_per_page=10");
            const posts = await postsResponse.json();

            const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos?_page=1&_per_page=10");
            const photos = await photosResponse.json();

            return res.status(200).json({
                success: true,
                blogs: {
                    posts,
                    photos
                }
            });
        }
        catch(error) {
            console.log(error);
            return res.status(500).json(
                {
                    status: false,
                    message: error.message
                }
            )
        }
    }
}