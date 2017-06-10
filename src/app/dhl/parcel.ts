export class Parcel {
    public number: string;
    public status: string;
    public date:Date;
    constructor(number, status,date) {
        this.number = number;
        this.status = status;
        this.date=date;
    }

}