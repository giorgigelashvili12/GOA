export const getMusics = async (req, res) => {
    try {
        const MUSIC = {
            name: "Sorry...",
            song: "Mental Central Dialog",
            time: "4:00"
        }
        res.status(200).json(MUSIC)
    } catch (err) {
        res.status(500).json({error: err})
    }
}