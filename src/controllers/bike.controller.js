// Service Imports
import { getAllBikesService } from "../services/bike.service.js";

export const getAllBikes = async (req, res) => {
    try {
        const bikes = await getAllBikesService();
        res.json(bikes);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch bikes", error });
    }
};
