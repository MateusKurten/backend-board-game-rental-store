const {collection, addDoc, getDocs, deleteDoc, doc} = require('firebase/firestore');
const {db} = require('../firebase');

const getGames = async (req, res) => {
    let r;
    await getDocs(collection(db, "games"))
        .then((querySnapshot) => {
            r = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        });
    res.status(200).json(r);
}

const addGame= (req,res)=>{
    // const department = req.body
    // departments.push(department.department)
    // res.status(200).json(departments)
    res.send('addGame')
}

const removeGame = (req,res)=>{
    // const department = req.body.department
    // const index = departments.findIndex((d)=>d===department)

    // if(index === -1)
    // {
    //     return res.status(404).json({message:'Game not found'})
    // }
    // departments.splice(index,1)
    // res.status(200).json({message:' Game Deleted'})  
    res.send('removeGame')
}

module.exports = {getGames,addGame,removeGame}