import { db } from "../infra/db.js";

export const getUsers = (req, res) => {
    const queryString = "select * from usuarios";

    db.query(queryString, (err, data) => {
        if(err) return res.json((err));

        return res.status(200).json(data);
    });
};