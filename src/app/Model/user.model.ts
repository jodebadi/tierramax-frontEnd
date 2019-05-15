export class User {
    constructor(
        public userId: number,
        public name: string,
        public lastname: string,
        public email: string,
        public phone: string,
        public password: string,
        public userType: number,
        public createdBy: string,
        public createDate: Date,
        public available: boolean,
        public changes: Array<any>
    ) {}
}
