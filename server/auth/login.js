const express = require('express');
const Router = express.Router();
const { body, validationResult } = require('express-validator');
Router.post("/signup",
    [
        body('name', 'Name is too short').isLength({ min: 3 }),
        body('email', 'Invalid email').isEmail(),
        body('pass', 'Password is too short').isLength({ min: 5 }),
        body('cpass', 'Confirm Password is too short').isLength({ min: 5 })
    ],
    (req, res) => {
        const { name, email, pass, cpass } = req.body;
        if (!name || !email || !pass || !cpass) {
            return res.status(400).json({ errors: [{ msg: "Please fill all the required fields" }] });
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            if (pass !== cpass) {
                return res.status(400).json({ errors: [{ msg: "Password and Confirm Password must be same " }] });
            }
            return res.status(200).json({ success: "Welcome" })
        } catch (error) {
            return res.status(500).json({ error: "Internal server error!" })
        }

    });
module.exports = Router;