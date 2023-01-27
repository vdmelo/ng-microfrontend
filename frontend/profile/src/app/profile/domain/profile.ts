import { Questionnaire } from "./questionnaire";

export interface Profile {
    name: string;
    questionnaires: Array<Questionnaire>
}