/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new blog post
 *     description: Used to create a new blog post with title, content, and an optional image.
 *     tags:
 *       - Blog Posts
 *     parameters:
 *       - in: formData
 *         name: title
 *         required: true
 *         description: Title of the post
 *         type: string
 *       - in: formData
 *         name: content
 *         required: true
 *         description: Content of the post
 *         type: string
 *       - in: formData
 *         name: image
 *         required: false
 *         description: Image file for the post (optional)
 *         type: file
 *     responses:
 *       '201':
 *         description: Post created successfully

 *       '400':
 *         description: Bad request or missing required fields
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all blog posts
 *     description: Retrieve all blog posts with pagination support.
 *     tags:
 *       - Blog Posts
 *     parameters:
 *       - in: query
 *         name: page
 *         description: Page number
 *         type: integer
 *       - in: query
 *         name: limit
 *         description: Number of items per page
 *         type: integer
 *     responses:
 *       '200':
 *         description: Retrieved all blog posts successfully
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get a blog post by ID
 *     description: Retrieve a blog post by its ID.
 *     tags:
 *       - Blog Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the blog post
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *         description: Retrieved the blog post successfully
 *       '404':
 *         description: Blog post not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Update a blog post by ID
 *     description: Update the content of a blog post by its ID.
 *     tags:
 *       - Blog Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the blog post
 *         required: true
 *         type: string
 *       - in: body
 *         name: UserCredentials
 *         description: User credentials for createuser
 *         schema:
 *           type: object
 *           required:
 *             - title
 *             - content
 *           properties:
 *             title:
 *               type: string
 *               example: New Title
 *             content:
 *               type: string
 *               example: this is a sample content about this title
 *     responses:
 *       '200':
 *         description: Updated the blog post successfully
 *       '403':
 *         description: Not authorized to update the blog post
 *       '404':
 *         description: Blog post not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete a blog post by ID
 *     description: Delete a blog post by its ID.
 *     tags:
 *       - Blog Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the blog post
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *         description: Deleted the blog post successfully
 *       '403':
 *         description: Not authorized to delete the blog post
 *       '404':
 *         description: Blog post not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/posts/comment/{postId}:
 *   post:
 *     summary: Add a comment to a blog post
 *     description: Add a new comment to a blog post by its ID.
 *     tags:
 *       - Blog Posts
*     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the blog post
 *         required: true
 *         type: string
 *       - in: body
 *         name: Comments
 *         description: adding comments for blog
 *         schema:
 *           type: object
 *           required:
 *             - content
 *           properties:
 *             content:
 *               type: string
 *               example: this is a sample comment about this title
 *     responses:
 *       '201':
 *         description: Added the comment successfully
 *       '500':
 *         description: Internal server error
 */

