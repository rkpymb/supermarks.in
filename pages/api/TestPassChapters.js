import axios from 'axios';
export default function handler(req, res) {
    
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}TestPassChapters.php`, { updatekey: process.env.MYKEY, ChapterIDData: req.body.dataid })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}