export class BrewModel {
    constructor(
        private id: string,
        private brewerId: string,
        private ingredients: string[],
        private title: string
    ) {}
}
