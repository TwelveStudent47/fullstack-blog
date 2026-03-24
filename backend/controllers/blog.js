const Blog = require("../models/blog");

const APIHealth = (req, res) => {
    res.status(200).json({ health: "The API is healthy"} );
};

const getBlog = async (req, res) => {
    try {
        const queryObject = {};
        const { title, author } = req.query;

        if (title) {
            queryObject.title = { $regex: title, $options: "i" };
        }

        if (author) {
            queryObject.author = { $regex: author, $options: "i" };
        }

        const blogs = await Blog.find(queryObject);
        res.status(200).json({
            nbHits: blogs.length,
            blogs: blogs
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const postBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json({
            success: true,
            blog: blog
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            success: true,
            blog: blog
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            blog: blog
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { APIHealth, getBlog, postBlog, updateBlog, deleteBlog };