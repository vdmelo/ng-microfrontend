export namespace ProfileAction {

    export class ChangeName {
        static readonly type = '[ProfileAction] Change Name';
        constructor(public payload: any) {}
      }
    
      export class AddQuestionnaire {
        static readonly type = '[ProfileAction] Add Questionnaire';
        constructor(public payload: any) {}
      }

}