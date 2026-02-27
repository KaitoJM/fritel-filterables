<script setup>
import { computed, ref } from "vue";
import { useSelectedFilters } from "../../composables/useSelectedFilters";
import Checkbox from "../ui/Checkbox.vue";

const props = defineProps({
  name: String,
  defaultExpand: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["select"]);

const expand = ref(props.defaultExpand);
const { selectedFilters, setSelectedItems } = useSelectedFilters();

const lowerCaseSelections = computed(() => {
  const items = selectedFilters.value;
  return items.map((i) => i.toLowerCase());
});

const handleSelect = (e) => {
  setSelectedItems(e);
  emit("select", e);
};

const onEnter = (el) => {
  el.style.height = "0";
  el.offsetHeight; // force reflow
  el.style.height = el.scrollHeight + "px";
};

const onAfterEnter = (el) => {
  el.style.height = "auto";
};

const onLeave = (el) => {
  el.style.height = el.scrollHeight + "px";
  el.offsetHeight; // force reflow
  el.style.height = "0";
};
</script>
<template>
  <li>
    <div
      class="fritel-filterables-filter-group--title"
      @click="expand = !expand"
    >
      <h3>
        {{ props.name }}
      </h3>
      <svg
        class="fritel-recipe-chevron-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          v-if="expand"
          d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
        />
        <path
          v-else
          d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
        />
      </svg>
    </div>
    <Transition
      name="slide"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
    >
      <div v-if="expand" class="ml-4">
        <div
          v-for="item in props.items"
          class="fritel-filterables-filter-group--item"
        >
          <Checkbox
            :checked="lowerCaseSelections?.includes(item.name.toLowerCase())"
            :id="'cb_' + item.name"
            @change="handleSelect(item.name)"
          />
          <span class="cursor-pointer" @click="handleSelect(item.name)">
            {{ item.name }}
          </span>
        </div>
      </div>
    </Transition>
  </li>
</template>

<style scoped lang="scss">
li {
  @apply bg-white p-4 border border-[#EFEFEF] rounded;
}

.fritel-filterables-filter-group {
  &--title {
    @apply cursor-pointer justify-between flex gap-2 text-primary fill-primary mb-3 items-center hover:bg-black/5 rounded-md p-2 transition-colors;
  }

  &--item {
    @apply mb-4 flex gap-2 items-center;
  }
}

.fritel-recipe-chevron-icon {
  @apply size-3.5;
}
</style>
