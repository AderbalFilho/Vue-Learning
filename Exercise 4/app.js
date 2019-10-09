new Vue({
  el: '#exercise',
  data: {
    highlight: false,
    shrink: false,
    classes: '',
    classes2: '',
    boolean: false,
    styles: '',
    progress: 0
  },
  watch: {
    boolean: function() {
      this.boolean === "false" ? this.boolean = false : null;
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.highlight = !vm.highlight;
        vm.highlight ? vm.shrink = false : vm.shrink = true;
      }, 2000);
    },
    startProgress: function() {
      var vm = this;
      setInterval(function() {
        vm.progress < 100 ? vm.progress += 1 : null;
      }, 500);
    }
  }
});
