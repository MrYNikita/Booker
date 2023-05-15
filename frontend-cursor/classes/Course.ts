import { IMaterial } from "./Material";

export interface ICourse {

    title?: string | null;
    buyers?: number;
    observers?: number;
    materials?: IMaterial[];
    description?: string | null;

};

export default class Course implements ICourse {

    title;
    buyers;
    observers;
    materials;
    description;

    constructor(params: ICourse) {

        const {

            title,
            buyers,
            materials,
            observers,
            description,

        } = params;

        this.title = typeof title === 'string' ? title : null;
        this.buyers = typeof buyers === 'number' ? buyers : 0;
        this.materials = Array.isArray(materials) ? materials : [];
        this.observers = typeof observers === 'number' ? observers : 0;
        this.description = typeof description === 'string' ? description : null;

    };

};