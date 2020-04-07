export default {
  data() {
    return {
      fullscreen: false,
    };
  },
  mounted() {
    window.addEventListener('keyup', this.handleWindowKeyup, false);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.handleWindowKeyup, false);
  },
  methods: {
    handleWindowKeyup(e) {
      // esc
      if (e.keyCode === 27 && this.fullscreen) {
        this.toggleFullScreen(false);
      }
    },
    toggleFullScreen(fullscreen = !this.fullscreen) {
      this.fullscreen = fullscreen;
      const { 0: html, 1: body } = document.querySelectorAll('html, body');
      const overflow = this.fullscreen ? 'hidden' : null;

      body.style.overflow = overflow;
      html.style.overflow = overflow;
    },
  },
};