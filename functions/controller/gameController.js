const {collection, addDoc, getDoc, getDocs, deleteDoc, doc} = require('firebase/firestore');
const {db} = require('../firebase');
const {validateDataGame} = require("../model/gameModel");

const getGames = async (req, res) => {
    let r;
    await getDocs(collection(db, "games"))
        .then((querySnapshot) => {
            r = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        });
    res.status(200).json(r);
}

const addGame= async (req,res)=>{
    // const department = req.body
    // departments.push(department.department)
    // res.status(200).json(departments)
    const validR = validateDataGame(req.body);
    if (!validR.valid) {
        return res.status(400).json({message:'Invalid Data', errors: validR.errors})
    }

    const docRef = await addDoc(collection(db, "games"), req.body);
    const docSnap = await getDoc(docRef);
    res.status(200).json({ ...docSnap.data(), id: docSnap.id });
}

const removeGame = async (req,res)=>{
    const docRef = doc(db, 'games', req.params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        await deleteDoc(docRef)
            .then(res.status(200).json({message:'Game Deleted'}))
            .catch(err => res.status(500).json({message: err}));
    } else {
        res.status(404).json({message:'Game not found'})
    }
}

module.exports = {getGames,addGame,removeGame}