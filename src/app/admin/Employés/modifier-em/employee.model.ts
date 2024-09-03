export class Employee {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    service: string;
    fonction: string;
    login: string;
    password: string;
    photo: string;

    constructor() {
        this.id = 0;
        this.nom = '';
        this.prenom = '';
        this.email = '';
        this.telephone = '';
        this.service = '';
        this.fonction = '';
        this.login = '';
        this.password = '';
        this.photo = '';
    }
}
