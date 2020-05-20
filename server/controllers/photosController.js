const User = require("../models/user")

module.exports = {
  async show(req, res) {
    const userId = req.user._id
    const { photoId } = req.params
    console.log(photoId)
    try {
      const user = await User.findById(userId)
      // const photo = user.photos.filter((photo) => {
      //   return photo._id != photoId;
      // })[0];

      let temp
      user.photos.forEach(photo => {
        if (photo._id == photoId) {
          temp = photo
        }
      })

      res.send(temp)
    } catch (error) {
      res.status(400).send(error.message)
    }
  },
  async index(req, res) {
    const userId = req.user._id
    try {
      const user = await User.findById(userId)
      res.send(user.photos)
    } catch (error) {
      res.status(400).send({ error: err.message })
    }
  },
  async create(req, res) {
    const userId = req.user._id
    const { url, name, discription } = req.body
    console.log("name", name)
    console.log("url", url)
    console.log("discription", discription)
    try {
      const user = await User.findById(userId)
      user.photos.push({ url, name, discription })
      await user.save()
      res.send({ message: "Picture saved Successfully" })
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  },
  async updateName(req, res) {
    const userId = req.user._id
    // const { photoId } = req.params;
    const { name, discription, photoId } = req.body
    try {
      const user = await User.findById(userId)

      console.log("REQ", req.body)
      user.photos = user.photos.map(photo => {
        if (photo._id == photoId) {
          photo.name = name
          photo.discription = discription
        }
        return photo
      })
      await user.save()
      res.send({ message: "Photo updated successfully" })
    } catch (err) {
      res.status(400).send({ error: error.message })
    }
  },
  async destroy(req, res) {
    const userId = req.user._id
    const { photoId } = req.params
    console.log("user id ", userId)
    console.log("photo id", photoId)
    try {
      const user = await User.findById(userId)
      console.log("user", user)
      user.photos.pull({ _id: photoId })
      await user.save()
      res.send({ message: "photo successfully deleted" })
    } catch (error) {
      console.log(error)
      res.status(400).send({ error: error.message })
    }
  },
  async updatePhotos(req, res) {
    const userId = req.user._id
    const { photos } = req.body
    try {
      const user = await User.findById(userId)
      user.photos = photos
      await user.save()
      res.send({ message: "photo successfully updated" })
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  },
}
