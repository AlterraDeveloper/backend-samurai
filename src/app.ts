import express from 'express'

const app = express()
const port = 3000

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

const db = {
    courses: [
        {id: 1, title: "backend"},
        {id: 2, title: "frontend"},
        {id: 3, title: "devops"},
        {id: 4, title: "android"},
        {id: 5, title: "ios"},
    ]
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})
    .get("/ts", (req, res) => {
        res.send("Get started Typescript");
    })
    .get("/js", (req, res) => {
        res.send("Continue with JavaScript")
    })

app.get("/courses", (req, res) => {
    res.json(db.courses);
});

app.get("/courses/:id", (req, res) => {
        const foundCourse = db.courses.find(c => c.id === Number(req.params.id));

        if(!foundCourse){
            res.sendStatus(404);
            return;
        }

        res.json(foundCourse);
    })

app.post("/courses", (req, res) => {
    const newId = db.courses.length + 1;
    db.courses.push({
        id: newId,
        title: req.body.title
    })

    res.sendStatus(201);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})