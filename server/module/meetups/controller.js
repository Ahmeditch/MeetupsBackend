import Meetup from './model';

export const createMeetup = async (req, res) => {
    const {title, description} = req.body;
    const newMeetUp = new Meetup({title, description});
    try {
        return res.status(201).json({
            error: false,
            meetup: await newMeetUp.save()
        });
    }catch(e) {
        return res.status(e.status).json({
            error: true,
            message: 'Error with meetup'
        });
    }
}

export const getAllMeetUps = async (req, res) => {
    try {
        return res.status(200).json({
            meetups: await Meetup.find({} )
        });
    }catch(e) {
        return res.status(e.status).json({
            error: true,
            message: 'Error with meetup'
        });
    }
}