import { getAllWhyChooseUsService } from "../services/whyChooseUs.service.js";

export const getWhyChooseUs = async (req, res) => {
  try {
    const whychooseus = await getAllWhyChooseUsService();
    res.json(whychooseus);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch whychooseus", error });
  }
};
