const homeController = (req, res) => {
  res.status(200).json({
    message: [
      "oi daley yehai ho la hanne thau . pakh ma talai vanxu k garne ho.",
      "1./enter/glass  hanyo vaney glass ko detail hannu parxa , data base ma gaeyra basxa, ra yo post request ho ",
      "2./enter/beard ra /enter/hair testai ho",
      "3. get request hai ta , /api/users?faceshape=oval&gender=male  yesma chai mailey query use gareko xu ki hai tailey maalai faceshape ra gender ko value pathauxas through query ,maile tyo query bata filter garera database ma vako details haru pathauxu sabbai . ",
      "4.http://localhost:3000/api/users/67905248d53100f5850c355e?box=glass    yesma chai taile kun box ma thicheko hos like glass wala box ho ki, beard wala box ho ki, hair wala box ho ki, tesko id ra box value pathauxas ani tesbata ma single data ko sab description pathauxu ",
    ],
  });
};
export default homeController;
