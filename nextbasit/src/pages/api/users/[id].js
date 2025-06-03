import { user } from "@/util/db";

export default function handler(req, res) {
    const {
        query: { id },
    } = req;

    const foundUser = user.find((u) => u.id === parseInt(id));

    if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(foundUser);
}
