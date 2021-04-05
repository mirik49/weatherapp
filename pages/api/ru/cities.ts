const fs = require("fs");

export default function cities(req, res) {
    const {
        query: {id},
        method,
    } = req;
    const citiesAll = fs.readFileSync("./files/russia.json", "utf8");
    const cities = JSON.parse(citiesAll);

    switch (method) {
        case 'GET':

            if (cities) {
                res.status(200).json(cities)
            } else {
                res.status(404).send();
            }

            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
