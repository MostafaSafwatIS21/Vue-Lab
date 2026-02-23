import { ref, watch } from "vue";

export const useLocalStorage = (key, initialValue) => {
  const rawValue = localStorage.getItem(key);
  const value = rawValue ? JSON.parse(rawValue) : initialValue;

  const refValue = ref(value);

  watch(
    refValue,
    (value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    { deep: true },
  );
  return refValue;
};
