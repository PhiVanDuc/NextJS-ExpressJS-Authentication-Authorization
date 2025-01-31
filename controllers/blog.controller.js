module.exports = {
    getBlogs: async (req, res) => {
        try {
            const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_per_page=10");
            const posts = await postsResponse.json();

            return res.status(200).json({
                success: true,
                message: "Thàng công lấy ra postes (protected)",
                data: { posts },
            });
        }
        catch(error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    },

    getBlogs2: async (req, res) => {
        try {
            const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_per_page=10");
            const posts = await postsResponse.json();

            return res.status(200).json({
                success: true,
                message: "Thàng công lấy ra postes (protected)",
                data: { posts },
            });
        }
        catch(error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    },

    getBlogs3: async (req, res) => {
        try {
            const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_per_page=10");
            const posts = await postsResponse.json();

            return res.status(200).json({
                success: true,
                message: "Thàng công lấy ra postes (protected)",
                data: { posts },
            });
        }
        catch(error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    },

    getBlogs4: async (req, res) => {
        try {
            const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_per_page=10");
            const posts = await postsResponse.json();

            return res.status(200).json({
                success: true,
                message: "Thàng công lấy ra postes (protected)",
                data: { posts },
            });
        }
        catch(error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    },

    getBlogs5: async (req, res) => {
        try {
            const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_per_page=10");
            const posts = await postsResponse.json();

            return res.status(200).json({
                success: true,
                message: "Thàng công lấy ra postes (protected)",
                data: { posts },
            });
        }
        catch(error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    },
}