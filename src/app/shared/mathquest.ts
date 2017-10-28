export const MathQuestions =  {
    QUEST1: {
       label: 'QUEST1',
       value: 'QUEST1',
       type: 'text',
       validation: {
         required: true
       }
     },
     QUEST2: {
       label: 'QUEST2',
       value: 5,
       type: 'text'
     },
     QUEST3: {
       label: 'QUEST3',
       value: 'F',
       type: 'radio',
       options: [
         { label: 'Male', value: 'M'},
         { label: 'Female', value: 'F'}
       ]
     },
     QUEST4: {
       label: 'QUEST4',
       value: '',
       type: 'select',
       options: [
         { label: '(choose one)', value: ''},
         { label: '1K', value: '1000'},
         { label: '0.1K', value: '100'},
         { label: 'Ten', value: '10'}
       ],
       validation: {
         required: true
       }
     }
   };
