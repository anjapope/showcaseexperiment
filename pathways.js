function pathwaysApp() {
  return {
    objects: [],
    methods: [],
    pathways: [],

    selectedMethodId: null,
    selectedObjectId: null,

    init() {
      if (window.PATHWAYS_DATA) {
        this.objects = window.PATHWAYS_DATA.objects || [];
        this.methods = window.PATHWAYS_DATA.methods || [];
        this.pathways = window.PATHWAYS_DATA.pathways || [];
      }
    },

    // Computed properties
    get selectedMethod() {
      return this.methods.find(m => m.id === this.selectedMethodId) || null;
    },

    get selectedObject() {
      return this.objects.find(o => o.id === this.selectedObjectId) || null;
    },

    get filteredObjects() {
      if (!this.selectedMethodId) return [];
      return this.objects.filter(o => (o.methods || []).includes(this.selectedMethodId));
    },

    // Actions
    selectMethod(id) {
      this.selectedMethodId = id;
      this.selectedObjectId = null;
    },

    clearMethod() {
      this.selectedMethodId = null;
      this.selectedObjectId = null;
    },

    selectObject(id) {
      this.selectedObjectId = id;
    },

    clearObject() {
      this.selectedObjectId = null;
    },

    resetAll() {
      this.selectedMethodId = null;
      this.selectedObjectId = null;
    }
  };
}

document.addEventListener('alpine:init', () => {
  Alpine.data('pathwaysApp', pathwaysApp);
});
