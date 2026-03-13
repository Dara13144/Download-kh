const express = require("express")
const cors = require("cors")
const { exec } = require("child_process")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.post("/api/download", (req, res) => {

    const url = req.body.url

    if (!url) {
        return res.json({ error: "No URL provided" })
    }

    const command = `yt-dlp -f best -g "${url}"`

    exec(command, (error, stdout, stderr) => {

        if (error) {
            return res.json({ error: "Download failed" })
        }

        const video = stdout.split("\n")[0]

        res.json({
            success: true,
            download: video
        })

    })

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})
