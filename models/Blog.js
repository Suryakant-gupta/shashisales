const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    bannerImage: { type: String, required: true },
    content: [{
        heading: String,
        paragraph: String,
        image: String
    }],
    metaTitle: { type: String, required: true },
    canonical: { type: String, required: true },
    contentText: { type: String, required: true },
    metaDescription: { type: String, required: true },
    metaKeywords: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;