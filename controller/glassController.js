import Beard from "../model/beardModel.js";
import Glass from "../model/glassModel.js";
import Hair from "../model/hairModel.js";

const glassController = async (req, res) => {
  const { faceshape, gender, glassstyle, description } = req.body;
  const image = req.file.filename;

  console.log(req.body);

  await Glass.create({
    faceshape,
    gender,
    image,
    glassstyle,
    description,
  });

  res.status(200).json({
    message: "glass  done",
  });
};

const hairController = async (req, res) => {
  const { faceshape, gender, hairstyle, description } = req.body;
  const image = req.file.filename;

  console.log(req.body);

  await Hair.create({
    faceshape,
    gender,
    image,
    hairstyle,
    description,
  });

  res.status(200).json({
    message: "hair  done",
  });
};

const beardController = async (req, res) => {
  const { faceshape, gender, beardstyle, description } = req.body;
  const image = req.file.filename;

  console.log(req.body);

  await Beard.create({
    faceshape,
    gender,
    image,
    beardstyle,
    description,
  });

  res.status(200).json({
    message: "beard  done",
  });
};




export  {glassController, beardController, hairController};
