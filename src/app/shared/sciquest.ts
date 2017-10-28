export const SciQuestions =  {
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
      value: 2,
      type: 'text'
    },
    QUEST3: {
      label: 'QUEST3',
      value: 'M',
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
        { label: 'Gold', value: '1000'},
        { label: 'Bronze', value: '100'},
        { label: 'Silver', value: '10'}
      ],
      validation: {
        required: true
      }
    }
  };
