export class BrewModel {
    constructor(
        public id: string,
        public brewerId: string,
        public ingredients: string[],
        public title: string
    ) {}
}
