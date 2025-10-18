const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { Event } = require('../models');

function getTodayDate() {
  return new Date().toISOString().slice(0, 10);
}


router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll({ order: [['date', 'ASC']] });
    res.json(events);
  } catch (error) {
    console.error('Error fetching all events:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/today', async (req, res) => {
  try {
    const today = getTodayDate();
    const events = await Event.findAll({
      where: { date: today },
      order: [['time', 'ASC']],
    });
    res.json(events);
  } catch (error) {
    console.error('Error fetching today events:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/upcoming', async (req, res) => {
  try {
    const today = getTodayDate();
    const events = await Event.findAll({
      where: { date: { [Op.gt]: today } },
      order: [['date', 'ASC']],
    });
    res.json(events);
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/past', async (req, res) => {
  try {
    const today = getTodayDate();
    const events = await Event.findAll({
      where: { date: { [Op.lt]: today } },
      order: [['date', 'DESC']],
    });
    res.json(events);
  } catch (error) {
    console.error('Error fetching past events:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.post('/', async (req, res) => {
  const { title, description, date, time, location } = req.body;

  if (!title || !date) {
    return res.status(400).json({ error: 'Title and date are required' });
  }

  try {
    const event = await Event.create({ title, description, date, time, location });
    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Error creating event' });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    await event.update(req.body);
    res.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Error updating event' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    await event.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Error deleting event' });
  }
});

module.exports = router;
