// // Service Imports
// import { getAllWhyChooseUsService } from "../services/whychooseus.service.js";

// export const getWhyChooseUs = async (req, res) => {
//     try {
//         const whychooseus = await getAllWhyChooseUsService();
//         res.json(whychooseus);
//     } catch (error) {
//         res.status(500).json({ message: "Failed to fetch whychooseus", error });
//     }
// };


import { getAllWhyChooseUsService } from "../services/whychooseus.service.js";

export const getWhyChooseUs = async (req, res) => {
    try {
        const whychooseus = await getAllWhyChooseUsService();
        res.json(whychooseus);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch whychooseus", error });
    }
};
