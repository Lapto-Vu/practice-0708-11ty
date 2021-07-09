const axios = require("axios");

module.exports = async () => {
    try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=ea758c60a65a40528d9ca4c0b6ab4ab7")
        return res.data;
    } catch(error) {
        console.log(error)
    }
}

