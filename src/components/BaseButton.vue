<template>
  <button @click="$emit('click') " class="px-4 py-2 rounded font-bold" :class="classes"><slot></slot></button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      required: false
    },
    large: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    classes() {
      if(!this.type) return "bg-gray-400";
      let type = this.type.toLowerCase();
      let classes = ''
      if (type === "primary") return (classes += "bg-blue-700 text-white");
      if (type === "warning") return (classes += "bg-orange-700 text-white");
      if (type === "error") return (classes += "bg-red-700 text-white");

      return "bg-gray-400";
    }
  }
};
</script>
