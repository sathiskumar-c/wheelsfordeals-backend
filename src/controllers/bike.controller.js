// Service Imports
import * as BikeService from "../services/bike.service.js";

export const getAllBikes = async (req, res) => {
  try {
    const bikes = await BikeService.getAllBikesService();
    res.status(200).json({ success: true, data: bikes });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bikes", error });
  }
};

export const createNewBike = async (req, res) => {
  try {
    const bike = await BikeService.createNewBike();
    res.status(201).json({ success: true, data: bike });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bikes", error });
  }
};
