const { where, collection, getDocs, query } = require('firebase/firestore');
const { db } = require("../firebase")

async function adminMiddleware(req, res, next) {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where("uid", "==", req.body.userId));

    getDocs(q)
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
                res.status(403).json({message: "User unknown"})
            } else {
                console.log("Autenticou!");
                next();
            }
        });
}

module.exports = { adminMiddleware }