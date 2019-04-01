const Band = require('../models/Band');
const User = require('../models/User');

module.exports = {
  getBands: (req, res) => {
    Band.find()
      .then((bands) => {
        let resBands = bands.sort((a, b) => b.date - a.date)
        res
          .status(200)
          .json({
            message: 'Fetched bands successfully.',
            resBands
          });
      })
      .catch((error, res) => {
        res.status(500)
          .json({
            message: 'Something went wrong.',
            error
          })
      });
  },
  createBand: (req, res) => {
    const bandObj = req.body;
    Band.create(bandObj)
      .then((band) => {
        res.status(200)
          .json({
            message: 'Band created successfully!',
            band
          })
      })
      .catch((error) => {
        res.status(500)
          .json({
            message: 'Something went wrong.',
            error
          })
      });
  },
  bandDetails: (req, res) => {
    const bandId = req.params.id;

    Band.findById(bandId).populate('members')
      .then((band) => {
        res.status(200)
          .json({
            message: 'Band fetched successfully!',
            band
          })
      })
      .catch((error) => {
        res.status(500)
          .json({
            message: 'Something went wrong.',
            error
          })
      });
  },
  editBand: (req, res) => {
    const bandId = req.params.id;

    Band.findById(bandId)
      .then((band) => {
        band.name = req.body.name;
        band.description = req.body.description;
        band.imageUrl = req.body.imageUrl;

        band.save()
          .then(() => {
            res.status(200)
              .json({
                message: 'Band edited successfully.',
                band,
              })
          })
      })
      .catch((error) => {
        res.status(500)
          .json({
            message: 'Something went wrong.',
            error
          })
      });
  },
  addMember: async (req, res) => {
    const bandId = req.params.id;

    try {
    let band = await Band.findById(bandId)

    band.members.push(req.body.member);

    await band.save()

    let user = await User.findById(req.body.member)

    user.bands.push(bandId);
    user.status = 'Musician';

    await user.save();

    res.status(200)
      .json({
        message: 'Member added successfully.',
        band
      })
    } catch(error) {
      res.status(500)
          .json({
            message: 'Something went wrong.',
            error
          })
    }
  },
  removeMember: async (req, res) => {
    const bandId = req.params.id;

    try {
    let band = await Band.findById(bandId);

    band.members = band.members.filter(function(ele){
      return ele != req.body.member;
    });

    await band.save()

    let user = await User.findById(req.body.member)

    user.bands = user.bands.filter(function(ele){
      return ele != bandId;
    });

    await user.save()

    res.status(200)
      .json({
        message: 'Member removed successfully.',
        band
      })
    } catch(error) {
      console.log(error);
      res.status(500)
          .json({
            message: 'Something went wrong.',
            error
          })
    }
  },
  deleteBand: async (req, res) => {
    const bandId = req.params.id;

    try{
    await Band.findByIdAndDelete(bandId)
      
    let user = await User.find({bands: {$in: [bandId]}})

    user.bands = user.bands.filter(function(ele){
      return ele != bandId;
    });

    await user.save();

    res.status(200)
      .json({
        message: 'Band deleted successfully.',
        band
      })
    } catch(error) {
      res.status(500)
          .json({
            message: 'Something went wrong.',
            error
          })
    }
  }
}