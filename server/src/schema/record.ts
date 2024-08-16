import mongoose from "mongoose";

interface Record {
    userId: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    paymentMethod: string;
}

const recordSchema = new mongoose.Schema<Record>({
    userId: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    paymentMethod: { type: String, required: true },
});

const RecordModel = mongoose.model<Record>("FinancialRecord", recordSchema);

export default RecordModel;