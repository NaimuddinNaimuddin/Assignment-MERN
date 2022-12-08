const user = require('../models/user')
const userModel = require('../models/user')


module.exports.addUser = async (req, res) => {
    try {
        const name = req.body.name
        const image = req.file.path
        const mobile = req.body.mobile

        if (!name || !image || !mobile) {
            return res.send({ code: 400, message: 'Bad Request' })
        }
        const newUser = new userModel({ name, image, mobile })
        const response = await newUser.save()
        if (response) {
            return res.send({ code: 200, message: 'User Added Success' })
        }
    } catch (err) {
        return res.send({ code: 500, message: 'Server Error' })
    }
}

module.exports.getUser = async (req, res) => {
    try {
        const _userId = req.params.id
        const _data = await userModel.findOne({ _id: _userId })
        res.send({ code: 200, message: 'Find Success', data: _data })
    } catch (err) {
        res.send({ code: 500, message: 'Server Error' })
    }
}

module.exports.getUsers = async (req, res) => {
    try {
        const _data = await userModel.find({})
        res.send({ code: 200, message: 'Find Success', data: _data })
    } catch (err) {
        res.send({ code: 500, message: 'Server Error' })
    }
}

module.exports.editUser = async (req, res) => {
    try {
        const id = req.params.id
        console.log(req.body, req.file, id, "45")
        let _data = {}
        if (req.body.name) {
            _data["name"] = req.body.name
        }
        if (req.body.mobile) {
            _data["mobile"] = req.body.mobile
        }
        if (req.file && req.file.path) {
            _data["image"] = req.file.path
        }
        console.log(_data, "57")
        const response = await userModel.findByIdAndUpdate(id, _data, { new: true })
        if (response) {
            res.send({ code: 200, message: 'Edit user success', data: response })
        }
    } catch (err) {
        console.log(err)
        res.send({ code: 500, message: 'Server Error' })
    }
}
module.exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const response = await userModel.deleteOne({ _id: id })
        if (response) {
            res.send({ code: 200, message: 'Delete User Success' })
        }
    } catch (err) {
        res.send({ code: 500, message: 'Server Error' })
    }
}