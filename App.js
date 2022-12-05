const App = {
  data() {
    return {
      mainTitle: 'List of notes',
      myPlaceholder: 'write notes here',
      inputValue: '',
      notes: ['note 1', 'note 2'],
    };
  },
  methods: {
    setInputValue({ target }) {
      this.inputValue = target.value;
    },
    addNote() {
      this.notes.push(this.inputValue);
      this.inputValue = '';
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
};

Vue.createApp(App).mount('#root');
