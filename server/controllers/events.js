const Event = require('../modelss/Event')

exports.showEvents = async (req, res) => {
    try{
        const eventList = await Event.find();
        res.status(200).json(eventList);
    } catch (error) {
        res.status(404).json( { message: error.message } );
    }
}

exports.createEvent = async (req, res) => {
    const { event } = req.body;

    const newEvent =  new Event({ event });

    try {
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json( { message: error.message } );
    }
}
