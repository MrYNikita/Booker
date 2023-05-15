export interface IMaterial {

    title?: string | null;

};

export default class Material implements IMaterial {

    title;

    constructor (params: IMaterial) {

        const {

            title,

        } = params;

        this.title = typeof title === 'string' ? title : null;

    };

};