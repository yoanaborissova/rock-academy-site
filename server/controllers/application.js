const Application = require('../models/Application');
const User = require('../models/User');

module.exports = {
    createApplication: (req, res) => {
        const applicationBody = req.body;

        applicationBody['instruments'] = applicationBody['instruments'].split(', ');

        Application.create(applicationBody)
            .then((application) => {
                res.status(200)
                    .json({
                        message: 'Application created successfully.',
                        application,
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
    getAllApplications: (req, res) => {
        Application.find()
        .then((applications) => {
            applications = applications.sort((a, b) => (b.date - a.date));
            res.status(200)
                .json({
                    message: 'Applications fetched successfully.',
                    applications,
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
    getUsersApplications: (req, res) => {
        Application.findById(req.params.id)
        .then((applications) => {
            res.status(200)
                .json({
                    message: 'Applications fetched successfully.',
                    applications,
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
    approveApplication: async (req, res) => {
        let applicationId = req.params.id;

        try {
            let application = await Application.findById(applicationId);

            application.status = 'Approved';

            await application.save();

            let user = await User.findById(application.user);

            user.status = 'Student';
            user.instruments = application.instruments;

            await user.save();

            res.status(200)
                .json({
                    message: 'Application approved, user given a student status.',
                    application,
                    user,
                })
        } catch (error) {
            res.status(500)
                .json({
                    message: 'Something went wrong.',
                    error
                })
        }
    },
    disapproveApplication: (req, res) => {
        const applicationId = req.params.id;

        Application.findById(applicationId)
            .then((application) => {
                application.status = 'Disapproved';

                application.save()
                    .then((application) => {
                        res.status(200)
                            .json({
                                message: 'Application disapproved.',
                                application
                            })
                    })
                    .catch((error) => {
                        res.status(500)
                            .json({
                                message: 'Something went wrong.',
                                error
                            })
                    })
            })
            .catch((error) => {
                res.status(500)
                    .json({
                        message: 'Something went wrong.',
                        error
                    })
            })
    }
}