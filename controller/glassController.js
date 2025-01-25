import Beard from "../model/beardModel.js";
import Hair from "../model/hairModel.js";

const glassController = async (req, res) => {
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

const hairController = async (req, res) => {
  const { faceshape, gender, Hairstyle, description } = req.body;
  const image = req.file.filename;

  console.log(req.body);

  await Hair.create({
    faceshape,
    gender,
    image,
    Hairstyle,
    description,
  });

  res.status(200).json({
    message: "hair  done",
  });
};




export default glassController;
