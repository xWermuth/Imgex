const router = require("express").Router();
const photosController = require("../controllers/photosController");
const verifyToken = require("../middleware/verifyToken");

router.post("/", verifyToken, photosController.create);
router.get("/:photoId", verifyToken, photosController.show);
router.get("/", verifyToken, photosController.index);
router.put("/updateName", verifyToken, photosController.updateName);
router.put("/order", verifyToken, photosController.updatePhotos);
router.delete("/:photoId", verifyToken, photosController.destroy);

module.exports = router;
