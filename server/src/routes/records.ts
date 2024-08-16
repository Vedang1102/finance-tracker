import express, { Request, Response } from "express";
import RecordModel from "../schema/record";

const router = express.Router();

router.get("getAllId/:userId", async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const records = await RecordModel.find({ userId: userId });
        if (!records) {
            return res.status(404).send("No records found for this user");
        }
        res.status(200).send(records);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const newRecordBody = req.body;
        const newRecord = new RecordModel(newRecordBody);
        const savedRecord = await newRecord.save();
        res.status(200).send(savedRecord);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;