const router = require("express").Router();
const upload = require("../upload");
const CartItem = require("../model/CartItem");
const Product = require("../model/Product");

router.post("/", upload.array("images", 3), async (req, res) => {
  try {
    var images = [];
    let product = await Product.findById(req.body._id);
    let cartItem = await CartItem.create({
      color: req.body.color,
      size: req.body.size,
      product,
      quantity: Number(req.body.quantity),
      neck: Number(req.body.neck),
      overBust: Number(req.body.overBust),
      bust: Number(req.body.bust),
      vNeckCut: Number(req.body.vNeckCut),
      wrist: Number(req.body.wrist),
      foreArm: Number(req.body.foreArm),
      bicep: Number(req.body.bicep),
      aboveKneeToAnkle: Number(req.body.aboveKneeToAnkle),
      armHole: Number(req.body.armHole),
      shoulderSeam: Number(req.body.shoulderSeam),
      armLength: Number(req.body.armLength),
      aboveKneeToAnkle: Number(req.body.aboveKneeToAnkle),
      neckToAboveHeel: Number(req.body.neckToAboveHeel),
      neckToHeel: Number(req.body.neckToHeel),
      hips: Number(req.body.hips),
      waist: Number(req.body.waist),
      underBust: Number(req.body.underBust),
      hip: Number(req.body.hip),
      waistToAboveKnee: Number(req.body.waistToAboveKnee),
      hip: Number(req.body.hip),
    });

    res.json({ message: "added item to cart", cartItem });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "internal server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    let cartItems = await CartItem.find({});
    res.json({ cartItems });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let cartItem = await CartItem.findByIdAndDelete(req.params.id);
    console.log(cartItem);
    res.json({ cartItem });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
