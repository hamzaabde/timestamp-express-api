const express = require("express")
const app = express()

const PORT = process.env.PORT || 8000

app.get("/api", (req, res) => {
	const date = new Date()

	res.json({
		unix: date.valueOf(),
		utc: date.toUTCString(),
	})
})

app.get("/api/:input", (req, res) => {
	const { input } = req.params

	const date = new Date(input)

	if (isNaN(date.valueOf())) {
		res.json({
			error: "Invalid Date",
		})
	}

	res.json({
		unix: date.valueOf(),
		utc: date.toUTCString(),
	})
})

app.listen(PORT, () => {})
