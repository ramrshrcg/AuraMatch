import Beard from "../model/beardModel.js";
import Glass from "../model/glassModel.js";
import Hair from "../model/hairModel.js";

const getstyleController = async (req, res) => {
  const { faceshape, gender } = req.query;
  console.log(req.query);

  let query = {};
  if (faceshape) {
    query.faceshape = faceshape;
  }
  if (gender) {
    query.gender = gender;
  }

  const filteredBread = await Beard.find(query);
  const filteredGlass = await Glass.find(query);
  const filteredHair = await Hair.find(query);

  const breadlength = filteredBread.length;
  const glasslength = filteredGlass.length;
  const hairlength = filteredHair.length;
  const totalLength = breadlength + glasslength + hairlength;

  res.status(200).json({
    totalLength,
    breadlength,
    filteredBread,
    glasslength,
    filteredGlass,
    hairlength,
    filteredHair,
  });
};

export default getstyleController;
