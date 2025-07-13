import express from 'express';
import connectDB from './config/db.js';
import Schema from './models/project.model.js';

const app = express();
const port = 3000;

app.get('/project-all', async (req, res) => {
    const projects = await Schema.find();
    res.json(projects);
});

app.get('/project-get-one/:id', async (req, res) => {
    const { id } = req.params;
    const project = await Schema.findById(id);
    if (!project) {
        return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
});

app.put('/project-update/:id', async (req, res) => {
    const {id} = req.params;
    const { image, name, type, about } = req.body;
    const project = await Schema.findByIdAndUpdate(id, { image, name, type, about });
    if (!project) {
        return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
})

app.listen(port, () => console.log('Server runnin'));
connectDB();