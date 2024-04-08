/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     description: Used to create a new user based on username
 *     tags:
 *       - User Management
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - in: body
 *         name: UserCredentials
 *         description: User credentials for createuser
 *         schema:
 *           type: object
 *           required:
 *             - username
 *             - password
 *           properties:
 *             username:
 *               type: string
 *               example: hari
 *             password:
 *               type: string
 *               example: 123456
 *     responses:
 *       '201':
 *         description: User registered successfully.
 *       '500':
 *         description: Internal server error.
 *       '400':
 *         description: user already exists or bad request.
 */


/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: login User
 *     description: User login using username and Password
 *     tags:
 *       - User Management
 *     parameters:
 *       - in: body
 *         name: UserCredentials
 *         description: User credentials for sign-in
 *         schema:
 *           type: object
 *           required:
 *             - username
 *             - password
 *           properties:
 *             username:
 *               type: string
 *               example: user1234
 *             password:
 *               type: string
 *               example: 12345678
 *     responses:
 *       '200':
 *         description: User successfully signed in.
 *         content:
 *           application/json:
 *             example:
 *               message: User signed in successfully.
 *               role: user_role
 *               token: jwt_token_here
 *       '400':
 *         description: Bad request. Invalid credentials or missing data.
 *         content:
 *           application/json:
 *             example:
 *               errors: ['Invalid credentials.']
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: Internal server error.
 */
