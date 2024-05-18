const { readFilePromise, writeFilePromise } = require("../helpers/fileHelper");
const path = require('path');
const { v4 } = require("uuid");

const databaseFile = path.join(__dirname, '..', 'data', 'slides.json');

const getSlides = async (req, res) => {
    await readFilePromise(databaseFile)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Error reading the file:', err})
        });
}

const addSlide = async (req,res) => {
    const newSlide = {...req.body, id: v4()};
    const slides = await readFilePromise(databaseFile);
    slides.push(newSlide);

    await writeFilePromise(databaseFile, slides)
        .then(() => {
            res.status(201).json(newSlide);
        })
        .catch(err => {
            res.status(500).json({message: 'Error when storing slide data:', err})
        });
}

const removeSlide = async (req,res) => {
    const slides = await readFilePromise(databaseFile);
    const index = slides.findIndex(slide => slide.id === req.params.id);
    slides.splice(index, 1);

    await writeFilePromise(databaseFile, slides)
        .then(() => {
            res.status(200).json({message: 'Slide deleted successfully!'});
        })
        .catch(err => {
            res.status(500).json({message: 'Error when deleting slide data:', err})
        });
}

const changeOrder = async (req,res) => {
    const slides = await readFilePromise(databaseFile);
    const index = slides.findIndex(slide => slide.id === req.params.id);
    slides[index].order = req.body.order;

    await writeFilePromise(databaseFile, slides)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Error when deleting slide data:', err})
        });
}

module.exports = { getSlides, addSlide, removeSlide, changeOrder }